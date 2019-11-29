import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
  // state === 0
  //  action ==== {  type: "increase"   "decrease"      payload :  1, -1}
  switch (action.type) {
    case 'increase':
      return state + action.payload;
    case 'decrease':
      return state + -1 * action.payload;

    default:
      break;
  }
};

const CounterScreen = () => {
  //   Reducer
  const [state, dispatch] = useReducer (reducer, 0);

  //useState
  // const [count, setCount] = useState (0);

  //Do not do that
  //   let count = 0;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //  useReducer

          dispatch ({type: 'increase', payload: 1});
          //do not use
          // count++;

          //  useState
          // setCount (count + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          //   useReducer

          dispatch ({type: 'decrease', payload: 1});
          //do not use
          //count--;

          // useState
          // setCount (count - 1);
        }}
      />
      <Text>Counted Number: {state}</Text>
    </View>
  );
};

const styles = StyleSheet.create ({});

export default CounterScreen;
