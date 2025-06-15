import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Header } from '../components/header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Geolocation from '@react-native-community/geolocation';
import { useDispatch } from 'react-redux';
import { setNextPrayerTime } from '../redux/reducer/reducer';


const PrayerScreen: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);
  const [nextPrayer, setNextPrayer] = useState<NextPrayer | null>(null);
  const [countdown, setCountdown] = useState<string>('');
  const [loading, setLoading]=useState<boolean>(false)
  const dispatch = useDispatch();

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: '2-digit', month: 'long' };
    return date.toLocaleDateString('en-GB', options);
  };

  const handlePreviousDate = (): void => {
    setDate(new Date(date.setDate(date.getDate() - 1)));
  };

  const handleNextDate = (): void => {
    setDate(new Date(date.setDate(date.getDate() + 1)));
  };

  const simplifyDate = (date: Date): string => {
    return date.toISOString().split('T')[0].split('-').reverse().join('-');
  };

  const convertTo12HourFormat = (time: string): string => {
    const [hour, minute] = time.split(':').map(Number);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const adjustedHour = hour % 12 || 12;
    return `${adjustedHour}:${minute.toString().padStart(2, '0')} ${ampm}`;
  };

  const determineNextPrayer = (prayerTimes: PrayerTimes): NextPrayer => {
    const currentTime = new Date();
    const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

    return (
      Object.entries(prayerTimes)
        .filter(([key]) => ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].includes(key))
        .map(([name, time]) => {
          const [hour, minute] = time.split(/[: ]/).map(Number);
          const isPM = time.includes('PM');
          const totalMinutes = (isPM && hour !== 12 ? hour + 12 : hour) * 60 + minute;
          return { name, time, totalMinutes };
        })
        .find((prayer) => prayer.totalMinutes > currentMinutes) || { name: 'Fajr', time: prayerTimes.Fajr }
    );
  };

  const startCountdown = (nextPrayer: NextPrayer): void => {
    const [hour, minute] = nextPrayer.time.split(/[: ]/).map(Number);
    const isPM = nextPrayer.time.includes('PM');
    const nextPrayerTime = new Date();
    nextPrayerTime.setHours(isPM && hour !== 12 ? hour + 12 : hour, minute, 0);

    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = nextPrayerTime.getTime() - now.getTime();

      if (timeDifference <= 0) {
        clearInterval(interval);
        setCountdown('00:00:00');
        return;
      }

      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60).toString().padStart(2, '0');
      const seconds = Math.floor((timeDifference / 1000) % 60).toString().padStart(2, '0');
      setCountdown(`${hours}:${minutes}:${seconds}`);
    }, 1000);
  };

  const fetchPrayerTimes = async (latitude: number, longitude: number): Promise<void> => {
    const currentDate = simplifyDate(date);

    try {
      setLoading(true)
      const response = await fetch(
        `https://api.aladhan.com/v1/timings/${currentDate}?latitude=${latitude}&longitude=${longitude}&method=8`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const formattedTimings = Object.entries(data.data.timings).reduce<PrayerTimes>((acc, [key, value]) => {
        if (typeof value === 'string') {
          acc[key] = convertTo12HourFormat(value);
        }
        return acc;
      }, {});
      setLoading(false)
      setPrayerTimes(formattedTimings);
      const next = determineNextPrayer(formattedTimings);
      setNextPrayer(next);
      startCountdown(next);
    } catch (error) {
      console.error('Failed to fetch prayer times:', error);
    }
  };

  const fetchUserLocation = (): void => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchPrayerTimes(latitude, longitude);
      },
      (error) => console.error('Error fetching location:', error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  useEffect(() => {
    fetchUserLocation();
  }, [date]);

  useEffect(() => {
    if (nextPrayer) {
      dispatch(setNextPrayerTime(nextPrayer));
    }
  }, [nextPrayer]);

  const AntDesignIcon = AntDesign as unknown as React.FC<{ name: string; size: number; color: string }>;


  return (
    <>
     <Header title="Prayers" />

    <View style={styles.container}>
     
     { loading ? (
       <View style={styles.loader}>
         <ActivityIndicator size={'large'}/>
       </View>
      ):(
        <>
         <Text style={styles.textPrayer}>Next Prayer</Text>
      <Text style={styles.textTime}>
        {nextPrayer ? `${nextPrayer.name}: ${nextPrayer.time}` : ''}
      </Text>
      {countdown && <Text style={styles.countdown}>Countdown: {countdown}</Text>}

      {prayerTimes &&
        Object.entries(prayerTimes)
          .filter(([key]) => ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].includes(key))
          .map(([key, value]) => (
            <View key={key} style={styles.namaz}>
              <Text style={styles.namazTime}>{key}</Text>
              <Text style={styles.namazTime}>{value}</Text>
            </View>
          ))}
      {
        prayerTimes && (
          <View style={styles.buttonView}>
        <TouchableOpacity onPress={handlePreviousDate} style={styles.iconLeftView}>
          <AntDesignIcon name="left" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.dateView}>
          <Text style={styles.dateText}>{formatDate(date)}</Text>
        </View>
        <TouchableOpacity onPress={handleNextDate} style={styles.iconRightView}>
          <AntDesignIcon name="right" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
        )
      }
        </>
      )
     }
    </View>
        </>
  );
};

export default PrayerScreen;

const styles = StyleSheet.create({
  textPrayer: {
    fontSize: 15,
    color: '#000',
    marginVertical: hp(1.5),
    alignSelf: 'center',
  },
  textTime: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#046920',
    marginVertical: hp(1),
    alignSelf: 'center',
  },
  namaz: {
    width: wp(70),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: hp(3),
  },
  namazTime: {
    fontSize: 20,
    color: '#000',
  },
  buttonView: {
    width: wp(80),
    marginTop: hp(3),
    backgroundColor: '#046920',
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 30,
  },
  iconLeftView: {
    width: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateView: {
    width: wp(55),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRightView: {
    width: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 20,
    color: '#fff',
  },
  countdown: {
    fontSize: 20,
    color: '#ff0000',
    alignSelf: 'center',
  },
  loader:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  container:{
    flex:1
  }
});
