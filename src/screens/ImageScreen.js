import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';
import {ScrollView} from 'react-native-gesture-handler';

const ImageScreen = () => {
  return (
    <View>
      <ScrollView>
        <ImageDetail
          title="Forest"
          imageSource={require ('../../assets/background.jpg')}
          score={9}
        />
        <ImageDetail
          title="Beach"
          imageSource={require ('../../assets/beach.jpg')}
          score={7}
        />
        <ImageDetail
          title="Mountain"
          imageSource={require ('../../assets/mountain.jpg')}
          score={10}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create ({});

export default ImageScreen;
