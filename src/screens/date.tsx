import react, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header} from '../components/header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Calendar} from 'react-native-calendars';
import moment from 'moment-hijri';

const DateScreen = ({navigation}) => {
  const [currentHijriDate, setCurrentHijriDate] = useState('');

  useEffect(() => {
    const hijriDate = moment().format('iD iMMM,iYYYY');
    setCurrentHijriDate(hijriDate);
  }, []);
  const Events = [
    {
      title: 'Islamic New Year',
      gregorian: '18 july, 2023',
      hijri: '1 muharram, 1444',
    },
    {
      title: 'Islamic New Year',
      gregorian: '18 july, 2023',
      hijri: '1 muharram, 1444',
    },
    {
      title: 'Islamic New Year',
      gregorian: '18 july, 2023',
      hijri: '1 muharram, 1444',
    },
  ];
  const formatDate = date => {
    const options = {day: '2-digit', month: 'long', year: 'numeric'};
    return date.toLocaleDateString('en-GB', options);
  };

  return (
    <View style={{flex: 1}}>
      <Header title="Hijri Date" />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>{currentHijriDate}</Text>
          <Text style={styles.text}>{formatDate(new Date())}</Text>
        </View>
        <Calendar style={styles.calendar} />
        <Text style={styles.textEvents}>Islamic Events</Text>
        {Events.map((item, index) => {
          return (
            <View key={index} style={styles.eventsView}>
              <Text style={styles.eventsTitle}>{item.title}</Text>
              <Text style={styles.eventsgregorianText}>{item.gregorian}</Text>
              <Text style={styles.eventshijeiText}>{item.hijri}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default DateScreen;

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    backgroundColor: '#046920',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 15,
    flexDirection: 'column',
    padding: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    margin: 5,
  },
  calendar: {
    width: wp(90),
    alignSelf: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textEvents: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#046920',
    margin: 10,
    marginHorizontal: 20,
  },
  widthBox: {
    width: wp(45),
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventsView: {
    width: wp(90),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#046920',
    marginVertical: 5,
  },
  eventsTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 15,
  },
  eventshijeiText: {
    fontSize: 15,
    marginHorizontal: 15,
    padding: 5,
  },
  eventsgregorianText: {
    fontSize: 15,
    color: '#000',
    alignSelf: 'flex-end',
    marginHorizontal: 15,
  },
});
