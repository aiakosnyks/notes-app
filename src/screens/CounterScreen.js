import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import TextComponent from '../components/TextComponent';
import ButtonComponent from '../components/ButtonComponent';

const CounterScreen = () => {
  return (
      <View style={styles.container}>
        <TextComponent/>
        <ButtonComponent/>
      </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  }
});

export default CounterScreen;