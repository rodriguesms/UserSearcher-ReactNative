import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '../views/search';

const Stack = createStackNavigator();

export default function NavigationModule() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}