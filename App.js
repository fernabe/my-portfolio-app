import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PortfolioList from './screens/PortfolioList';
import Project from './screens/Project';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={PortfolioList}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={Project} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;