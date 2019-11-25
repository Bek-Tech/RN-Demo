import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
  //use this
  const [count, setCount] = useState (0);
  //Do not do that
  //   let count = 0;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //do not use
          // count++;

          //  use this
          setCount (count + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          //do not use
          //count--;

          // use this
          setCount (count - 1);
        }}
      />
      <Text>Counted Number: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create ({});

export default CounterScreen;
