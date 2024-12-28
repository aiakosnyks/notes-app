import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListNotesScreen from './src/screens/ListNotesScreen';
import EditNoteScreen from './src/screens/EditNoteScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={ListNotesScreen}
        />
        <Stack.Screen name="Edit" component={EditNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
