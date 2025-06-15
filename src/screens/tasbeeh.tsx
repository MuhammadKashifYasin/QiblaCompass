import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Header } from '../components/header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Tts from 'react-native-tts';
import SoundPlayer from 'react-native-sound-player';
import { useSelector } from 'react-redux';

const TasbeehScreen: React.FC<TasbeehScreenProps> = ({ navigation }) => {
  const getSelectedZiker = useSelector((state:any)=> state?.user?.selectedZiker)
  const [count, setCount] = useState<number>(0);
  const [ziker, setZiker] = useState<string>(
    'لآ اِلَهَ اِلّا اللّهُ مُحَمَّدٌ رَسُوُل اللّهِ'
  );
  const [amount, setAmount] = useState<string>('5000');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  

  useEffect(() => {
    if (getSelectedZiker) {
      setZiker(getSelectedZiker.ziker || ziker);
      setAmount(getSelectedZiker.amount || amount);
    }
  }, [getSelectedZiker]);

  const toggleMute = () => setIsMuted((prev) => !prev);

  useEffect(() => {
    Tts.setDefaultLanguage('ar-SA')
      .then(() => console.log('Language set to Arabic'))
      .catch((error) => console.error('Error setting language:', error));
  }, []);

  const HandleTextSpeech = () => {
    if (!isMuted) {
      Tts.stop();
      Tts.speak(ziker);
      // , {
      //   androidParams: {
      //     KEY_PARAM_PAN: -1,
      //     KEY_PARAM_VOLUME: 0.5,
      //     KEY_PARAM_STREAM: 'STREAM_MUSIC',
      //   },
      // }
    }
  }

  const Icons = [
    {
      icon: isMuted
        ? require('../assets/images/mute2.png')
        : require('../assets/images/mute.png'),
      press: toggleMute,
      style: isMuted ? styles.iconMuted : styles.iconUnmuted,
    },
    {
      icon: require('../assets/images/voice.png'),
      press: () => HandleTextSpeech()
    },
    {
      icon: require('../assets/images/repeat.png'),
      press: () => setCount(0),
    },
  ];

  const HandlePress = () => {
    try {
     if(!isMuted){
      SoundPlayer.playAsset(require("../assets/sounds/beep1.mp3"));
     }
      setCount(count + 1)
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }


  }

  return (
    <View style={styles.screen}>
      <Header title="Tasbeeh" />
      <ScrollView>
        <View style={styles.arabicView}>
          <Text style={styles.arabicText}>{ziker}</Text>
        </View>
        <View style={styles.targetTasbeehView}>
          <Text style={styles.targetText}>Target</Text>
          <Text style={styles.targetText}>{amount}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ziker')}
          style={styles.selectView}>
          <Text style={styles.textSelect}>Select Ziker</Text>
        </TouchableOpacity>
        <View style={styles.tasbeehViewMain}>
          <View style={styles.tasbeehView}>
            <Text style={styles.tasbeehText}>{count}</Text>
          </View>
          <TouchableOpacity
            onPress={HandlePress}
            style={styles.plusView}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconsView}>
          {Icons.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={item.press}
              style={[styles.iconView, item.style]}>
              <Image
                style={styles.icon}
                source={item.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default TasbeehScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  arabicView: {
    width: wp(100),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(3),
  },
  arabicText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    padding: 10,
  },
  targetTasbeehView: {
    width: wp(80),
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  targetText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    padding: 10,
  },
  tasbeehView: {
    width: 250,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 15,
    borderColor: '#046920',
    borderRadius: 125,
    backgroundColor: '#BBECC9',
  },
  tasbeehText: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  tasbeehViewMain: {
    width: wp(100),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(3),
  },
  plusView: {
    width: wp(14),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#046920',
    borderRadius: 12,
    position: 'absolute',
    bottom: 0,
    right: wp(5),
  },
  plus: {
    fontSize: 35,
    color: '#fff',
    padding: 5,
  },
  iconsView: {
    width: wp(70),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: hp(5),
    alignSelf: 'center',
  },
  iconView: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#046920',
  },
  icon: {
    width: 30,
    height: 30,
  },
  selectView: {
    width: wp(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(3),
    backgroundColor: '#BBECC9',
    borderRadius: 25,
    alignSelf: 'flex-end',
    marginHorizontal: wp(5),
  },
  textSelect: {
    fontSize: 14,
    color: '#000',
    padding: 10,
  },
  iconMuted: {
    backgroundColor: '#046920',
  },
  iconUnmuted: {
    backgroundColor: '#FFF',
  },
});
