import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const NoteForm = () => {
  return (
    <View style={styles.noteContainer}>
      <View style={styles.noteHeader}>
        <Text style={styles.noteTitleText}>note.title</Text>
      </View>
      <TextInput style={styles.emailText}>note.email</TextInput>
      <TextInput style={styles.descriptionText}>note.description</TextInput>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <TouchableOpacity style={styles.noteSaveButton}>
            <Icon name="floppy-disc" size={18} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    padding: 10,
    margin: 20,
    borderRadius: 15,
    backgroundColor: '#D3F17F',
    opacity: 0.6,
    height: 'auto',
    width: 350,
    marginBottom: 20,
  },
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 13,
  },
  noteTitleText: {
    backgroundColor: '#B678D1',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.9,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  noteEditButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    borderRadius: 15,
    backgroundColor: '#78ACD1',
  },
  noteDeleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    borderRadius: 15,
    backgroundColor: '#78ACD1',
  },
  noteSaveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    backgroundColor: '#D19C78',
    opacity: 0.85,
    height: 30,
    borderRadius: 15,
  },
  emailText: {
    backgroundColor: '#B678D1',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    color: '#000',
    fontSize: 14,
    marginBottom: 8,
    opacity: 0.8,
  },
  descriptionText: {
    backgroundColor: '#B678D1',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    color: '#000',
    fontSize: 14,
    marginBottom: 10,
    opacity: 0.75,
  },
});

export default NoteForm;
