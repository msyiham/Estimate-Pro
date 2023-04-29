import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
	View,
	Text
} from 'react-native';
import App from './Estimasi';
import Awal from './Awal';
import Panduan from './Panduan';
const Stack = createNativeStackNavigator();


const MenuNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown : false
            }}
        >
            <Stack.Screen
                name="Awal"
                component={Awal}
            />
            <Stack.Screen
                name="Estimate"
                component={App}
            />
            <Stack.Screen
                name="Panduan"
                component={Panduan}
            />
        </Stack.Navigator>
    )
}

export default MenuNavigation;