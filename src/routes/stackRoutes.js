import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Congratulations from '../pages/Congratulations'
import Notification from '../pages/Notification';
import Routes from './index';
import Tracker from '../pages/Tracker';
import Schedule from '../pages/Schedule'
import AddSchedule from '../pages/AddSchedule';
import WorkoutTracker from '../pages/WorkoutTracker'
import FullbodyWorkout from '../pages/FullbodyWorkout'
import JumpingJack from '../pages/JumpingJack'

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator
            screenOptions = {{
            headerShown: false,
            tabBarShowLabel: false
          }}
        >
            <Stack.Screen
                name='Home'
                component={Routes}
            />

            <Stack.Screen
                name = 'Notification'
                component={Notification}
            />

            <Stack.Screen
                name='Congratulations'
                component={Congratulations}
            />

            <Stack.Screen
                name='Tracker'
                component={Tracker}
            />

            <Stack.Screen
                name='WorkoutTracker'
                component={WorkoutTracker}
            />

            <Stack.Screen
                name='Camera'
                component={Routes}
            />

            <Stack.Screen
                name='Schedule'
                component={Schedule}
            />

            <Stack.Screen
                name='AddSchedule'
                component={AddSchedule}
            />

            <Stack.Screen
                name='FullbodyWorkout'
                component={FullbodyWorkout}
            />

            <Stack.Screen
                name='JumpingJack'
                component={JumpingJack}
            />
        </Stack.Navigator>
    )
}