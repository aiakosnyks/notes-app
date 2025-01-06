import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { removeNote } from '../redux/noteSlice';
import { useDispatch } from 'react-redux';

const NoteCard = ({ note, navigation, setEditing }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.noteContainer}>
      <View style={styles.noteHeader}>
        <Text style={styles.noteTitleText}>{note.content.title}</Text>
        <View style={styles.buttonContainer}>
          {/* Edit Button */}
          <TouchableOpacity onPress={ () => navigation.navigate('Edit', { note: note }) } style={styles.noteEditButton}>
          <Text>Edit</Text>
          </TouchableOpacity>

          {/* Delete Button */}
          <TouchableOpacity onPress={() => dispatch(removeNote(note.id))} style={styles.noteDeleteButton}>
          <Text>Erase</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.emailText}>{note.content.email}</Text>
      <Text style={styles.descriptionText}>{note.content.description}</Text>

      {/* Detail Button */}
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <TouchableOpacity style={styles.noteDetailButton}>
        <Text>Details</Text>
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
