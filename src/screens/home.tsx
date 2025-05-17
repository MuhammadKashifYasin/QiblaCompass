import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';

const HomeScreen = ({navigation}) => {
  const Array = [
    {
      image: require('../../src/assets/images/Allah.png'),
      name: 'Allah',
      navigation: () => navigation.navigate('Allah'),
    },
    {
      image: require('../../src/assets/images/architecture.png'),
      name: 'Muhammad',
      navigation: () => navigation.navigate('Muhammad'),
    },
    {
      image: require('../../src/assets/images/quran.png'),
      name: 'Kalma',
      navigation: () => navigation.navigate('kalma'),
    },
    {
      image: require('../../src/assets/images/crescent.png'),
      name: 'Ramadan ',
      navigation: () => navigation.navigate('ramadan'),
    },
  ];

 const Dua = [
    {
      dua: 'وَلاَ أَخْشىٰ إِلاَّ عَدْلَهُ',
      meening:
        'I fear nothing but justice.',
        day:'sunday'
    },
    {
      dua: 'وَلاَ أَعْتَمِدُ إِلاَّ قَوْلَهُ',
      meening:
        'I rely upon nothing but His word.',
        day:'sunday'
    },
    {
      dua: 'وَلاَ أُمْسِكُ إِلاَّ بِحَبْلِهِ',
      meening:
        'and I cling to nothing but His Rope.',

        day:'sunday'
    },
    {
      dua: 'وَٱجْعَلْ غَدِي وَمَا بَعْدَهُ أَفْضَلَ مِنْ سَاعَتِي وَيَوْمِي',
      meening:
        'make my morrow and what is after it better than my present hour and my day.',

        day:'sunday'
    },
    {
      dua: 'اَللَّهُمَّ إِنِّي أَبْرَأُ إِلَيْكَ فِي يَوْمِي هٰذَا',
      meening:
        'O Allah, I repudiate, before You on this day of mine.',

        day:'sunday'
    },

    {
      dua: 'اَللّٰهُمَّ اِنِّيْ اَسْاَلُكَ قُوَّةً فِيْ عِبَادَتِكَ',
      meening:
        'O God, I ask You for the strength to worship (You).',
        day:'monday'
    },
    {
      dua: 'سُبْحَانَ اﷲِ الَّذِیْ یَرْزُقُ الْقَاسِطَ الْعَادِلَ وَالْعَاقِلَ وَالْجَاہِلَ وَ یَرْحَمُ السَّاہِیَ وَالْغَافِلَ فَکَیْفَ الدَّاعِیَ السَّآئِلَ',
      meening:
        'Pure is Allah Who sustains the great and the unjust, the intelligent and the fools, when He is Merciful towards the negligent and careless, why will He not be Merciful on those who invoke and beseech Him.',
        day:'monday'
    },
    {
      dua: 'َوَ لاَ اِلٰہَ اِلاَّ اﷲُ اللَّطِیْفُ بِمَنْ شَرَدَ عَنْہُ مِنْ مُسْرِفِیْ عِبَادِہٖ لِیَرْجِعَ عَنْ عَتُوِّہٖ وَ عِنَادِنہٖ الرَّاضِیْ مِنَ الْمُنِیْبِ الْمُخْلِصِ بِدُوْنِ الْوُسْعِ وَالطَّاقَۃِ',
      meening:
        'There is no Lord except Allah and He bestows His grace and Mercy on those who run away from His obedience so that they may refrain from their tyranny and oppression and are prepared to do good deeds with sincere people. And Allah is Great. He is tolerant and knowledgeable who has such amazing and marvelous proofs in the universe which proves His Godhood, without a doubt.',

        day:'monday'
    },
    {
      dua: 'اوَ عَلٰی کُلِّ نَوْعٍ مِنْ غَوَامِضِ تَقْدِیْرِہ وَ حُسْنِ تَدْبِیْرِہٖ دَلِیْلٌ وَاضِحٌ وَ شَاہِدُ عَدْلٍ یَقْضِیَانِ لَہٗ بِالْوَحْدَانِیَّۃِ',
      meening:
        'His recognition of destinies and the excellent policies are adequate evidences and the just witnesses are sufficient proof of His Oneness.',

        day:'monday'
    },
    {
      dua: 'وَالْاَیَّامِ اِذْلَمْ یَجِدْ مُجِیْرًا سِوَاکَ لِغُفْرَانِہَا وَلاَ مَوْئِلاً یَفْزَعُ اِلَیْہِ لِاِرْتِجَآءِ کَشْفِ فَاقَتِہٖ اِلاَّاِیَّاکَ',
      meening:
        "I don't find anyone other than You who can grant me refuge in it.And there is none other than You, with whom I can get my helplessness dispelled and can put forth my grievances.",

        day:'monday'
    },

    {
      dua: 'اَلْحَمْدُ لِلّٰہِ الَّذِیْ مَنَّ عَلَیَّ بِاِسْتِحْکَامِ الْمَعْرِفَۃِ وَالْاِخْلاَصِ بِالتَّوْحِیْدِ',
      meening:
        'Praise is for Allah Who granted His recognition and made me firm in sincerity by the belief in His Oneness.',
        day:'tuesday'
    },
    {
      dua: 'لَہٗ وَلَمْ یَجْعَلْنِیْ مِنْ اَہْلِ الْغَوَایَۃِ وَالْغَبَاوَۃِ وَ الشِّرْکِ وَلاَ مَنِ اسْتَحْوَذَ الشَّیْطَانُ عَلَیْہِ فَاَغْوَاہُ فَاَضَلَّہٗ وَاتَّخَذَ اِلٰہَہُ ہَوٰہُ',
      meening:'Do not include me among the strayed ones, nor ignorant ones, nor the polytheists, nor among those whom the Satan has overpowered and deviated and has made him far away from his destination, and the one who made his desires, his lord.',
        day:'tuesday'
    },
    {
      dua: 'وَ سُبْحَانَ اﷲِ الَّذِیْ یُجِیْبُ الْمُضْطَرَّ وَ یَکْشِفُ الضُرَّ وَ یَعْلَمُ السِّرَّّ وَ یَمْلِکُ الْخَیْرَ وَالشَّرَّ وَلَآ اِلٰہَ اِلاَّاﷲُ',
      meening:
        'And pure is Allah who hears the cries of the restless and whom the harm has afflicted and He knows the secrets, the lord of the good and evil and there is no Lord except Allah',
        day:'tuesday'
    },
    {
      dua: 'وَ اَنْتَ اَعَزَّ وَ اَجَلُّ اَنْ تُحِیْطَ الْعُقُولُ بِمَبْلَغِ وَصْفِکَ',
      meening:
        'And You are far Great and Majestic that by looking at Your signs, the intellect can comprehend You.',

        day:'tuesday'
    },
    {
      dua: 'وَلَمْ تَہْتِکُ عَنِّیْ سِتْرَکَ یَاحَنَّانُ وَلَمْ تَفْضَحْنِیْ یَا مَنَّانُ',
      meening:
        ' O the merciful do not remove the cover from me (my sins) and O the bestower of favours, do not degrade me.',
        day:'tuesday'
    },

    {
      dua: 'فَیَامَنْ ذَلَّتْ لِعَظَمَتِہٖ الْعُظَمَآءُ وَخَضَعَتْ لِعِزَّتِہِ الرُّءَ وسَآءُ',
      meening:
        'O the one! O the one in comparsion of Whose greatness the greatest personalities are nothing.And beforeWhose might the mighty people are helpless.',
        day:'wednesday'
    },
    {
      dua: 'یَا سَیِّدِیْ اَتُعَذِّبُنِیْ بِالنَّارِ وَ اَنْتَ اَمَلِیْ اَوْ تُسَلِّطُہَا عَلَیَّ بَعْدَ اِقْرَارِیْ لَکَ بِالتَّوْحِیْدِ',
      meening:"My Lord! Will you inmate me in the fire? Though You are my wish or you'll subdue the fire of hell on me! as I confess your oneness",
        day:'wednesday'
    },
    {
      dua: 'وَ خُضُوْعِیْ وَ خُشُوْعِیْ لَکَ بِالسُّجُوْدِ اَوْ تُلَجْلِجُ لِسَانِیْ فِیْ الْمَوْقَفِ',
      meening:
        'and I assert of my lowliness and bow down my head before You. Or my tongue falter in speech by giving the account.',
        day:'wednesday'
    },
    {
      dua: 'وَ قَدْ مَہَّدْتَ لِیْ بِمَنِّکَ سُبُلَ الْوُصُوْلِ اِلٰی التَّسْبِیْحِ وَالتَّحْمِیْدِ وَالتَّمْجِیْدِ',
      meening:
        'Through your grace, you have paved for me the means to attain glorification, praise and glorification.',

        day:'wednesday'
    },
    {
      dua: 'وَجَارَ الْمُسْتَجِیْرِیْنَ وَ کَاشِفَ ضُرِّ الْمَکْرُوْبِیْنَ وَ رَبَّ الْعَالَمِیْنَ وَ اَرْحَمَ الرَّاحِمِیْنَ',
      meening:
        'O comforter to remove the sorry of afflicted persons. O cherisher, of learned people and O greatest of all kind of people, O merciful',
        day:'wednesday'
    },

    {
      dua: 'اَلْحَمْدُ لِلّٰہِ الَّذِیْ لَہٗ مِنْ کُلِّ نَفْسٍ مِنَ الْاَنْفَاسِ وَ خَطَرَۃٍ مِنَ الْخَطَرَاتِ مِنَّا مِنَنٌ لاَ تُحْصٰی',
      meening:
        "Praise is for Allah, His obligations are on our ingress and egress of breathing and all thoughts of mind are so much, that we can't count.",
        day:'thursday'
    },
    {
      dua: 'اَسْئَلُکَ اَنْ تُصَلِّیَ عَلٰی مُحَمَّدٍ وَ اٰلِ مُحَمَّدٍ وَ اَنْ تُجْزِلَ ثَوَابِیْ وَ تُحْسِنَ مَاٰبِیْ وَ تَسْتُرَ عُیُوْبِیْ',
      meening:'I request You to send blessing on Mohammad Mustafa and his Progeny (s.a.w.a.) and increase my virtues and make my last stage of my journey good, conceal my sins.',
        day:'thursday'
    },
    {
      dua: 'وَ ذٰلِکَ عَلَیْکَ یَسِیْرٌ یَا اَرْحَمَ الرَّاحِمِیْنَ۔ وَ صَلَّی اﷲُ عَلٰی مُحَمَّدٍ النَّبِیِّ وَ اٰلِہٖ وَ سَلَّمَ تَسْلِیْمًا۔',
      meening:
        'My request is very easy for you. O Allah! Grant Complete Safety with your blessings on Muhammed Mustafa (saws) and his innocent and most pure Progeny.',
        day:'thursday'
    },
    {
      dua: 'وَ اَعِنَّا عَلٰى شُكْرِكَ وَ ذِكْرِكَ وَ طَاعَتِكَ وَ عِبَادَتِكَ',
      meening:
        'and help us in your thankfulness and remembrance and obedience and worship',

        day:'thursday'
    },
    {
      dua: 'اَلْحَمْدُ لِلَّهِ ٱلَّذِي أَذْهَبَ ٱللَّيْلَ مُظْلِماً بِقُدْرَتِهِ',
      meening:
        'All praise be to Allah Who has taken away the shadowy night by His power',
        day:'thursday'
    },

    {
      dua: 'اَلسَّلامُ عَلَيْكِ أَيَّتُهَا الشَّمْسُ الطَّالِعَةُ وَالنُّورُ الْفَاضِلُ الْبَهِيُّ',
      meening:
        'Peace be upon you, O shining sun, the radiant and resplendent light.',
        day:'friday'
    },
    {
      dua: 'اَللّهُمَّ إِنِّي أَعُوذُ بِكَ وَبِنُورِ وَجْهِكَ الْكَرِيمِ أَنْ تُشَوِّهَ خَلْقِي',
      meening:'O Allah, I seek refuge in You and in the light of Your noble face from any distortion of my form.',
        day:'friday'
    },
    {
      dua: 'فَإِنِّي أَنَا عَبْدُكَ وَفِي قَبْضَتِكَ وَلَا رَبَّ لِي سِوَاكَ',
      meening:
        'For indeed, I am Your servant, within Your grasp, and I have no Lord besides You.',
        day:'friday'
    },
    {
      dua: 'وَأُصَغِّرُ خَدِّي لِأَوْلِيَائِكَ الْمُقَرَّبِينَ وَأَفْضِي عَنْكَ كُلَّ ضِدٍّ وَنِدٍّ',
      meening:
        'I humble my cheek before Your close allies and renounce every opposition or equal to You.',

        day:'friday'
    },
    {
      dua: 'اَللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَآلِ مُحَمَّدٍ وَعَجِّلْ فَرَجَهُمْ',
      meening:
        'O Allah, send blessings to Muhammad and the Household of Muhammad and hasten their Relief.',
        day:'friday'
    },

    {
      dua: 'التَّوَّابُ عَلٰی مَنْ تَابَ اِلَیْہِ مِنْ عَظِیْمِ ذَنْبِہٖ',
      meening:
        'Who accepts the repentance of the one who does sins excessively.',
        day:'saturday'
    },
    {
      dua: 'السَّاخِطُ عَلٰی مَنْ قَنَطَ مِنْ وَاسِعِ رَحْمَتِہٖ وَ یَئِسَ مِنْ عَاجِلِ رَوْحِہٖ',
      meening:'And He is displeased on the one who has lost hopes of His Vast Blessings and Mercy,',
        day:'saturday'
    },
    {
      dua: 'اَللّٰہُمَّ وَ اَتَضَرَّعُ اَلِیْکَ ضَرَاعَۃً مُقِرٍّ عَلٰی نَفْسِہٖ بِالْہَفَوَاتِ',
      meening:
        'O Allah I present my helplessness as the one who is helpless and has accepted his deviation.',
        day:'saturday'
    },
    {
      dua: 'یَا مَنْ ہُوَ مَوْجُوْدٌ مَوْصُوْفٌ مَعْرُوْفٌ بِالْجُوْدِ وَالْخَلْقُ لَہٗ عَبِیْدٌ وَاِلَیْہِ مَرَدُّ  الْاُمُوْرِ',
      meening:
        'O He Who is present and famous for Generosity, the affairs of entire creation will ultimately return in Your presence.',

        day:'saturday'
    },
    {
      dua: 'وَ هَبْ لَنَا اللّٰهُمَّ رَحْمَةً لَا تُعَذِّبُنَا بَعْدَهَا فِيْ الدُّنْيَا وَ الْاٰخِرَةِ',
      meening:
        'and bestow upon us that mercy, after which there is no chastisement whether in the world or the hereafter',
        day:'saturday'
    },
  ];


const getNextPrayerTime = useSelector((state) => state?.user?.nextPrayer);

console.log('getNextPrayerTime',getNextPrayerTime);


    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

  const todaysDuas = Dua.filter(dua => dua.day === currentDay);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../src/assets/images/AllahHome.png')}
        style={{width: wp(100), height: hp(35)}}>
        <View style={styles.container}>
          <Text style={styles.text}>Find your Qibla Direction</Text>
          <Text style={styles.text}>Next Prayer</Text>
          <Text style={styles.text}>{getNextPrayerTime ? `${getNextPrayerTime?.time}` : null}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.textExplore}>Explore Catagories</Text>
      <View style={styles.circlesView}>
        {Array.map((item, index) => {
          return (
            <View key={index} style={styles.circleTextView}>
              <TouchableOpacity onPress={item.navigation} style={styles.circle}>
                <Image style={styles.image} source={item.image} />
              </TouchableOpacity>
              <Text style={styles.textAllah}>{item.name}</Text>
            </View>
          );
        })}
      </View>
      <Text style={styles.textdua}>Today's Dua</Text>
      <ScrollView>
       {todaysDuas.length > 0 && (
        todaysDuas.map((item, index) => (
          <View key={index} style={styles.duaView}>
            <Text style={styles.arabic}>{item.dua}</Text>
            <Text style={styles.meening}>{item.meening}</Text>
          </View>
        ))
      )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  textExplore: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#046920',
    margin: 10,
    marginHorizontal: 20,
  },
  circlesView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#046920',
  },
  image: {
    width: 30,
    height: 30,
  },
  textAllah: {
    fontSize: 10,
    color: '#000',
    marginTop: 5,
  },
  circleTextView: {
    width: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textdua: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
    margin: 10,
    marginHorizontal: 20,
  },
  arabic: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
    margin: 10,
    marginHorizontal: 20,
  },
  duaView: {
    width: wp(90),
    // alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#046920',
    alignSelf: 'center',
  },
  meening: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
    margin: 10,
    marginHorizontal: 20,
  },
});
