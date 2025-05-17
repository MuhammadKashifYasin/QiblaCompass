import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from '../components/header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Geolocation from '@react-native-community/geolocation';
import { useDispatch, useSelector } from 'react-redux';
import {  setNextPrayerTime } from '../redux/reducer/reducer';

const PrayerScreen = () => {
  const [date, setDate] = useState(new Date());
    const [prayerTimes, setPrayerTimes] = useState(null);
  const [nextPrayer, setNextPrayer] = useState(null);
  const [countdown, setCountdown] = useState('');
    const dispatch = useDispatch()
  const Prayers = [
    {
      id: 1,
      name: 'Fajr',
      time: '5:30 PM',
    },
    {
      id: 2,
      name: 'Dhuhr',
      time: '5:30 PM',
    },
    {
      id: 3,
      name: 'Asr',
      time: '5:30 PM',
    },
    {
      id: 4,
      name: 'Maghrib',
      time: '5:30 PM',
    },
    {
      id: 5,
      name: 'Isha',
      time: '5:30 PM',
    },
  ];
  const formatDate = date => {
    const options = {weekday: 'long', day: '2-digit', month: 'long'};
    return date.toLocaleDateString('en-GB', options);
  };
  const handlePreviousDate = () => {
    const previousDate = new Date(date);
    previousDate.setDate(date.getDate() - 1);
    setDate(previousDate);
  };

  const handleNextDate = () => {
    const nextDate = new Date(date);
    nextDate.setDate(date.getDate() + 1);
    setDate(nextDate);
  };



  const simplifyDate = (date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const convertTo12HourFormat = (time) => {
    const [hour, minute] = time.split(':').map(Number);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const adjustedHour = hour % 12 || 12;
    return `${adjustedHour}:${minute.toString().padStart(2, '0')} ${ampm}`;
  };

  const determineNextPrayer = (prayerTimes) => {
    const currentTime = new Date();
    const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

    const upcomingPrayer = Object.entries(prayerTimes)
      .filter(([key]) => ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].includes(key))
      .map(([name, time]) => {
        const [hour, minute] = time?.split(/[: ]/).map(Number);
        const isPM = time?.includes('PM');
        const totalMinutes = (isPM && hour !== 12 ? hour + 12 : hour) * 60 + minute;
        return { name, time, totalMinutes };
      })
      .find((prayer) => prayer.totalMinutes > currentMinutes);

    const nextPrayer = upcomingPrayer || { name: 'Fajr', time: prayerTimes.Fajr };
    setNextPrayer(nextPrayer);

    return nextPrayer;
  };

  const startCountdown = (nextPrayer) => {
    const [hour, minute] = nextPrayer.time.split(/[: ]/).map(Number);
    const isPM = nextPrayer.time.includes('PM');
    const nextPrayerTime = new Date();
    nextPrayerTime.setHours(isPM && hour !== 12 ? hour + 12 : hour, minute, 0);

    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = nextPrayerTime - now;

      // Only start countdown if there is less than or equal to 1 hour remaining
      if (timeDifference <= 0) {
        clearInterval(interval);
        setCountdown('00:00:00');
        return;
      }

      // If there's more than 1 hour, don't update the countdown yet
      if (timeDifference > 3600000) {  // 1 hour = 3600000 ms
        return;
      }

      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60).toString().padStart(2, '0');
      const seconds = Math.floor((timeDifference / 1000) % 60).toString().padStart(2, '0');
      setCountdown(`${hours}:${minutes}:${seconds}`);
    }, 1000);
  };

  const fetchPrayerTimes = async (latitude, longitude) => {
    const currentDate = simplifyDate(date);

    try {
      const response = await fetch(
        `https://api.aladhan.com/v1/timings/${currentDate}?latitude=${latitude}&longitude=${longitude}&method=8`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const formattedTimings = Object.entries(data.data.timings).reduce((acc, [key, value]) => {
        acc[key] = convertTo12HourFormat(value);
        return acc;
      }, {});

      setPrayerTimes(formattedTimings);
      const next = determineNextPrayer(formattedTimings);
      if (next) {
        startCountdown(next);
      }
    } catch (error) {
      console.error('Failed to fetch prayer times:', error);
    }
  };

  const fetchUserLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchPrayerTimes(latitude, longitude);
      },
      (error) => {
        console.error('Error fetching location:', error);
      },
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
}, [nextPrayer]); // Trigger when either nextPrayer or countdown changes






  return (
    <View>
      <Header title="Prayers" />
      <Text style={styles.textPrayer}>Next Prayer</Text>
      <Text style={styles.textTime}>
        {nextPrayer ? `${nextPrayer?.name}: ${nextPrayer?.time}` : 'Loading...'}
      </Text>
      {countdown && (
        <Text style={styles.countdown}>
          Countdown: {countdown}
        </Text>
      )}

      {prayerTimes &&
        Object.entries(prayerTimes)
          .filter(([key]) => ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].includes(key))
          .map(([key, value]) => (
            <View key={key} style={styles.namaz}>
              <Text style={styles.namazTime}>{key}</Text>
              <Text style={styles.namazTime}>{value}</Text>
            </View>
          ))}
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={handlePreviousDate}
          style={styles.iconLeftView}>
          <AntDesign name="left" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.dateView}>
          <Text style={styles.dateText}>{formatDate(date)}</Text>
        </View>
        <TouchableOpacity onPress={handleNextDate} style={styles.iconRightView}>
          <AntDesign name="right" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
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
});
