import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../global/styles';

const ShowText = ({navigation, MainText, ShowItem}) => {
  return (
    <View style={styles.MainView}>
      <Text style={styles.MainText}>{MainText + ' : '}</Text>
      <Text style={{marginStart: 5}}>{ShowItem}</Text>
    </View>
  );
};

export default ShowText;

const styles = StyleSheet.create({
  MainView: {marginHorizontal: 15, flexDirection: 'row', marginTop: 20},
  MainText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: COLORS.Black,
  },
});
