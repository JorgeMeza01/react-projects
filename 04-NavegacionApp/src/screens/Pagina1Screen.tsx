import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles, colores } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerScreenProps } from '@react-navigation/drawer';


interface Props extends DrawerScreenProps<any, any>{

    
};



export const Pagina1Screen = ({navigation}: Props) => {


    useEffect (() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={{
                        marginLeft:10
                    }}
                    // onPress={ () => navigation.toggleDrawer() }
                >
                    <Icon name="menu-outline" color={colores.primary} size= {35} />
                </TouchableOpacity>
            )
        })
    })
    // console.log(props);
    return (
        <View style={ styles.globalMargin} >
            <Text style={styles.title}>Pagina 1 Screen</Text>

            <Button
                title="Ir a página 2"
                onPress={ () => navigation.navigate('Pagina2Screen')}
            />

            {/* <Button
                title="Ir persona"
                onPress={ () => navigation.navigate('PersonaScreen')}
            > */}
            {/* </Button> */}
            <Text style={{
                marginVertical: 20,
                fontSize: 20,
                marginLeft: 5,
            }}>Navegar con argumentos</Text>

            <View style={{flexDirection: 'row'}}>

                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                    }}

                    onPress={ () => navigation.navigate('PersonaScreen', {
                    id:1,
                    nombre:'Pedro',
                    })}
                >
                 <Icon name="person-outline" color={'white'} size= {35} />

                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427'
                    }}                    
                    onPress={ () => navigation.navigate('PersonaScreen', {
                    id:2,
                    nombre:'Jorge',
                    })}
                >
                   <Icon name="person-outline" color={'white'} size= {35} />
                    <Text style={styles.botonGrandeTexto}>Jorge</Text>
                </TouchableOpacity>


            </View>
        </View>
    )
}
