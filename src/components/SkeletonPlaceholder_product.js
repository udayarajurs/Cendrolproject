import {StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SkeletonPlaceholder_product = () => {
  return (
    <View>
      <SkeletonPlaceholder>
        <View style={styles.View1}>
          <View style={styles.View2} />
          <View style={styles.View3}>
            <View style={styles.View4}>
              <View style={styles.View5} />
              <View style={styles.View5} />
              <View style={styles.View5} />
            </View>
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};

export default SkeletonPlaceholder_product;

const styles = StyleSheet.create({
  View1: {
    alignSelf: 'center',
    width: WIDTH * 0.95,
    height: HEIGHT * 0.2,
    borderRadius: 15,
    flexDirection: 'row',
    marginVertical: 10,
  },
  View2: {
    width: WIDTH * 0.3,
    height: HEIGHT * 0.15,
    borderRadius: 15,
    alignSelf: 'center',
    marginStart: 15,
  },
  View3: {width: WIDTH, flex: 1},
  View4: {
    marginEnd: 15,
    marginTop: 20,
  },
  View5: {height: 15, width: 220, marginStart: 15, marginTop: 15},
});
