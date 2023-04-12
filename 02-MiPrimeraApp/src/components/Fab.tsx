import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';



interface Props{
    title: string,
    position?: 'br' | 'bl',
    onPress: () => void;
}

export const Fab = ( {title, onPress, position = 'br'}: Props ) => {

    const ios = () => {
        return ( 
            <TouchableOpacity 
            activeOpacity = { 0.75}
            style={[
                styles.fabLocation,
                ( position === 'bl') ? styles.left : styles.right            
            ]}>

        <View style={styles.fab}>
                <Text style= {styles.fabText}>{title} </Text>
        </View>
            </TouchableOpacity>
            )    
    }


    const android = () => {
        return (
        
            
        <View style={[styles.fabLocation,
            ( position === 'bl') ? styles.left : styles.right            
        ]}>
            <TouchableNativeFeedback
                onPress= { onPress }
                background= { TouchableNativeFeedback.Ripple('white', false, 30) }
            >
                <View style={styles.fab}>
                    <Text style= {styles.fabText}>{title} </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
        )
    }


    return (Platform.OS === 'ios') ? ios() : android();     
}


const styles = StyleSheet.create({
    fabLocation:{
        position: 'absolute',
        bottom: 25,
        borderRadius: 100,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    }
    ,
    fabLocationBR: {
        position: 'absolute',
        bottom: 25,
        right: 25,
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 25,
        left: 25,
    },
   fab: {
       backgroundColor: '#5856D6',
       width: 60,
       height: 60,
       borderRadius: 100,
       justifyContent: 'center',
       shadowColor: "#000",
       shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 8,

   },
   fabText: {
       color: 'white',
       fontSize: 25,
       fontWeight: 'bold',
        alignSelf: 'center',
    }
});