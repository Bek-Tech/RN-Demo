import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi there!</Text>
      <Text>It is simple app with React Native</Text>
      <Button
        style={styles.buttons}
        onPress={() => navigation.navigate ('Components')}
        title="Components Demo"
      />
      <Button
        style={styles.buttons}
        title="List Demo"
        onPress={() => navigation.navigate ('List')}
      />
      <Button
        style={styles.buttons}
        title="Image Demo"
        onPress={() => navigation.navigate ('Image')}
      />
      <Button
        style={styles.buttons}
        title="Counter Demo"
        onPress={() => navigation.navigate ('Counter')}
      />
      <Button
        style={styles.buttons}
        title="Color Demo"
        onPress={() => navigation.navigate ('Color')}
      />
      <Button
        style={styles.buttons}
        title="Color Corrector Demo"
        onPress={() => navigation.navigate ('ColorCorrector')}
      />
      <Button
        style={styles.buttons}
        title="Sign in Demo"
        onPress={() => navigation.navigate ('Text')}
      />

    </View>
  );
};

const styles = StyleSheet.create ({
  text: {
    fontSize: 30,
  },
  buttons: {},
  container: {
    padding: 10,
    margin: 10,
  },
});

export default HomeScreen;
