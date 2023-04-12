import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setcontador] = useState(10);
    return (
        <View style={styles.container}>
                <Text 
                style= {styles.title}
                > Contador: {contador}</Text>
    
    <Fab
        title="+1"
        onPress={() => setcontador( contador + 1)}
    />

    <Fab
        title="-1"
        position="bl"
        onPress={() => setcontador( contador - 1)}
    />  

    {/* <TouchableOpacity
    style={styles.fabLocationBL}
        onPress= { () => setcontador( contador - 1) }
    >
        <View style={styles.fab}>
            <Text style= {styles.fabText}>-1</Text>
        </View>
    </TouchableOpacity> */}


        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        top: -10,
        fontSize: 40

    }
    
});
