import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import getProductDataRequest from '../redux/actions/getProductDataRequest';

const HomeScreen = ({navigation, dispatch, productDataReducers}) => {
  const [skip, setSkip] = useState(0);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    productDataReducers: state.ProductDataReducers,
  };
};

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({});
