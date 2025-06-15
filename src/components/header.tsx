import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface HeaderProps {
  title: string;
}

interface HeaderIconProps extends HeaderProps {
  navigation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title }) => (
  <View style={styles.header}>
    <View style={styles.headerSection}></View>
    <View style={styles.headerSectionCenter}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
    <View style={styles.headerSection}></View>
  </View>
);

const AntDesignIcon = AntDesign as unknown as React.FC<{ name: string; size: number; color: string }>;

export const HeaderIcon: React.FC<HeaderIconProps> = ({ title, navigation }) => (
  <View style={styles.header}>
    <View style={styles.headerSection}>
      <TouchableOpacity onPress={navigation}>
        <AntDesignIcon name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
    </View>
    <View style={styles.headerSectionCenter}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
    <View style={styles.headerSection}></View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: wp(100),
    backgroundColor: '#046920',
    flexDirection: 'row',
  },
  headerSection: {
    width: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerSectionCenter: {
    width: wp(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    padding:10
  },
});
