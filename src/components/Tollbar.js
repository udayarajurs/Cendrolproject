import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {COLORS} from '../global/styles';

const Tollbar = () => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.IconStyle}>
        <Image
          source={require('../assets/Icon_png/logo.jpg')}
          style={styles.LogoStyle}
        />
        <Text style={styles.AppNameStyle}>Cendrol</Text>
      </View>
    </SafeAreaView>
  );
};
export default Tollbar;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 1,
    backgroundColor: COLORS.wight,
  },
  LogoStyle: {
    height: 25,
    width: 25,
  },
  IconStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    flexDirection: 'row',
  },
  AppNameStyle: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: COLORS.Black,
    marginLeft: 15,
  },
});
