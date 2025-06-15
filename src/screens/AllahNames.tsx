import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {HeaderIcon} from '../components/header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const AllahNames: React.FC <RamadanScreenProps> = ({navigation}) => {
  const AllahNames = [
    {
      id: 1,
      nameArabic: 'الرَّحْمَنُ',
      nameEnglish: 'Ar-Rahman',
      meaning: 'The Compassionate',
    },
    {
      id: 2,
      nameArabic: 'الرَّحِيمُ',
      nameEnglish: 'Ar-Rahim',
      meaning: 'The Merciful',
    },
    {
      id: 3,
      nameArabic: 'الْمَلِكُ',
      nameEnglish: 'Al-Malik',
      meaning: 'The King',
    },
    {
      id: 4,
      nameArabic: 'الْقُدُّوسُ',
      nameEnglish: 'Al-Quddus',
      meaning: 'The Holy',
    },
    {
      id: 5,
      nameArabic: 'السَّلاَمُ',
      nameEnglish: 'As-Salam',
      meaning: 'The Source of Peace',
    },
    {
      id: 6,
      nameArabic: 'الْمُؤْمِنُ',
      nameEnglish: "Al-Mu'min",
      meaning: 'The Guardian of Faith',
    },
    {
      id: 7,
      nameArabic: 'الْمُهَيْمِنُ',
      nameEnglish: 'Al-Muhaymin',
      meaning: 'The Protector',
    },
    {
      id: 8,
      nameArabic: 'الْعَزِيزُ',
      nameEnglish: 'Al-Aziz',
      meaning: 'The Mighty',
    },
    {
      id: 9,
      nameArabic: 'الْجَبَّارُ',
      nameEnglish: 'Al-Jabbar',
      meaning: 'The Compeller',
    },
    {
      id: 10,
      nameArabic: 'الْمُتَكَبِّرُ',
      nameEnglish: 'Al-Mutakabbir',
      meaning: 'The Majestic',
    },
    {
      id: 11,
      nameArabic: 'الْخَالِقُ',
      nameEnglish: 'Al-Khaliq',
      meaning: 'The Creator',
    },
    {
      id: 12,
      nameArabic: 'الْبَارِئُ',
      nameEnglish: 'Al-Bari',
      meaning: 'The Evolver',
    },
    {
      id: 13,
      nameArabic: 'الْمُصَوِّرُ',
      nameEnglish: 'Al-Musawwir',
      meaning: 'The Fashioner',
    },
    {
      id: 14,
      nameArabic: 'الْغَفَّارُ',
      nameEnglish: 'Al-Ghaffar',
      meaning: 'The Forgiving',
    },
    {
      id: 15,
      nameArabic: 'الْقَهَّارُ',
      nameEnglish: 'Al-Qahhar',
      meaning: 'The Subduer',
    },
    {
      id: 16,
      nameArabic: 'الْوَهَّابُ',
      nameEnglish: 'Al-Wahhab',
      meaning: 'The Bestower',
    },
    {
      id: 17,
      nameArabic: 'الرَّزَّاقُ',
      nameEnglish: 'Ar-Razzaq',
      meaning: 'The Provider',
    },
    {
      id: 18,
      nameArabic: 'الْفَتَّاحُ',
      nameEnglish: 'Al-Fattah',
      meaning: 'The Opener',
    },
    {
      id: 19,
      nameArabic: 'اَلْعَلِيْمُ',
      nameEnglish: 'Al-Alim',
      meaning: 'The All-Knowing',
    },
    {
      id: 20,
      nameArabic: 'الْقَابِضُ',
      nameEnglish: 'Al-Qabid',
      meaning: 'The Constrictor',
    },
    {
      id: 21,
      nameArabic: 'الْبَاسِطُ',
      nameEnglish: 'Al-Basit',
      meaning: 'The Reliever',
    },
    {
      id: 22,
      nameArabic: 'الْخَافِضُ',
      nameEnglish: 'Al-Khafid',
      meaning: 'The Abaser',
    },
    {
      id: 23,
      nameArabic: 'الرَّافِعُ',
      nameEnglish: 'Ar-Rafi',
      meaning: 'The Exalter',
    },
    {
      id: 24,
      nameArabic: 'الْمُعِزُّ',
      nameEnglish: "Al-Mu'izz",
      meaning: 'The Bestower of Honour',
    },
    {
      id: 25,
      nameArabic: 'المُذِلُّ',
      nameEnglish: 'Al-Mudhill',
      meaning: 'The Humiliator',
    },
    {
      id: 26,
      nameArabic: 'السَّمِيعُ',
      nameEnglish: 'As-Sami',
      meaning: 'The All-Hearing',
    },
    {
      id: 27,
      nameArabic: 'الْبَصِيرُ',
      nameEnglish: 'Al-Basir',
      meaning: 'The All-Seeing',
    },
    {
      id: 28,
      nameArabic: 'الْحَكَمُ',
      nameEnglish: 'Al-Hakam',
      meaning: 'The Judge',
    },
    {
      id: 29,
      nameArabic: 'الْعَدْلُ',
      nameEnglish: 'Al-Adl',
      meaning: 'The Just',
    },
    {
      id: 30,
      nameArabic: 'اللَّطِيفُ',
      nameEnglish: 'Al-Latif',
      meaning: 'The Subtle',
    },
    {
      id: 31,
      nameArabic: 'الْخَبِيرُ',
      nameEnglish: 'Al-Khabir',
      meaning: 'The All-Aware',
    },
    {
      id: 32,
      nameArabic: 'الْحَلِيمُ',
      nameEnglish: 'Al-Halim',
      meaning: 'The Forbearing',
    },
    {
      id: 33,
      nameArabic: 'الْعَظِيمُ',
      nameEnglish: 'Al-Azim',
      meaning: 'The Magnificent',
    },
    {
      id: 34,
      nameArabic: 'الْغَفُورُ',
      nameEnglish: 'Al-Ghafoor',
      meaning: 'The Forgiver and Hider of Faults',
    },
    {
      id: 35,
      nameArabic: 'الشَّكُورُ',
      nameEnglish: 'Ash-Shakoor',
      meaning: 'The Rewarder of Thankfulness',
    },
    {
      id: 36,
      nameArabic: 'الْعَلِيُّ',
      nameEnglish: 'Al-Ali',
      meaning: 'The Highest',
    },
    {
      id: 37,
      nameArabic: 'الْكَبِيرُ',
      nameEnglish: 'Al-Kabir',
      meaning: 'The Greatest',
    },
    {
      id: 38,
      nameArabic: 'الْحَفِيظُ',
      nameEnglish: 'Al-Hafiz',
      meaning: 'The Preserver',
    },
    {
      id: 39,
      nameArabic: 'المُقيِت',
      nameEnglish: 'Al-Muqeet',
      meaning: 'The Nourisher',
    },
    {
      id: 40,
      nameArabic: 'الْحسِيبُ',
      nameEnglish: 'Al-Hasib',
      meaning: 'The Bringer of Judgment',
    },
    {
      id: 41,
      nameArabic: 'الْجَلِيلُ',
      nameEnglish: 'Al-Jalil',
      meaning: 'The Majestic',
    },
    {
      id: 42,
      nameArabic: 'الْكَرِيمُ',
      nameEnglish: 'Al-Karim',
      meaning: 'The Generous',
    },
    {
      id: 43,
      nameArabic: 'الرَّقِيبُ',
      nameEnglish: 'Ar-Raqib',
      meaning: 'The Watchful',
    },
    {
      id: 44,
      nameArabic: 'الْمُجِيبُ',
      nameEnglish: 'Al-Mujib',
      meaning: 'The Responsive',
    },
    {
      id: 45,
      nameArabic: 'الْوَاسِعُ',
      nameEnglish: 'Al-Wasi',
      meaning: 'The All-Encompassing',
    },
    {
      id: 46,
      nameArabic: 'الْحَكِيمُ',
      nameEnglish: 'Al-Hakim',
      meaning: 'The Wise',
    },
    {
      id: 47,
      nameArabic: 'الْوَدُودُ',
      nameEnglish: 'Al-Wadud',
      meaning: 'The Loving',
    },
    {
      id: 48,
      nameArabic: 'الْمَجِيدُ',
      nameEnglish: 'Al-Majid',
      meaning: 'The Glorious',
    },
    {
      id: 49,
      nameArabic: 'الْبَاعِثُ',
      nameEnglish: "Al-Ba'ith",
      meaning: 'The Resurrector',
    },
    {
      id: 50,
      nameArabic: 'الشَّهِيدُ',
      nameEnglish: 'Ash-Shahid',
      meaning: 'The Witness',
    },
    {
      id: 51,
      nameArabic: 'الْحَقُّ',
      nameEnglish: 'Al-Haqq',
      meaning: 'The Truth',
    },
    {
      id: 52,
      nameArabic: 'الْوَكِيلُ',
      nameEnglish: 'Al-Wakil',
      meaning: 'The Trustee',
    },
    {
      id: 53,
      nameArabic: 'الْقَوِيُّ',
      nameEnglish: 'Al-Qawiyy',
      meaning: 'The Strong',
    },
    {
      id: 54,
      nameArabic: 'الْمَتِينُ',
      nameEnglish: 'Al-Matin',
      meaning: 'The Firm',
    },
    {
      id: 55,
      nameArabic: 'الْوَلِيُّ',
      nameEnglish: 'Al-Waliyy',
      meaning: 'The Friend',
    },
    {
      id: 56,
      nameArabic: 'الْحَمِيدُ',
      nameEnglish: 'Al-Hamid',
      meaning: 'The Praiseworthy',
    },
    {
      id: 57,
      nameArabic: 'الْمُحْصِي',
      nameEnglish: 'Al-Muhsi',
      meaning: 'The Accounter',
    },
    {
      id: 58,
      nameArabic: 'الْمُبْدِئُ',
      nameEnglish: 'Al-Mubdi',
      meaning: 'The Originator',
    },
    {
      id: 59,
      nameArabic: 'الْمُعِيدُ',
      nameEnglish: 'Al-Muid',
      meaning: 'The Restorer',
    },
    {
      id: 60,
      nameArabic: 'الْمُحْيِي',
      nameEnglish: 'Al-Muhyi',
      meaning: 'The Giver of Life',
    },
    {
      id: 61,
      nameArabic: 'اَلْمُمِيتُ',
      nameEnglish: 'Al-Mumit',
      meaning: 'The Taker of Life',
    },
    {
      id: 62,
      nameArabic: 'الْحَيُّ',
      nameEnglish: 'Al-Hayy',
      meaning: 'The Ever Living',
    },
    {
      id: 63,
      nameArabic: 'الْقَيُّومُ',
      nameEnglish: 'Al-Qayyum',
      meaning: 'The Self Subsisting Sustainer of All',
    },
    {
      id: 64,
      nameArabic: 'الْوَاجِدُ',
      nameEnglish: 'Al-Wajid',
      meaning: 'The Perceiver',
    },
    {
      id: 65,
      nameArabic: 'الْمَاجِدُ',
      nameEnglish: 'Al-Majid',
      meaning: 'The Illustrious',
    },
    {
      id: 66,
      nameArabic: 'الْواحِدُ',
      nameEnglish: 'Al-Wahid',
      meaning: 'The One',
    },
    {
      id: 67,
      nameArabic: 'اَلْأَحَدُ',
      nameEnglish: 'Al-Ahad',
      meaning: 'The Unique',
    },
    {
      id: 68,
      nameArabic: 'الصَّمَدُ',
      nameEnglish: 'As-Samad',
      meaning: 'The Eternal',
    },
    {
      id: 69,
      nameArabic: 'الْقَادِرُ',
      nameEnglish: 'Al-Qadir',
      meaning: 'The Able',
    },
    {
      id: 70,
      nameArabic: 'الْمُقْتَدِرُ',
      nameEnglish: 'Al-Muqtadir',
      meaning: 'The Determiner',
    },
    {
      id: 71,
      nameArabic: 'الْمُقَدِّمُ',
      nameEnglish: 'Al-Muqaddim',
      meaning: 'The Expediter',
    },
    {
      id: 72,
      nameArabic: 'الْمُؤَخِّرُ',
      nameEnglish: "Al-Mu'akhkhir",
      meaning: 'The Delayer',
    },
    {
      id: 73,
      nameArabic: 'الأوَّلُ',
      nameEnglish: 'Al-Awwal',
      meaning: 'The First',
    },
    {
      id: 74,
      nameArabic: 'الآخِرُ',
      nameEnglish: 'Al-Akhir',
      meaning: 'The Last',
    },
    {
      id: 75,
      nameArabic: 'الظَّاهِرُ',
      nameEnglish: 'Az-Zahir',
      meaning: 'The Manifest',
    },
    {
      id: 76,
      nameArabic: 'الْبَاطِنُ',
      nameEnglish: 'Al-Batin',
      meaning: 'The Hidden',
    },
    {
      id: 77,
      nameArabic: 'الْوَالِي',
      nameEnglish: 'Al-Wali',
      meaning: 'The Patron',
    },
    {
      id: 78,
      nameArabic: 'الْمُتَعَالِي',
      nameEnglish: "Al-Muta'ali",
      meaning: 'The Self Exalted',
    },
    {
      id: 79,
      nameArabic: 'الْبَرُّ',
      nameEnglish: 'Al-Barr',
      meaning: 'The Most Kind and Righteous',
    },
    {
      id: 80,
      nameArabic: 'التَّوَابُ',
      nameEnglish: 'At-Tawwab',
      meaning: 'The Ever-Pardoning, Ever Relenting',
    },
    {
      id: 81,
      nameArabic: 'الْمُنْتَقِمُ',
      nameEnglish: 'Al-Muntaqim',
      meaning: 'The Avenger',
    },
    {
      id: 82,
      nameArabic: 'العَفُوُّ',
      nameEnglish: 'Al-Afuww',
      meaning: 'The Pardoner',
    },
    {
      id: 83,
      nameArabic: 'الرَّؤُوفُ',
      nameEnglish: "Ar-Ra'uf",
      meaning: 'The Kind',
    },
    {
      id: 84,
      nameArabic: 'مَالِكُ الْمُلْكِ',
      nameEnglish: 'Malik-al-Mulk',
      meaning: 'The Owner of All Sovereignty',
    },
    {
      id: 85,
      nameArabic: 'ذُوالْجَلَالِ وَالإكْرَامِ',
      nameEnglish: 'Dhu-al-Jalali wa-al-Ikram',
      meaning: 'The Lord of Majesty and Generosity',
    },
    {
      id: 86,
      nameArabic: 'الْمُقْسِطُ',
      nameEnglish: 'Al-Muqsit',
      meaning: 'The Equitable',
    },
    {
      id: 87,
      nameArabic: 'الْجَامِعُ',
      nameEnglish: 'Al-Jami',
      meaning: 'The Gatherer',
    },
    {
      id: 88,
      nameArabic: 'الْغَنِيُّ',
      nameEnglish: 'Al-Ghani',
      meaning: 'The Rich',
    },
    {
      id: 89,
      nameArabic: 'الْمُغْنِي',
      nameEnglish: 'Al-Mughni',
      meaning: 'The Enricher',
    },
    {
      id: 90,
      nameArabic: 'اَلْمَانِعُ',
      nameEnglish: 'Al-Mani',
      meaning: 'The Preventer of Harm',
    },
    {
      id: 91,
      nameArabic: 'الضَّارُّ',
      nameEnglish: 'Ad-Darr',
      meaning: 'The Creator of The Harmful',
    },
    {
      id: 92,
      nameArabic: 'النَّافِعُ',
      nameEnglish: 'An-Nafi',
      meaning: 'The Creator of Good',
    },
    {
      id: 93,
      nameArabic: 'النُّورُ',
      nameEnglish: 'An-Nur',
      meaning: 'The Light',
    },
    {
      id: 94,
      nameArabic: 'الْهَادِي',
      nameEnglish: 'Al-Hadi',
      meaning: 'The Guide',
    },
    {
      id: 95,
      nameArabic: 'الْبَدِيعُ',
      nameEnglish: 'Al-Badi',
      meaning: 'The Incomparable Originator',
    },
    {
      id: 96,
      nameArabic: 'الْبَاقِي',
      nameEnglish: 'Al-Baqi',
      meaning: 'The Ever Enduring and Immutable',
    },
    {
      id: 97,
      nameArabic: 'الْوَارِثُ',
      nameEnglish: 'Al-Warith',
      meaning: 'The Heir',
    },
    {
      id: 98,
      nameArabic: 'الرَّشِيدُ',
      nameEnglish: 'Ar-Rashid',
      meaning: 'The Guide to the Right Path',
    },
    {
      id: 99,
      nameArabic: 'الصَّبُورُ',
      nameEnglish: 'As-Sabur',
      meaning: 'The Patient',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <HeaderIcon
        title={'Allah Names'}
        navigation={() => navigation.goBack()}
      />
      <ScrollView>
        {AllahNames.map((item, index) => {
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

export default AllahNames;

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
