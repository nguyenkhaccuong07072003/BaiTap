import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import WelcomeScreen from './screens/WelcomScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="ViewImageScreen" component={ViewImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
