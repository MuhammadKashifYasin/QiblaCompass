import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {HeaderIcon} from '../components/header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const KalmaScreen = ({navigation}) => {
  const Kalmas = [
    {
      name: '1- First Kalima (Tayyab):',
      arabic: 'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ مُحَمَّدٌ رَّسُولُ ٱللَّٰهِ',
      meaning:
        'There is no deity but Allah (God), Muhammad is the messenger of Allah',
    },
    {
      name: '2- Second Kalima (Shahadat):',
      arabic:
        'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ وأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
      meaning:
        'I bear witness that there is no deity but Allah (God), the One, there is no partner to Him, and I bear witness that Muhammad is His servant and His messenger.',
    },
    {
      name: '3- Third Kalima (Tamjeed):',
      arabic:
        'سُبْحَانَ ٱللَّٰهِ وَٱلْحَمْدُ لِلَّٰهِ وَلَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَٱللَّٰهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ ٱلْعَلِيِّ ٱلْعَظِيمِ',
      meaning:
        'Glorified is Allah (God), [all] praise is due to Allah (God), there is no deity except Allah (God), Allah (God) is greater [than everything], and there is no power nor strength except in Allah (God), the Lofty, the Great.',
    },
    {
      name: '4- Fourth Kalima (Touheed):',
      arabic:
        'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ ٱلْمُلْكُ وَلَهُ ٱلْحَمْدُ، يُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لَا يَمُوتُ أَبَدًا أَبَدًا، ذُو ٱلْجَلَالِ وَٱلْإِكْرَامِ بِيَدِهِ ٱلْخَيْرُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
      meaning:
        'There is no deity but Allah (God) alone and has no partners. To Him belongs all sovereignty and to Him belongs all Praise. He gives life and causes death, and He [Himself] is alive and does not die, ever! Ever! He of Majesty and Munificence. In His hand is all goodness and He has power over everything.',
    },
    {
      name: '5- Fifth Kalima (Astaghfar):',
      arabic:
        'أَسْتَغْفِرُ ٱللَّٰهَ رَبِّي مِنْ كُلِّ ذَنْبٍ أَذْنَبْتُهُ عَمَدًا أَوْ خَطَأً سِرًّا أوْ عَلَانِيَةً وَأَتُوبُ إِلَيْهِ مِنَ ٱلذَّنْبِ ٱلَّذِي أَعْلَمُ وَمِنَ ٱلذَّنْبِ ٱلَّذِي لَا أَعْلَمُ، إِنَّكَ أَنْتَ عَلَّامُ ٱلْغُيُوبِ وَسَتَّارُ ٱلْعُيُوْبِ وَغَفَّارُ ٱلذُّنُوبِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ ٱلْعَلِيِّ ٱلْعَظِيمِ',
      meaning:
        'I seek the forgiveness of Allah (God), my Lord, for every sin which I knowingly committed and every sin which I unknowingly committed. Verily, You are the Knower of the hidden, the Concealer of the faults, and the Forgiver of the sins, and there is no power nor strength except in Allah (God), the Lofty, the Great.',
    },
    {
      name: '6- Sixth Kalima (Radd-e-Kufar):',
      arabic:
        'ٱللَّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ أَنْ أُشْرِكَ بِكَ شَيْءً وَأَنَا أَعْلَمُ بِهِ وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ بِهِ تُبْتُ عَنْهُ وَتَبَرَّأَتُ مِنَ ٱلْكُفْر وَٱلشِّرْكِ وَٱلْكِذْبِ وَٱلْغِيبَةِ وَٱلْبِدْعَةِ وَٱلنَّمِيمَةِ وَٱلْفَوَاحِشِ وَٱلْبُهْتَانِ وَٱلْمَعَاصِي كُلِّهَا وَأَسْلَمْتُ وَأَقُولُ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ مُحَمَّدٌ رَسُولُ ٱللَّٰهِ',
      meaning:
        'O Allah (God)! I seek refuge in You from that I should not join any partner with You and I know of it, and I seek Your forgiveness from that which I do not know. I repent from it and I reject disbelief, polytheism, falsehood, backbiting, deviation, defamation, immorality, calumny and all sinfulness. I submit to You and I declare: There is no deity but Allah (God), Muhammad is the messenger of Allah (God).',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <HeaderIcon
        title={'Muhammad Names'}
        navigation={() => navigation.goBack()}
      />
      <ScrollView>
        {Kalmas.map((item, index) => {
          return (
            <View key={index} style={styles.container}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.arabic}</Text>
              <Text style={styles.meaning}>{item.meaning}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default KalmaScreen;

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    backgroundColor: '#fff',
    alignSelf: 'center',
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
    marginVertical: hp(1),
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: hp(1),
  },
  meaning: {
    fontSize: 15,
  },
});
