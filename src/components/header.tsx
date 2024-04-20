import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerWidth1}>
        {/* <TouchableOpacity onPress={navigation}>
          <AntDesign
            style={styles.icon}
            name="arrowleft"
            size={24}
            color="white"
          />
        </TouchableOpacity> */}
      </View>
      <View style={styles.headerWidth2}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.headerWidth3}></View>
    </View>
  );
};

export const HeaderIcon = ({title, navigation}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerWidth1}>
        <TouchableOpacity onPress={navigation}>
          <AntDesign
            style={styles.icon}
            name="arrowleft"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerWidth2}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.headerWidth3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: wp(100),
    backgroundColor: '#046920',
    flexDirection: 'row',
    // justifyContent: "center",
    // alignItems: "center",
  },
  headerWidth1: {
    width: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerWidth2: {
    width: wp(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerWidth3: {
    width: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
  },
  icon: {
    padding: 10,
  },
});
