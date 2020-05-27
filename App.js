import React from 'react';
import { StyleSheet, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import GeoCalc from './components/GeoCalc';
import SettingsPage from './components/SettingsPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigation, createStackNavigator } from '@react-navigation/stack';

export default function App() {
  
  const Stack = createStackNavigator();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer >
          <Stack.Navigator screenOptions={{
              headerStyle: {backgroundColor: '#5388d0',},
              headerTintColor: '#ffff',
              headerTitleStyle: {fontWeight: 'bold',},}}>
                <Stack.Screen name = "Geo Calculator" component = {GeoCalc}/>
                <Stack.Screen name = "Settings Page" component = {SettingsPage }/>

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3D4C5',
    flex: 1,
    justifyContent: 'center',
  },
});