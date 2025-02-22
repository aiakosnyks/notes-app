/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import NoteForm from '../components/NoteForm';
import { useRoute } from '@react-navigation/native';


// import NoteComponent from './components/NoteComponent';

const EditNoteScreen = () => {
  const route = useRoute();
  const note = route.params?.note;

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.saveButton}>
        <Svg id="search-icon" class="search-icon" viewBox="0 0 24 24">
        <Path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        <Path d="M0 0h24v24H0z" fill="none"/>
        </Svg>        
      </TouchableOpacity>
      <NoteForm note={note}/>
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
        saveButton: {
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 15,
            alignItems: 'center',
            width: 60,
            height: 60,
            backgroundColor: '#78D199',
            opacity: 0.65,
      },
      buttonText: {
            color: '#fff',
            marginLeft: 10,
            fontSize: 16,
            marginTop: 10,
      },
    });

export default EditNoteScreen;
