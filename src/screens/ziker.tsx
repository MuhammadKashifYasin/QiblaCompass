import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Header, HeaderIcon} from '../components/header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ZikerScreen = ({navigation}) => {
  const Zikers = [
    {
      id: 1,
      ziker: 'لآ اِلَهَ اِلّا اللّهُ مُحَمَّدٌ رَسُوُل اللّهِ',
      amount: '1000',
    },
    {
      id: 2,
      ziker: 'فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ',
      amount: '1000',
    },
    {
      id: 3,
      ziker:
        'يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا',
      amount: '1000',
    },
    {
      id: 4,
      ziker:
        'اللّهُـمَّ أَعِـنِّي عَلـى ذِكْـرِكَ وَشُكْـرِك ، وَحُسْـنِ عِبـادَتِـك',
      amount: '1000',
    },
    {
      id: 5,
      ziker: 'سُبْحَانَ اللهِ وَبِحَمْدِهِ',
      amount: '1000',
    },
    {
      id: 6,
      ziker:
        'لاَ إِلَهَ إِلاَّ أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
      amount: '100',
    },
    {
      id: 7,
      ziker:
        'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلاَ إِلَهَ إِلاَّ اللَّهُ وَاللَّهُ أَكْبَرُ',
      amount: '100',
    },
    {
      id: 8,
      ziker: 'وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ',
      amount: '100',
    },
    {
      id: 9,
      ziker: 'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',
      amount: '100',
    },
    {
      id: 10,
      ziker:
        'إِنَّ ٱلَّذِينَ كَفَرُوا۟ بِٱلذِّكْرِ لَمَّا جَآءَهُمْ ۖ وَإِنَّهُۥ لَكِتَـٰبٌ عَزِيزٌۭ',
      amount: '100',
    },
  ];

  const handleZiker = ziker => {
    navigation.navigate('tasbeeh', {ziker: ziker.ziker, amount: ziker.amount});
    console.log('ziker', ziker.ziker, 'amount', ziker.amount);
  };
  return (
    <View style={{flex: 1}}>
      <HeaderIcon title="Select Ziker" navigation={() => navigation.goBack()} />
      <ScrollView>
        {Zikers.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => handleZiker(item)}
              style={styles.container}
              key={index}>
              <View
                style={{
                  width: wp(65),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.text}>{item.ziker}</Text>
              </View>

              <View
                style={{
                  width: wp(25),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.text}>{item.amount}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ZikerScreen;

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    borderRadius: 15,
    marginVertical: hp(1.5),
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
