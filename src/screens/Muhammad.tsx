import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {HeaderIcon} from '../components/header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MuhammadScreen: React.FC <RamadanScreenProps> = ({navigation}) => {
  const MuhammadNames = [
    {
      id: 1,
      nameArabic: 'محمد',
      nameEnglish: 'Muhammad',
      meaning: 'The Praised One',
    },
    {
      id: 2,
      nameArabic: 'أحمد',
      nameEnglish: 'Ahmad',
      meaning: 'Most Praiseworthy',
    },
    {
      id: 3,
      nameArabic: 'الماحي',
      nameEnglish: 'Al-Mahi',
      meaning: 'The Wiper Out of Infidelity',
    },
    {
      id: 4,
      nameArabic: 'الحاشر',
      nameEnglish: 'Al-Hashir',
      meaning: 'The Gatherer',
    },
    {
      id: 5,
      nameArabic: 'العاقب',
      nameEnglish: 'Al-Aqib',
      meaning: 'The Last',
    },
    {
      id: 6,
      nameArabic: 'المتقي',
      nameEnglish: 'Al-Mutaqi',
      meaning: 'The God-Fearing',
    },
    {
      id: 7,
      nameArabic: 'الحسيب',
      nameEnglish: 'Al-Hasib',
      meaning: 'The Reckoner',
    },
    {
      id: 8,
      nameArabic: 'المؤمن',
      nameEnglish: "Al-Mu'min",
      meaning: 'The Faithful',
    },
    {
      id: 9,
      nameArabic: 'المنجي',
      nameEnglish: 'Al-Munji',
      meaning: 'The Savior',
    },
    {
      id: 10,
      nameArabic: 'القائم',
      nameEnglish: "Al-Qa'im",
      meaning: 'The Raiser',
    },
    {
      id: 11,
      nameArabic: 'المهدي',
      nameEnglish: 'Al-Mahdi',
      meaning: 'The Guided',
    },
    {
      id: 12,
      nameArabic: 'المقسط',
      nameEnglish: 'Al-Muqsit',
      meaning: 'The Equitable',
    },
    {
      id: 13,
      nameArabic: 'الشفيع',
      nameEnglish: 'Ash-Shafi',
      meaning: 'The Intercessor',
    },
    {
      id: 14,
      nameArabic: 'الواحد',
      nameEnglish: 'Al-Wahid',
      meaning: 'The Unique',
    },
    {
      id: 15,
      nameArabic: 'الفتاح',
      nameEnglish: 'Al-Fattah',
      meaning: 'The Opener',
    },
    {
      id: 16,
      nameArabic: 'الرؤوف',
      nameEnglish: "Ar-Ra'uf",
      meaning: 'The Kind',
    },
    {
      id: 17,
      nameArabic: 'الرحيم',
      nameEnglish: 'Ar-Rahim',
      meaning: 'The Merciful',
    },
    {
      id: 18,
      nameArabic: 'المرشد',
      nameEnglish: 'Al-Mursheed',
      meaning: 'The Guide',
    },
    {
      id: 19,
      nameArabic: 'المعين',
      nameEnglish: "Al-Mu'in",
      meaning: 'The Helper',
    },
    {
      id: 20,
      nameArabic: 'النبي',
      nameEnglish: 'An-Nabi',
      meaning: 'The Prophet',
    },
    {
      id: 21,
      nameArabic: 'الكريم',
      nameEnglish: 'Al-Karim',
      meaning: 'The Generous',
    },
    {
      id: 22,
      nameArabic: 'المجيب',
      nameEnglish: 'Al-Mujib',
      meaning: 'The Responsive',
    },
    {
      id: 23,
      nameArabic: 'المقيت',
      nameEnglish: 'Al-Muqit',
      meaning: 'The Sustainer',
    },
    {
      id: 24,
      nameArabic: 'الغفار',
      nameEnglish: 'Al-Ghaffar',
      meaning: 'The Forgiver',
    },
    {
      id: 25,
      nameArabic: 'التواب',
      nameEnglish: 'At-Tawwab',
      meaning: 'The Relenting',
    },
    {
      id: 26,
      nameArabic: 'العزيز',
      nameEnglish: 'Al-Aziz',
      meaning: 'The Mighty',
    },
    {
      id: 27,
      nameArabic: 'المنعم',
      nameEnglish: 'Al-Mannan',
      meaning: 'The Bestower',
    },
    {
      id: 28,
      nameArabic: 'الفتح',
      nameEnglish: 'Al-Fattah',
      meaning: 'The Opener',
    },
    {
      id: 29,
      nameArabic: 'الصبور',
      nameEnglish: 'As-Sabur',
      meaning: 'The Patient',
    },
    {
      id: 30,
      nameArabic: 'الخبير',
      nameEnglish: 'Al-Khabir',
      meaning: 'The All-Aware',
    },
    {
      id: 31,
      nameArabic: 'الحفيظ',
      nameEnglish: 'Al-Hafiz',
      meaning: 'The Preserver',
    },
    {
      id: 32,
      nameArabic: 'المقدم',
      nameEnglish: 'Al-Muqaddim',
      meaning: 'The Expediter',
    },
    {
      id: 33,
      nameArabic: 'المؤخر',
      nameEnglish: "Al-Mu'akhkhir",
      meaning: 'The Delayer',
    },
    {
      id: 34,
      nameArabic: 'الأول',
      nameEnglish: 'Al-Awwal',
      meaning: 'The First',
    },
    {
      id: 35,
      nameArabic: 'الآخر',
      nameEnglish: 'Al-Akhir',
      meaning: 'The Last',
    },
    {
      id: 36,
      nameArabic: 'الظاهر',
      nameEnglish: 'Az-Zahir',
      meaning: 'The Manifest',
    },
    {
      id: 37,
      nameArabic: 'الباطن',
      nameEnglish: 'Al-Batin',
      meaning: 'The Hidden',
    },
    {
      id: 38,
      nameArabic: 'الوالي',
      nameEnglish: 'Al-Wali',
      meaning: 'The Governor',
    },
    {
      id: 39,
      nameArabic: 'المتعالي',
      nameEnglish: "Al-Muta'ali",
      meaning: 'The Most High',
    },
    {
      id: 40,
      nameArabic: 'البر',
      nameEnglish: 'Al-Barr',
      meaning: 'The Source of All Goodness',
    },
    {
      id: 41,
      nameArabic: 'التواب',
      nameEnglish: 'At-Tawwab',
      meaning: 'The Guide to Repentance',
    },
    {
      id: 42,
      nameArabic: 'المنتقم',
      nameEnglish: 'Al-Muntaqim',
      meaning: 'The Avenger',
    },
    {
      id: 43,
      nameArabic: 'العفو',
      nameEnglish: "Al-'Afuww",
      meaning: 'The Forgiver and Effacer of Sins',
    },
    {
      id: 44,
      nameArabic: 'الرؤوف',
      nameEnglish: "Ar-Ra'uf",
      meaning: 'The Clement',
    },
    {
      id: 45,
      nameArabic: 'مالك الملك',
      nameEnglish: 'Malik-ul-Mulk',
      meaning: 'The Owner of All Sovereignty',
    },
    {
      id: 46,
      nameArabic: 'ذو الجلال والإكرام',
      nameEnglish: 'Dhu-al-Jalali wal-Ikram',
      meaning: 'The Lord of Majesty and Generosity',
    },
    {
      id: 47,
      nameArabic: 'المقسط',
      nameEnglish: 'Al-Muqsit',
      meaning: 'The Equitable',
    },
    {
      id: 48,
      nameArabic: 'الجامع',
      nameEnglish: "Al-Jami'",
      meaning: 'The Gatherer',
    },
    {
      id: 49,
      nameArabic: 'الغني',
      nameEnglish: 'Al-Ghani',
      meaning: 'The Rich',
    },
    {
      id: 50,
      nameArabic: 'المغني',
      nameEnglish: 'Al-Mughni',
      meaning: 'The Enricher',
    },
    {
      id: 51,
      nameArabic: 'المانع',
      nameEnglish: "Al-Mani'",
      meaning: 'The Withholder',
    },
    {
      id: 52,
      nameArabic: 'الضار',
      nameEnglish: 'Ad-Darr',
      meaning: 'The Distressor',
    },
    {
      id: 53,
      nameArabic: 'النافع',
      nameEnglish: "An-Nafi'",
      meaning: 'The Benefactor',
    },
    {
      id: 54,
      nameArabic: 'النور',
      nameEnglish: 'An-Nur',
      meaning: 'The Light',
    },
    {
      id: 55,
      nameArabic: 'الهادي',
      nameEnglish: 'Al-Hadi',
      meaning: 'The Guide',
    },
    {
      id: 56,
      nameArabic: 'البديع',
      nameEnglish: "Al-Badi'",
      meaning: 'The Incomparable Originator',
    },
    {
      id: 57,
      nameArabic: 'الباقي',
      nameEnglish: 'Al-Baqi',
      meaning: 'The Ever Enduring and Immutable',
    },
    {
      id: 58,
      nameArabic: 'الوارث',
      nameEnglish: 'Al-Warith',
      meaning: 'The Heir',
    },
    {
      id: 59,
      nameArabic: 'الرشيد',
      nameEnglish: 'Ar-Rashid',
      meaning: 'The Guide to the Right Path',
    },
    {
      id: 60,
      nameArabic: 'الصبور',
      nameEnglish: 'As-Sabur',
      meaning: 'The Patient',
    },
    {
      id: 61,
      nameArabic: 'المقدم',
      nameEnglish: 'Al-Muqaddim',
      meaning: 'The Expediter',
    },
    {
      id: 62,
      nameArabic: 'المؤخر',
      nameEnglish: "Al-Mu'akhkhir",
      meaning: 'The Delayer',
    },
    {
      id: 63,
      nameArabic: 'الأول',
      nameEnglish: 'Al-Awwal',
      meaning: 'The First',
    },
    {
      id: 64,
      nameArabic: 'الآخر',
      nameEnglish: 'Al-Akhir',
      meaning: 'The Last',
    },
    {
      id: 65,
      nameArabic: 'الظاهر',
      nameEnglish: 'Az-Zahir',
      meaning: 'The Manifest',
    },
    {
      id: 66,
      nameArabic: 'الباطن',
      nameEnglish: 'Al-Batin',
      meaning: 'The Hidden',
    },
    {
      id: 67,
      nameArabic: 'الوالي',
      nameEnglish: 'Al-Wali',
      meaning: 'The Governor',
    },
    {
      id: 68,
      nameArabic: 'المتعالي',
      nameEnglish: "Al-Muta'ali",
      meaning: 'The Most High',
    },
    {
      id: 69,
      nameArabic: 'البر',
      nameEnglish: 'Al-Barr',
      meaning: 'The Source of All Goodness',
    },
    {
      id: 70,
      nameArabic: 'التواب',
      nameEnglish: 'At-Tawwab',
      meaning: 'The Guide to Repentance',
    },
    {
      id: 71,
      nameArabic: 'المنتقم',
      nameEnglish: 'Al-Muntaqim',
      meaning: 'The Avenger',
    },
    {
      id: 72,
      nameArabic: 'العفو',
      nameEnglish: "Al-'Afuww",
      meaning: 'The Forgiver and Effacer of Sins',
    },
    {
      id: 73,
      nameArabic: 'الرؤوف',
      nameEnglish: "Ar-Ra'uf",
      meaning: 'The Clement',
    },
    {
      id: 74,
      nameArabic: 'مالك الملك',
      nameEnglish: 'Malik-ul-Mulk',
      meaning: 'The Owner of All Sovereignty',
    },
    {
      id: 75,
      nameArabic: 'ذو الجلال والإكرام',
      nameEnglish: 'Dhu-al-Jalali wal-Ikram',
      meaning: 'The Lord of Majesty and Generosity',
    },
    {
      id: 76,
      nameArabic: 'المقسط',
      nameEnglish: 'Al-Muqsit',
      meaning: 'The Equitable',
    },
    {
      id: 77,
      nameArabic: 'الجامع',
      nameEnglish: "Al-Jami'",
      meaning: 'The Gatherer',
    },
    {
      id: 78,
      nameArabic: 'الغني',
      nameEnglish: 'Al-Ghani',
      meaning: 'The Rich',
    },
    {
      id: 79,
      nameArabic: 'المغني',
      nameEnglish: 'Al-Mughni',
      meaning: 'The Enricher',
    },
    {
      id: 80,
      nameArabic: 'المانع',
      nameEnglish: "Al-Mani'",
      meaning: 'The Withholder',
    },
    {
      id: 81,
      nameArabic: 'الضار',
      nameEnglish: 'Ad-Darr',
      meaning: 'The Distressor',
    },
    {
      id: 82,
      nameArabic: 'النافع',
      nameEnglish: "An-Nafi'",
      meaning: 'The Benefactor',
    },
    {
      id: 83,
      nameArabic: 'النور',
      nameEnglish: 'An-Nur',
      meaning: 'The Light',
    },
    {
      id: 84,
      nameArabic: 'الهادي',
      nameEnglish: 'Al-Hadi',
      meaning: 'The Guide',
    },
    {
      id: 85,
      nameArabic: 'البديع',
      nameEnglish: "Al-Badi'",
      meaning: 'The Incomparable Originator',
    },
    {
      id: 86,
      nameArabic: 'الباقي',
      nameEnglish: 'Al-Baqi',
      meaning: 'The Ever Enduring and Immutable',
    },
    {
      id: 87,
      nameArabic: 'الوارث',
      nameEnglish: 'Al-Warith',
      meaning: 'The Heir',
    },
    {
      id: 88,
      nameArabic: 'الرشيد',
      nameEnglish: 'Ar-Rashid',
      meaning: 'The Guide to the Right Path',
    },
    {
      id: 89,
      nameArabic: 'الصبور',
      nameEnglish: 'As-Sabur',
      meaning: 'The Patient',
    },
    {
      id: 90,
      nameArabic: 'المقدم',
      nameEnglish: 'Al-Muqaddim',
      meaning: 'The Expediter',
    },
    {
      id: 91,
      nameArabic: 'المؤخر',
      nameEnglish: "Al-Mu'akhkhir",
      meaning: 'The Delayer',
    },
    {
      id: 92,
      nameArabic: 'الأول',
      nameEnglish: 'Al-Awwal',
      meaning: 'The First',
    },
    {
      id: 93,
      nameArabic: 'الآخر',
      nameEnglish: 'Al-Akhir',
      meaning: 'The Last',
    },
    {
      id: 94,
      nameArabic: 'الظاهر',
      nameEnglish: 'Az-Zahir',
      meaning: 'The Manifest',
    },
    {
      id: 95,
      nameArabic: 'الباطن',
      nameEnglish: 'Al-Batin',
      meaning: 'The Hidden',
    },
    {
      id: 96,
      nameArabic: 'الوالي',
      nameEnglish: 'Al-Wali',
      meaning: 'The Governor',
    },
    {
      id: 97,
      nameArabic: 'المتعالي',
      nameEnglish: "Al-Muta'ali",
      meaning: 'The Most High',
    },
    {
      id: 98,
      nameArabic: 'البر',
      nameEnglish: 'Al-Barr',
      meaning: 'The Source of All Goodness',
    },
    {
      id: 99,
      nameArabic: 'التواب',
      nameEnglish: 'At-Tawwab',
      meaning: 'The Guide to Repentance',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <HeaderIcon
        title={'Muhammad Names'}
        navigation={() => navigation.goBack()}
      />
      <ScrollView>
        {MuhammadNames.map((item, index) => {
          return (
            <View key={index} style={styles.container}>
              <Text style={styles.text}>{item.nameEnglish}</Text>
              <Text style={styles.text}>{item.nameArabic}</Text>
              <Text style={styles.meaning}>{item.meaning}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MuhammadScreen;

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
  },
  meaning: {
    fontSize: 15,
    color:'#000'
  },
});
