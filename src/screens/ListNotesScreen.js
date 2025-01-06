import React from 'react';
import { TouchableOpacity, StyleSheet, View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import NoteCard from '../components/NoteCard';

const ListNotesScreen = ({ navigation }) => {
  const notes = useSelector((state) => state.notes);

  return (
    <View style={styles.mainContainer}>
      {/* Add Note Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Add')}
        style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>

      {/* Notes List */}
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NoteCard note={item} navigation={navigation} />
        )}
        contentContainerStyle={[
          styles.listContainer,
          notes.length === 0 && styles.emptyListContainer, // Handle empty list
        ]}
        ListEmptyComponent={() => (
          <Text style={styles.emptyMessage}>No notes available. Add one!</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#F9F9F9', // Light background for better aesthetics
  },
  addButton: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#78D199',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
  },
  addButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  listContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  emptyListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ListNotesScreen;
