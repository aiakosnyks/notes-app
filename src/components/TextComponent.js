import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const Separator = () => <View style={styles.separator} />;

const TextComponent = () => {
  const countValue = useSelector(state => state.counter.value);
  return (
    <View tyle={styles.container}>
      <Text style={styles.title}>
        {countValue}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
});

export default TextComponent;