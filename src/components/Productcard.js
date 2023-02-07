import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from './../global/styles';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Productcard = ({navigation, ProductData}) => {
  return (
    <View>
      <View style={styles.root}>
        <View style={styles.flexDirectionRow}>
          <View style={styles.ImageBorderStyle}>
            {ProductData?.thumbnail ? (
              <Image
                style={styles.ImageStyle}
                source={{uri: ProductData?.thumbnail}}
              />
            ) : (
              <Image
                style={styles.ImageStyle}
                source={require('./../assets/Icon_png/TestProductImage.jpg')}
              />
            )}
          </View>

          <View style={styles.ProductNameBorderStyle}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <View style={{flex: 1}}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.ProductNameStyle}>
                  {ProductData?.title && ProductData?.title.length > 22
                    ? ProductData?.title.substring(0, 22).concat('...')
                    : ProductData
                    ? ProductData?.title
                    : ''}
                </Text>
              </View>
            </View>

            <Text
              numberOfLines={3}
              ellipsizeMode="tail"
              style={styles.ProductDesStyle}>
              {ProductData?.description}
            </Text>

            <TouchableOpacity
              hitSlop={styles.TouchFunction}
              onPress={() =>
                navigation.navigate('DetailsScreen', {
                  ProductData: ProductData,
                })
              }
              style={styles.MoreBorderStyle}>
              <Text style={styles.MoreTextStyle}>More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Productcard;

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 10,
    marginTop: 15,
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    borderRadius: 15,
  },
  flexDirectionRow: {flexDirection: 'row'},
  ImageBorderStyle: {marginVertical: 10, marginHorizontal: 5},
  ImageStyle: {
    width: WIDTH * 0.3,
    height: HEIGHT * 0.18,
    borderRadius: 15,
    marginStart: 5,
  },
  ProductNameBorderStyle: {flex: 1, alignSelf: 'center'},
  ProductNameStyle: {
    marginHorizontal: 2,
    alignSelf: 'center',
    color: COLORS.Black,
    fontFamily: 'Poppins-SemiBold',
  },
  ProductDesStyle: {
    alignSelf: 'center',
    color: COLORS.Black,
    fontFamily: 'Poppins-Regular',
    marginTop: 5,
    marginHorizontal: 15,
  },
  MoreBorderStyle: {
    borderColor: COLORS.PrimaryBlue,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 25,
    marginTop: 10,
  },
  MoreTextStyle: {
    alignSelf: 'center',
    color: COLORS.PrimaryBlue,
    fontFamily: 'Poppins-SemiBold',
    marginVertical: 3,
  },
  TouchFunction: {top: 40, bottom: 20, left: 40, right: 40},
});
