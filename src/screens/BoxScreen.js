import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View>
      <View style={styles.viewStyle}>
        <View style={styles.view1} />
        <View style={styles.view2} />
      </View>
      <View style={styles.viewStyle2}>
        <View style={styles.view3} />

      </View>
    </View>
  );
};

const styles = StyleSheet.create ({
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: 'black',
  },
  viewStyle2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },

  textStyle: {
    borderWidth: 2,
    borderColor: 'blue',
  },
  view1: {
    height: 130,
    width: 130,
    backgroundColor: 'red',
  },
  view2: {
    height: 130,
    width: 130,
    backgroundColor: 'grey',
  },
  view3: {
    height: 130,
    width: 130,
    backgroundColor: 'blue',
    // position: 'absolute',
  },
});
export default BoxScreen;
