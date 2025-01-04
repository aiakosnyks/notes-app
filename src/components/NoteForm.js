import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Alert, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNote, editNote, clearSelectedNote } from '../redux/noteSlice';

const NoteForm = ({ note }) => {
  //console.log('note form entry: ', note);
  const [title, setTitle] = useState(note?.content.title || '');
  const [description, setDescription] = useState(note?.content.description || '');
  const [email, setEmail] = useState(note?.content.email || '');


  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!title || !description || !email) {
      Alert.alert('Please fill out all fields.');
      return;
    }

    const content = { 'title':title, 'description': description, 'email':email };
    const editContent = {'id': note?.id, 'content': content};
    if (note) {
      dispatch(editNote( editContent));
      Alert.alert('Note Updated');
    } else {
      console.log('added new content: ', content);
      dispatch(addNote(content));
      Alert.alert('Note Added');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        defaultValue={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Title"
        defaultValue={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        defaultValue={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.noteSubmitButton}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
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
    backgroundColor: '#D19C78',
    opacity: 0.85,
    height: 30,
    borderRadius: 15,
  },
});

export default NoteForm;
