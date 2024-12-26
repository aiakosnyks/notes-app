import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NoteComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.addButton}>
      <Icon name="plus" size={27} color="#000" fontWeight={50} opacity={0.7}/>
      </TouchableOpacity>
      <View style={styles.container}>
      </View>
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
    borderRadius: 5,
    alignItems: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#78D199',
    opacity: 0.70,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default NoteComponent;
