import react, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from '../components/header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PrayerScreen = () => {
  const [date, setDate] = useState(new Date());
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
  return (
    <View>
      <Header title="Prayers" />
      <Text style={styles.textPrayer}>Next Prayer</Text>
      <Text style={styles.textTime}>5:30 PM</Text>

      {Prayers.map((item, index) => {
        return (
          <View key={item.id} style={styles.namaz}>
            <Text style={styles.namazTime}>{item.name}</Text>
            <Text style={styles.namazTime}>{item.time}</Text>
          </View>
        );
      })}
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
});
