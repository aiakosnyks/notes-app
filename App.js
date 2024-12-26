/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


// import NoteComponent from './components/NoteComponent';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.addButton}>
      <Icon name="plus" size={27} color="#000" fontWeight={50} opacity={0.7}/>
      </TouchableOpacity>
      <View style={styles.noteContainer}>
        <Text>hey</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
        mainContainer: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingTop: 20,
        },
        noteContainer: {
            flexDirection: 'row',
            paddingHorizontal:'',
            paddingVertical: '',
            margin: '40',
            borderRadius: 15,
            height: 70,
            width: 330,
            backgroundColor: '#D3F17F',
            opacity: 0.7,
        },
        addButton: {
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 15,
            alignItems: 'center',
            width: 60,
            height: 60,
            backgroundColor: '#78D199',
            opacity: 0.70,
      },
      buttonText: {
            color: '#fff',
            marginLeft: 10,
            fontSize: 16,
      },
    });

export default App;
