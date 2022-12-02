import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/home/Home';

export type StackParams = {
    Home: any;
}

const Stack = createStackNavigator<StackParams>();

export default function MainStack() {
    return (
        <Stack.Navigator initialRouteName= 'Home' >
        <Stack.Screen
            name='Home'
            component = { Home }
        />
        </Stack.Navigator>
    )
}