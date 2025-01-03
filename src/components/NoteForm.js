import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/noteSlice';
import Icon from 'react-native-vector-icons/FontAwesome';


const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!title || !description) {
      Alert.alert('Please fill out both fields.');
      return;
    }

    const content = { title, description };
    dispatch(addNote(content));
    
    console.log('Note added:', { title, description });
    Alert.alert('Note Added', `Title: ${title}\nDescription: ${description}`);
    setTitle('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add a New Note</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />
        <TouchableOpacity onPress={handleSubmit} style={styles.noteSubmitButton}>
          <Icon name="bars" size={18} color="#000" />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginBottom: 12,
  },
  noteSubmitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    backgroundColor: '#D19C78',
    opacity: 0.85,
    height: 30,
    borderRadius: 15,
  },
});

export default NoteForm;
