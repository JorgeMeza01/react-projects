import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={Styles.container}>
        <Text style={Styles.caja1}>Caja 1</Text>  
        <Text style={Styles.caja2}>Caja 2</Text>  
        <Text style={Styles.caja3}>Caja 3</Text>  
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#28C4D9',
        // alignItems:'flex-start',
        // flexDirection: 'row',
        // // flexWrap: 'wrap'
        //alignItems: 'stretch',
        // // flexDirection: 'row',
        // alignItems: 'flex-start',
        // alignContent: 'space-between'
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
        // alignItems: 'flex-end'
        // flexDirection: 'column',
        // justifyContent: 'center'

        //flexDirection: 'column-reverse'
        // flexDirection: 'row'

    },
    caja1: {
        //El flex se suman los valores del flex y se dividen en la asignacion
        borderWidth: 2,
        borderColor: 'white',
        fontSize:30,
        // alignSelf:'center',


    },
    caja2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize:30,
        // alignSelf: 'flex-start'
        
    },
    caja3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize:30,
        // alignSelf: 'flex-end'
        
    },
});