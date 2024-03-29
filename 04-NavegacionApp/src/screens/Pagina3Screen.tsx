import React from 'react'
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationHelpersContext } from '@react-navigation/core';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ({navigation} : Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 3 Screen</Text>
            <Button
                title ="Regresar"
                onPress = {() => navigation.pop()}
            />

            <Button
                title ="Ir a la página 1"
                onPress = {() => navigation.popToTop()}
            />
        </View>
    )
}
