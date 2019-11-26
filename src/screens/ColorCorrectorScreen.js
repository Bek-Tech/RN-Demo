import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import ColorCounter from '../components/colorCounter';

const ColorCorrectorScreen = () => {
  const [red, setred] = useState (0);
  const [green, setgreen] = useState (0);
  const [blue, setblue] = useState (0);
  const amount = 15;

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setred (red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setgreen (green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setblue (blue + change);
      default:
        return;
    }
  };

  return (
    <View
      style={{
        padding: 20,
        margin: 20,
        backgroundColor: `rgb(${red},${green},${blue})`,
      }}
    >
      <ColorCounter
        onDecrease={() => setColor ('red', -1 * amount)}
        onIncrease={() => setColor ('red', amount)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor ('green', amount)}
        onDecrease={() => setColor ('green', -1 * amount)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor ('blue', amount)}
        onDecrease={() => setColor ('blue', -1 * amount)}
        color="Blue"
      />
      <Text
        style={{color: 'rgb(255, 255, 255)'}}
      >{`rgb(${red},${green},${blue})`}</Text>

    </View>
  );
};

const styles = StyleSheet.create ({});

export default ColorCorrectorScreen;
