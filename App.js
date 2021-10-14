import 'react-native-gesture-handler';
import React from 'react';

import Dashboard from './components/Dashboard'
// import Repositories from './components/Repositories'
// import Notes from './components/Notes'
// import ProfileDetails from './components/ProfileDetails'


import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Screen name="Dashboard" component={Dashboard}/>
      {/* <Stack.Scree name="Repositories" component={Repositories}/>
      <Stack.Scree name="Notes" component={Notes}/>
      <Stack.Scree name="ProfileDetails" component={ProfileDetails}/> */}
    </NavigationContainer>
  );
}