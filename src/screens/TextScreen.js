import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
  const [Password, setPassword] = useState ('');
  const [Name, setName] = useState ('');
  const user = {
    pass: '333333',
  };

  return (
    <View>
      <Text>Enter Your Password</Text>
      <TextInput
        style={styles.input}
        placeholder="enter your name"
        autoCapitalize="none"
        autoCorrect={false}
        value={Name}
        onChangeText={name => {
          setName (name);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="enter your password"
        autoCapitalize="none"
        autoCorrect={false}
        value={Password}
        onChangeText={NewText => {
          setPassword (NewText);
        }}
      />
      <Text>Your name is {Name} </Text>

      {Password.length >= 6 && Password === user.pass
        ? <Text>Password accepted </Text>
        : <Text> Password must be more than 4character</Text>}
    </View>
  );
};

const styles = StyleSheet.create ({
  input: {
    borderColor: 'black',
    margin: 15,
    borderWidth: 2,
  },
});

export default TextScreen;
