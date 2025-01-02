import React from 'react';
import {StyleSheet, Button, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';

const ButtonComponent = () => {
  const dispatch = useDispatch();
  return (
      <View style={styles.noteContainer}>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ButtonComponent;