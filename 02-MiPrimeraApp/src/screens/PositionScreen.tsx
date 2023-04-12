import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={ styles.cajaMorada} />
            <View style={ styles.cajaNaranja} />
            <View style={ styles.cajaVerde} />
            <View style={ styles.cajaRoja} />

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width:400,
        // height:400,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#28C4D9',
    
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856d6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top:0,
        right:0,
        // top:10,

        // left: 0
        // bottom: 10,
    

    },
    cajaNaranja:{
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position:'absolute',
        bottom: 0,
        right:0,
        // top:0,
        // top: 400,
        // top: 10,
    },
    cajaVerde:{
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        position:'absolute',
        bottom: 0,
        left:0,
        // top:0,
        // top: 400,
        // top: 10,
    },
    cajaRoja:{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderWidth: 10,
        borderColor: 'white',
        position:'absolute',
        top: 0,
        left:0,
        // top:0,
        // top: 400,
        // top: 10,
        //...StyleSheet.absoluteFillObject Estira todo el objeto
    }

});