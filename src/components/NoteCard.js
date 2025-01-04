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
            <Svg viewBox="0 0 24 24" width={24} height={24} fill="#fff">
              <Path d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25zm14.71-9.04c.39-.39.39-1.02 0-1.41l-2.54-2.54c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </Svg>
          </TouchableOpacity>

          {/* Delete Button */}
          <TouchableOpacity onPress={() => dispatch(removeNote(note.id))} style={styles.noteDeleteButton}>
            <Svg viewBox="0 0 24 24" width={24} height={24} fill="#fff">
              <Path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm3-9h2v7H9v-7zm4 0h2v7h-2v-7zm5-4h-3.5l-1-1h-5l-1 1H5v2h14V6z" />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.emailText}>{note.content.email}</Text>
      <Text style={styles.descriptionText}>{note.content.description}</Text>

      {/* Detail Button */}
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <TouchableOpacity style={styles.noteDetailButton}>
          <Svg viewBox="0 0 24 24" width={24} height={24} fill="#fff">
            <Path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          </Svg>
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
