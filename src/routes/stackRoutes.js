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
import StartdWhite from '../pages/StartdWhite';
import StartdBlue from '../pages/StartdBlue';
import TrackObjective from '../pages/TrackObjective';
import GetBurn from '../pages/GetBurn';
import EatWell from '../pages/EatWell';
import ImproveQuality from '../pages/ImproveQuality';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import WhatGoal from '../pages/WhatGoal';
import WhatGoalDois from '../pages/WhatGoalDois';
import WhatGoalTres from '../pages/WhatGoalTres';
import Welcome from '../pages/Welcome';
import MealPlannerScreen from '../pages/MealPlanner';
import BreakfastScreen from '../pages/Breakfast';
import BluebarryPancakeScreen from '../pages/BluebarryPancake';
import MealScheduleScreen from '../pages/MealSchedule';
import SleepTrackerScreen from '../pages/SleepTracker';
import SleepScheduleScreen from '../pages/SleepSchedule';
import AddAlarmScreen from '../pages/AddAlarm';
import ComparisonScreen from '../pages/Comparison';
import ResultScreen from '../pages/Result';
import Result1Screen from '../pages/Result1';
import Tela6Screen from '../pages/Tela6';


const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(

        <Stack.Navigator
            screenOptions = {{
            headerShown: false,
            tabBarShowLabel: false,
          }}
        >
            
        <Stack.Screen 
        name="StartdWhite" 
        component={StartdWhite}
        />
        
        <Stack.Screen 
        name="StartdBlue" 
        component={StartdBlue}
        />
        
        <Stack.Screen 
        name="TrackObjective" 
        component={TrackObjective}
        />
        
        <Stack.Screen 
        name="GetBurn" 
        component={GetBurn}
        />
        
        <Stack.Screen 
        name="EatWell" 
        component={EatWell}
        />
        
        <Stack.Screen 
        name="ImproveQuality" 
        component={ImproveQuality}
        />
        
        <Stack.Screen 
        name="Register" 
        component={Register}
        />
        
        <Stack.Screen 
        name="Profile" 
        component={Profile}
        />
        
        <Stack.Screen 
        name="Login" 
        component={Login}
        />
        
        <Stack.Screen 
        name="WhatGoal" 
        component={WhatGoal}
        />
        
        <Stack.Screen 
        name='WhatGoalDois' 
        component={WhatGoalDois}
        />
        
        <Stack.Screen 
        name="WhatGoalTres" 
        component={WhatGoalTres}
        />
        
        <Stack.Screen 
        name="Welcome" 
        component={Welcome}
        />
     
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

          <Stack.Screen name="Meal Planner"
          component={MealPlannerScreen}
          options={{
          title: 'Meal Planner',
          headerTitleAlign: 'center', 
        }} />

        <Stack.Screen name="Breakfast" 
          component={BreakfastScreen}
          options={{
          title: 'Breakfast',
          headerTitleAlign: 'center'
        }} /> 
        <Stack.Screen name="Bluebarry Pancake"
          component={BluebarryPancakeScreen}
          options={{
          title: 'Bluebarry Pancake',
          headerTitleAlign: 'center'
        }} />

        <Stack.Screen name="Meal Schedule" 
          component={MealScheduleScreen}
          options={{
          title: 'Meal Schedule',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Sleep Tracker" 
          component={SleepTrackerScreen}
          options={{
          title: 'Sleep Tracker',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Sleep Schedule" 
          component={SleepScheduleScreen}
          options={{
          title: 'Sleep Schedule',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Add Alarm" 
          component={AddAlarmScreen}
          options={{
          title: 'Add Alarm',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Comparison" 
          component={ComparisonScreen}
          options={{
          title: 'Comparison',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Result" 
          component={ResultScreen}
          options={{
          title: 'Result',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Result1" 
          component={Result1Screen}
          options={{
          title: 'Result',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Tela 6" 
          component={Tela6Screen}
        />
        </Stack.Navigator>
        
    )
}