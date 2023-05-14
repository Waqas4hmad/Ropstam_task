import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';
import Car from '../screens/Car';


const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Dashboard'>
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Car" component={Car} />

        </Stack.Navigator>
    )
}
export default AppNavigator;