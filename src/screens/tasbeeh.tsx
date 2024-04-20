import react, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  FlatList,
} from 'react-native';
import {Header} from '../components/header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useRoute} from '@react-navigation/native';
import SoundPlayer from 'react-native-sound-player';

const TasbeehScreen = ({navigation}) => {
  const [count, setCount] = useState(0);
  const [ziker, setZiker] = useState(
    'لآ اِلَهَ اِلّا اللّهُ مُحَمَّدٌ رَسُوُل اللّهِ',
  );
  const [amount, setAmount] = useState('5000');
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

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
      // press: () => setSoundModalVisible(true),
    },
    {
      icon: require('../assets/images/repeat.png'),
      press: () => setCount(0),
    },
  ];

  const route = useRoute(); // Initialize route

  useEffect(() => {
    if (route.params) {
      const {ziker: selectedZiker, amount: selectedAmount} = route.params;
      setZiker(selectedZiker); // Set selected ziker
      setAmount(selectedAmount); // Set selected amount
    }
  }, [route.params]);
  return (
    <View style={{flex: 1}}>
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
            onPress={() => {
              setCount(count + 1);
            }}
            style={styles.plusView}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconsView}>
          {Icons.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={item.press}
                style={[styles.iconView, item.style]}
                key={index}>
                <Image
                  style={styles.icon}
                  source={item.icon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default TasbeehScreen;

const styles = StyleSheet.create({
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
    // padding: 10,
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
  modalView: {
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
  soundItem: {
    width: wp(80),
    backgroundColor: '#BBECC9',
    alignSelf: 'center',
    padding: 10,
    marginVertical: hp(0.5),
    borderRadius: 10,
  },
  soundItemText: {
    fontSize: 15,
    color: '#000',
  },
  closeButton: {
    width: wp(80),
    backgroundColor: '#046920',
    alignSelf: 'center',
    padding: 10,
    marginVertical: hp(1),
    borderRadius: 10,
  },
  closeButtonText: {
    fontSize: 15,
    color: '#fff',
  },
  iconMuted: {
    backgroundColor: '#046920', // Green background for muted icon
  },
  iconUnmuted: {
    backgroundColor: '#FFF', // White background for unmuted icon
  },
});
