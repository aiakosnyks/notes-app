import React from 'react';
import {StyleSheet, Button, View, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../redux/counterSlice';
import { useState } from 'react';

const ButtonComponent = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
      <View style={styles.container}>
      <TextInput 
        onChangeText={(value) => setAmount(Number(value))} 
        style={styles.emailText} 
        placeholder="Enter amount" 
        keyboardType="numeric" 
      />      
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
        <Button title="IncreaseByAmount" onPress={() => dispatch(incrementByAmount(amount))} /> 
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
  emailText: {
    backgroundColor: 'red',
    alignContent: 'center',
    justifyContent: 'center',
  }
});

export default ButtonComponent;