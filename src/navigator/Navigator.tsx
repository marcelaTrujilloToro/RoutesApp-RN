import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PermisionsScreen} from '../pages/PermisionsScreen';
import {MapScreen} from '../pages/MapScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="PermisionsScreen" component={PermisionsScreen} />
    </Stack.Navigator>
  );
};
