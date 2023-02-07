import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getProductDataRequest} from '../redux/actions/getProductDataRequest';
import SkeletonPlaceholder_product from '../components/SkeletonPlaceholder_product';
import Productcard from '../components/Productcard';
import Tollbar from '../components/Tollbar';
import {COLORS} from '../global/styles';

const HomeScreen = ({navigation, dispatch, productData}) => {
  const [skip, setSkip] = useState(0);

  const requestAPI = () => {
    dispatch(
      getProductDataRequest({
        skip: skip,
      }),
    );
  };

  const renderFooter = () => (
    <View style={styles.footerText}>
      {/* @productData loading show the Skeleton */}
      {productData.moreLoading || productData.loading ? (
        <View style={styles.ShowSkeleton}>
          <SkeletonPlaceholder_product />
          <SkeletonPlaceholder_product />
          <SkeletonPlaceholder_product />
          <SkeletonPlaceholder_product />
        </View>
      ) : (
        <View />
      )}

      {/* @productData in no more post show the articles */}
      {productData.data.length > 0 && productData.isListEnd ? (
        <Text style={styles.ShowNoMoreItemText}>
          No more product at the moment
        </Text>
      ) : (
        <View />
      )}
    </View>
  );

  // @Fetch more data when user swipup the page
  const fetchMoreData = () => {
    if (!productData.isListEnd && !productData.moreLoading) {
      setSkip(skip + 10);
    }
  };

  useEffect(() => {
    // Call this hook when update skip
    requestAPI();
  }, [skip]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Tollbar navigation={navigation} />
      </View>
      {/* Add data to FlatList */}
      <View style={{paddingBottom: 65}}>
        {productData?.data?.length > 0 ? (
          <FlatList
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}
            data={productData?.data.sort((a, b) => {
              return (
                new Date(b.product_create_data) -
                new Date(a.product_create_data)
              );
            })}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              // Pass data
              <Productcard navigation={navigation} ProductData={item} />
            )}
            ListFooterComponent={renderFooter}
            onEndReachedThreshold={0.2}
            onEndReached={fetchMoreData}
          />
        ) : (
          <View>
            {productData.loading ? (
              <View style={styles.ShowSkeleton}>
                {/* show Skeleton if data loding  */}
                <SkeletonPlaceholder_product />
                <SkeletonPlaceholder_product />
                <SkeletonPlaceholder_product />
                <SkeletonPlaceholder_product />
              </View>
            ) : (
              <View />
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    productData: state.ProductDataReducers,
  };
};

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.wight,
  },
  ShowSkeleton: {marginBottom: 15, marginHorizontal: 20},
  ShowNoMoreItemText: {marginVertical: 25, alignSelf: 'center'},
});
