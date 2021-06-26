import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '../views/search';
import { ResultScreen } from '../views/results';

interface NavigationModuleProps{ }

const Stack = createStackNavigator();

const NavigationModule: React.FunctionComponent<NavigationModuleProps> = ({}) => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
                <Stack.Screen name="Home" component={SearchScreen} />
                <Stack.Screen name="Results" component={ResultScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationModule;