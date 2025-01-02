import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListNotesScreen from './src/screens/ListNotesScreen';
import EditNoteScreen from './src/screens/EditNoteScreen';
import CounterScreen from './src/screens/CounterScreen';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={ListNotesScreen}
          />
          <Stack.Screen 
          name="Edit" 
          component={EditNoteScreen} 
          />
          <Stack.Screen 
          name="Counter" 
          component={CounterScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
};

export default App;
