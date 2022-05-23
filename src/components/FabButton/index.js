import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
} from 'react-native';

function FabButton({ setVisible }){

  function handleNavigateButton(){
    setVisible()
  }

  return(
    <TouchableOpacity 
      style={styles.containerButton}
      activeOpacity={0.9}
      onPress={handleNavigateButton}
    >
      <View>
        <Text style={styles.text}>Lowerbody Workout, 3pm</Text>
      </View>
    </TouchableOpacity>
  )
}

export default FabButton;

const styles = StyleSheet.create({
  containerButton:{
   backgroundColor: 'rgba(247, 248, 248, 0.8)', 
   width: 185,
   height: 35,
   borderRadius: 50,
   justifyContent: 'center',
   alignItems: 'center',
   position: 'absolute',
   bottom: '5%',
   right: '22%',
   top: 635,
  },
  text:{  
    fontSize: 12,
    color: '#7B6F72',
    fontWeight: '400'
  }
})