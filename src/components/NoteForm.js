import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Alert, Text, Button, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNote, editNote } from '../redux/noteSlice';
import useEmailValidation from '../hooks/useEmailValidation'; 
import { launchImageLibrary as _launchImageLibrary } from 'react-native-image-picker';
let launchImageLibrary = _launchImageLibrary;

const NoteForm = ({ note }) => {
  const { email, setEmail, isValid } = useEmailValidation(note?.content?.email || '');
  const [title, setTitle] = useState(note?.content.title || '');
  const [description, setDescription] = useState(note?.content.description || '');
  const [selectedImage, setSelectedImage] = useState(null);

  const dispatch = useDispatch();

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    launchImageLibrary(options, handleResponse);
  };

  const handleResponse = (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      console.log('imageUri: ', imageUri);
      setSelectedImage(imageUri);
    }
  };

  const handleSubmit = () => {
    console.log('selected image: ', selectedImage);
    if (!title || !description) {
      Alert.alert('Please fill out all fields.');
      return;
    }

    if (!isValid) {
      Alert.alert('Please enter a valid email address.');
      return;
    }

    const content = { title, description, email, selectedImage };
    if (note) {
      dispatch(editNote({ id: note?.id, content }));
      Alert.alert('Note Updated');
    } else {
      dispatch(addNote(content));
      Alert.alert('Note Added');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Email: </Text>
      <TextInput
        style={[styles.input, !isValid && styles.invalidInput]}
        placeholder="Email"
        onChangeText={setEmail}
        defaultValue={email}
      />
      <Text>Title: </Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        defaultValue={title}
        onChangeText={setTitle}
      />
      <Text>Description: </Text>
      <TextInput
        style={styles.input}
        placeholder="Description"
        defaultValue={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />      
      <Text>Image: </Text>
      <View style={{ marginBottom: 10 }}>
        <Button title="Choose from Device" onPress={openImagePicker} />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.noteSubmitButton}>
        <Text>Submit</Text>
      </TouchableOpacity>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ flex: 1 }}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginBottom: 12,
  },
  invalidInput: {
    borderColor: 'red',
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
