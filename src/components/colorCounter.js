import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
  return (
    <View>
      <Text style={{color: 'rgb(255, 255, 255)'}}>{color}</Text>
      <Button onPress={() => onIncrease ()} title={`"Increase ${color} `} />
      <Button onPress={() => onDecrease ()} title={`"Decrease ${color} `} />
    </View>
  );
};

const styles = StyleSheet.create ({});

export default ColorCounter;
