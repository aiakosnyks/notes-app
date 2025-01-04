/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { TouchableOpacity, StyleSheet, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NoteCard from '../components/NoteCard';
import { selectAllNotes, selectNoteById } from '../redux/noteSlice';
import { useSelector } from 'react-redux';


const ListNotesScreen = ({note, navigation}) => {
  // const users = useAppSelector(selectAllNotes);
  const notes = useSelector((state) => state.notes); // 'useAppSelector' yerine 'useSelector'


  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={()=> navigation.navigate('Edit')}
      style={styles.addButton}> 
      <Icon name="plus" size={27} color="#000" fontWeight={50} opacity={0.6}/>
      </TouchableOpacity>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NoteCard note={item} navigation={navigation} />}
      />

      {/* <NoteCard navigation={navigation} /> */}
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
        addButton: {
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

export default ListNotesScreen;
