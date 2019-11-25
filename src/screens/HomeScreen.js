import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi there!</Text>
      <Text>It is simple app with React Native</Text>
      <Button
        onPress={() => navigation.navigate ('Components')}
        title="Components Demo"
      />
      <Button title="List Demo" onPress={() => navigation.navigate ('List')} />
      <Button
        title="Image Demo"
        onPress={() => navigation.navigate ('Image')}
      />

    </View>
  );
};

const styles = StyleSheet.create ({
  text: {
    fontSize: 30,
  },
  container: {
    margin: 5,
    flexDirection: 'column',
  },
});

export default HomeScreen;
