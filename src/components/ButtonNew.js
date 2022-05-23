import React from "react";
import {View, Text, StyleSheet} from 'react-native';

import {EvilIcons} from '@expo/vector-icons';

export default function ButtonNew({size, color}){
    return(
        <View style={styles.container}>
            <EvilIcons name="search" color={'#fff'} size={size}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 70,
        height: 70,
        borderRadius: 40,
        backgroundColor: '#9DCEFF',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom:40

    }
})