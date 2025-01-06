import React from "react";
import { View, StyleSheet } from "react-native";
import NoteForm from "../components/NoteForm";

const AddNoteScreen = () => {
    return (
      <View style={styles.mainContainer}>
        <NoteForm/>    
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
    });

export default AddNoteScreen;