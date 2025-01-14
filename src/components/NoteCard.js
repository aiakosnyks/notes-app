import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { removeNote } from '../redux/noteSlice';
import { useDispatch } from 'react-redux';

const NoteCard = ({ note, navigation }) => {
  const dispatch = useDispatch();
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    console.log('showDetail updated:', showDetail);
  }, [showDetail]);

  return (
    <View style={styles.noteContainer}>
      <View style={styles.noteHeader}>
        <Text style={styles.noteTitleText}>{note.content.title}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={ () => navigation.navigate('Edit', { note: note }) } style={styles.noteEditButton}>
          <Text>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => dispatch(removeNote(note.id))} style={styles.noteDeleteButton}>
          <Text>Erase</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.emailText}>{note.content.email}</Text>
      <Text style={styles.descriptionText}>{note.content.description}</Text>

      {showDetail && (
      <View style={styles.noteImage}> 
        <Image
          source={{
            uri: note.content.image || 'https://via.placeholder.com/200',
          }}
          style={{ width: 200, height: 200 }} 
          resizeMode="contain"
        />
      </View>
      )}

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <TouchableOpacity onPress={() => {
          setShowDetail((prev) => !prev);
          console.log('showDetail:', !showDetail);
        }}
        style={styles.noteDetailButton}>
        <Text>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noteImage: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    resizeMode: 'contain',
    backgroundColor: 'transparent', // Görünür arka plan etkilenmez
 
  },
  noteContainer: {
    padding: 10,
    margin: 20,
    borderRadius: 15,
    backgroundColor: '#D3F17F',
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
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#78ACD1',
  },
  noteDeleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#78ACD1',
  },
  noteDetailButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    backgroundColor: '#D19C78',
    opacity: 0.85,
    height: 40,
    borderRadius: 20,
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

export default NoteCard;
