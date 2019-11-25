import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const ImageDetail = ({imageSource, title, score}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
  image: {
    height: 200,
    width: 200,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
});

export default ImageDetail;
