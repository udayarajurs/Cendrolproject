import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS} from '../global/styles';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ProductDetailsTollbar = ({navigation, ProductData}) => {
  return (
    <View style={styles.header}>
      <View style={styles.TollBarStyle}>
        <TouchableOpacity
          hitSlop={styles.BackButtonFunction}
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.BackArrowStyle}>
          <Image
            style={styles.ImageStyle}
            source={require('./../assets/Icon_png/back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.AppNameStyle}>
          {ProductData?.title && ProductData?.title.length > 30
            ? ProductData?.title.substring(0, 30).concat('...')
            : ProductData
            ? ProductData?.title
            : ''}
        </Text>
      </View>
    </View>
  );
};

export default ProductDetailsTollbar;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: HEIGHT * 0.08,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 1,
    backgroundColor: COLORS.wight,
    justifyContent: 'space-between',
  },
  TollBarStyle: {flexDirection: 'row'},
  BackButtonFunction: {top: 15, bottom: 15, left: 100, right: 100},
  ImageStyle: {
    width: WIDTH * 0.035,
    height: HEIGHT * 0.035,
  },
  BackArrowStyle: {alignSelf: 'center', marginStart: 15},
  AppNameStyle: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.Black,
    marginLeft: 15,
    alignSelf: 'center',
  },
});
