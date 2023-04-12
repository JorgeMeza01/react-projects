import React, {useEffect} from 'react'
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title:'Hola mundo',
            headerBackTitle:'',
        });
        
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> Pagina 2 Screen</Text>

            <Button
                title="Ir a página 3"
                onPress={ () => navigation.navigate('Pagina3Screen')}
            />

            
        </View>
    )
}
