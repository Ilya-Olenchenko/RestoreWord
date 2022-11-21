import 'react-native-gesture-handler'
import React from 'react'

import Main from './Main'
import Game from './Game'
import Settings from './Settings'
import Final from './Final'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Final"
                component={Final}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Game"
                component={Game}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    </NavigationContainer>;
}