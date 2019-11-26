import React, {useState} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const ColorScreen = () => {
  const randomRGB = () => {
    const red = Math.floor (Math.random () * 256);
    const green = Math.floor (Math.random () * 256);
    const blue = Math.floor (Math.random () * 256);

    return `rgb(${red}, ${green},${blue})`;
  };
  const [Color, setColor] = useState ([]);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColor ([...Color, randomRGB ()]);
        }}
      />

      <FlatList
        data={Color}
        style={{}}
        keyExtractor={item => item}
        renderItem={({item}) => {
          return (
            <View
              style={{
                height: 100,
                width: 410,
                backgroundColor: item,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text>{item}</Text>
            </View>
          );
        }}
      />

    </View>
  );
};

const styles = StyleSheet.create ({});
export default ColorScreen;
