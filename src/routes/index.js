import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
 
import Home from '../pages/Home'
import Perfil from '../pages/Perfil';
import Camera from '../pages/Camera';
import SemNome from '../pages/SemNome';
import Pesquisa from '../pages/Pesquisa';
 
import ButtonNew from '../components/ButtonNew';
 
const Tab  = createBottomTabNavigator();
 
export default function Routes(){
  return(
    <Tab.Navigator screenOptions = {{
      headerShown: false,
      tabBarShowLabel: false
    }}>
      <Tab.Screen
       name='Home'
       component={Home}
       options={{
         tabBarIcon:({focused}) => (
           <>
           <Ionicons
           name = {focused ? 'home': 'home-outline'}
           size = {23}
           color = {focused ? '#C58BF2' : '#ADA4A5' }
           />
           <FontAwesome
           name = {focused ? 'circle' : ''}
           size = {5}
           color = {focused ? '#C58BF2' : '#ADA4A5' }
           />
 
 
             
         
           </>
         )
       }}
       />
       <Tab.Screen
      name='SemNome'
      component={SemNome}
      options={{
        tabBarIcon:({focused}) => (
          <>
          <Icon
          name='chart-line'
          size={26}
          color = {focused ? '#C58BF2' : '#ADA4A5' }
          />
         
          <FontAwesome
           name = {focused ? 'circle' : ''}
           size = {5}
           color = {focused ? '#C58BF2' : '#ADA4A5' }
           />
         
          </>
        )
      }}
      />
       <Tab.Screen
       name='Pesquisa'
       component={Pesquisa}
       options={{
        tabBarIcon:({size, color}) => (
         <ButtonNew size={size} color={color}/>
         
 
 
        )
      }}
        />
 
       <Tab.Screen
       name='Camera'
       component={Camera}
       options={{
        tabBarIcon:({focused}) => (
          <>
          <Ionicons
          name= {focused ? 'camera': 'camera-outline'}
          size={27}
          color = {focused ? '#C58BF2' : '#ADA4A5' }
          />
          <FontAwesome
           name = {focused ? 'circle' : ''}
           size = {5}
           color = {focused ? '#C58BF2' : '#ADA4A5' }
           />
 
 
           
         
          </>
        )
      }}
       />
     
      <Tab.Screen
       name='Perfil'
       component={Perfil}
       options={{
        tabBarIcon:({focused}) => (
          <>
          <FontAwesome
          name={focused ? 'user' : 'user-o' }
          size={23}
          color = {focused ? '#C58BF2' : '#ADA4A5' }
 
          />
          <FontAwesome
           name = {focused ? 'circle' : ''}
           size = {5}
           color = {focused ? '#C58BF2' : '#ADA4A5' }
           />
           
         
          </>
        )
      }}
       />
     
    </Tab.Navigator>
  );
}
