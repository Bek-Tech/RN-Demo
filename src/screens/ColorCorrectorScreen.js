import React, {useReducer} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import ColorCounter from '../components/colorCounter';

const amountToChange = 15;

const reducer = (state, action) => {
  //  state === {red: 0,green: 0,blue:0}
  //   action === {ColorToChange: red || green || blue || , amount :  15  || -15

  switch (action.ColorToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : {...state, red: state.red + action.amount};
    case 'green':
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : {...state, green: state.green + action.amount};
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : {...state, blue: state.blue + action.amount};
    default:
      return;
  }
};

const ColorCorrectorScreen = () => {
  //   (by using useState)

  //   const [red, setred] = useState (0);
  //   const [green, setgreen] = useState (0);
  //   const [blue, setblue] = useState (0);

  //   const setColor = (color, change) => {
  //     switch (color) {
  //       case 'red':
  //         red + change > 255 || red + change < 0 ? null : setred (red + change);
  //         return;
  //       case 'green':
  //         green + change > 255 || green + change < 0
  //           ? null
  //           : setgreen (green + change);
  //         return;
  //       case 'blue':
  //         blue + change > 255 || blue + change < 0
  //           ? null
  //           : setblue (blue + change);
  //       default:
  //         return;
  //     }
  //   };

  const [state, dispatch] = useReducer (reducer, {red: 0, green: 0, blue: 0});
  const {red, green, blue} = state;
  return (
    <View
      style={{
        padding: 20,
        margin: 20,
        backgroundColor: `rgb(${red},${green},${blue})`,
      }}
    >
      <ColorCounter
        onDecrease={() =>
          dispatch ({ColorToChange: 'red', amount: -1 * amountToChange})}
        onIncrease={() =>
          dispatch ({ColorToChange: 'red', amount: amountToChange})}
        // onDecrease={() => setColor ('red', -1 * amount)}
        // onIncrease={() => setColor ('red', amount)}
        color="Red"
      />
      <ColorCounter
        onDecrease={() =>
          dispatch ({ColorToChange: 'green', amount: -1 * amountToChange})}
        onIncrease={() =>
          dispatch ({ColorToChange: 'green', amount: amountToChange})}
        // onIncrease={() => setColor ('green', amount)}
        // onDecrease={() => setColor ('green', -1 * amount)}
        color="Green"
      />
      <ColorCounter
        onDecrease={() =>
          dispatch ({ColorToChange: 'blue', amount: -1 * amountToChange})}
        onIncrease={() =>
          dispatch ({ColorToChange: 'blue', amount: amountToChange})}
        // onIncrease={() => setColor ('blue', amount)}
        // onDecrease={() => setColor ('blue', -1 * amount)}
        color="Blue"
      />
      <View
        style={{
          backgroundColor: `rgb(${red},${green},${blue})`,
          width: 250,
          height: 250,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{color: 'rgb(255, 255, 255)'}}
        >{`rgb(${red},${green},${blue})`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create ({});

export default ColorCorrectorScreen;
