import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {COLORS} from '../global/styles';
import ProductDetailsTollbar from '../components/ProductDetailsTollbar';
import ShowText from '../components/ShowText';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const DetailsScreen = ({navigation, route}) => {
  const {ProductData} = route.params;
  return (
    <View style={styles.root}>
      <ProductDetailsTollbar
        navigation={navigation}
        ProductData={ProductData}
      />

      {/* Add data into  ScrollView*/}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.ImageStyle}
          source={{uri: ProductData?.images[0]}}
        />

        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.ItemNameTextStyle}>{ProductData?.title}</Text>
            <Text style={styles.ItemDesTextStyle}>
              {ProductData?.description}
            </Text>
          </View>
          <Text
            style={{
              marginEnd: 15,
              top: 15,
            }}>{`⭐ ${ProductData?.rating}`}</Text>
        </View>

        <View style={styles.horizontalline} />

        {/* Call Show Text Components pass the data*/}
        <ShowText
          navigation={navigation}
          MainText={'Category'}
          ShowItem={ProductData?.category}
        />
        <ShowText
          navigation={navigation}
          MainText={'Brand'}
          ShowItem={ProductData?.brand}
        />
        <ShowText
          navigation={navigation}
          MainText={'Stock'}
          ShowItem={ProductData?.stock}
        />
        <ShowText
          navigation={navigation}
          MainText={'Price'}
          ShowItem={ProductData?.price + ' Rs'}
        />
        <ShowText
          navigation={navigation}
          MainText={'discountPercentage'}
          ShowItem={ProductData?.discountPercentage + ' Rs'}
        />
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  root: {backgroundColor: COLORS.wight, flex: 1},
  AppNameStyle: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.Black,
    top: 2,
    marginLeft: 15,
    alignSelf: 'center',
  },
  ImageStyle: {width: WIDTH, height: HEIGHT * 0.25},
  ItemNameTextStyle: {
    marginHorizontal: 15,
    marginTop: 15,
    color: COLORS.Black,
    fontWeight: 'bold',
    fontSize: 20,
  },
  ItemDesTextStyle: {
    marginHorizontal: 15,
    color: COLORS.Black,
    marginTop: 5,
  },
  horizontalline: {
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 0.5,
    width: WIDTH * 0.95,
    alignSelf: 'center',
    height: 1,
    marginTop: 10,
  },
});
