import React, { useState } from 'react';
import {Ionicons, FontAwesome,EvilIcons} from '@expo/vector-icons';
import { 
  View, 
  Text, 
  StyleSheet,  
  TouchableOpacity, 
  TouchableWithoutFeedback 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function ModalNewRoom({ setVisible }){

  return(
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={styles.modal}></View>
      </TouchableWithoutFeedback> 

      <View style={styles.modalContent}>
        <Text style={styles.title}>Workout Schedule</Text>
        <Text style={styles.text1}>Lowerbody Workout</Text>
        <Text style={styles.text2}>Today | 03:00PM</Text>
        <View style={styles.IconClock}>
         <EvilIcons name='clock' color={'#7B6F72'} size={22}/>
        </View>

        <TouchableOpacity >
        <View style={styles.Icon}>
        <Ionicons name='close' size={17}/>
        </View>
        </TouchableOpacity>

        <View style={styles.Icon2}>
        <Ionicons name='ios-ellipsis-vertical' size={17}/>
        </View>
        
        <LinearGradient 
        colors={['#92A3FD', '#9DCEFF']}
        start = {{x:2, y:0}}
        end= {{ x:0, y:0 }}
        style={styles.buttonCreate}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Mark as Done</Text>
        </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  )
}

export default ModalNewRoom;

const styles = StyleSheet.create({
 container:{
  flex: 1,
  backgroundColor: 'rgba(34, 34, 34, 0.4)'
 },
 modal:{
  flex: 1,
 },
 modalContent:{
   flex: 1,
  backgroundColor: '#FFF',
  width: 315,
  height: 243,
  top: 345,
  left: 48,
  borderRadius:16,

 },
 title:{
   marginTop: 30,
   textAlign: 'center',
   fontWeight: 'bold',
   fontSize: 16,
 },
 text1:{
  fontSize: 14,
  left: 30,
  top: 30,
  color: '#1D1617',
  fontWeight: '500',
 },
 text2:{
  fontSize: 12,
  left: 60,
  top: 41,
  color: '#7B6F72',
  fontWeight: '400',
 },
 buttonCreate:{
   borderRadius:25,
   top: 35,
   left: 30,
   width: 255,
   height: 48,
   alignItems: 'center',
   justifyContent: 'center'
 },
 buttonText:{
   fontSize: 12,
   fontWeight: '600',
   color: '#FFF'
 },
 Icon:{
  top: -49,
  left: 30,
 },
 Icon2:{
  top: -68,
  left: 262,
 },
 IconClock:{
   position: 'absolute',
   top: 106,
   left: 30,
 }
})