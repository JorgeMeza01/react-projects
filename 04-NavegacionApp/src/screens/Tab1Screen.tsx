import React, {useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import { Text, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';




export const Tab1Screen = () => {
    useEffect(() => {
       
        console.log('Tab1Screen effect');
    }, [])
    return (
        <View style={styles.globalMargin}>
        <Text style={styles.title}>Iconos</Text>
                <Text>
                <Icon name="airplane-outline" size={80} color={colores.primary} />
                <Icon name="apps-outline" size={80} color={colores.primary} />
                <Icon name="battery-half-outline" size={80} color={colores.primary} />
                <Icon name="bug-outline" size={80} color={colores.primary} />
                <Icon name="cloud-download-outline" size={80} color={colores.primary} />
                <Icon name="location-outline" size={80} color={colores.primary} />
                <Icon name="location" size={80} color={colores.primary} />
                <Icon name="location-sharp" size={80} color={colores.primary} />

            </Text>
        </View>
    )
} 
