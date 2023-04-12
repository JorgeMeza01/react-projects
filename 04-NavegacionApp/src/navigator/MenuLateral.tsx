import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';
import { useWindowDimensions, Text, View, Image,TouchableOpacity } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();


// const Stack = createStackNavigator();
// const SettingStackScreen = () => {
//   return(
//       <Stack.Navigator>
//         <Stack.Screen
//           name="SettingScreen"
//           component={SettingScreen}
//         />

//       </Stack.Navigator>
//   )
// } 

export const MenuLateral = () => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown:true,
        // drawerPosition: 'right', 
        drawerType:  width >= 768 ? 'permanent' : 'front', //Menú modo horizontal
      }}
      drawerContent= { (props) => <MenuInterno {...props}/> }
      
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
}


const MenuInterno = ( { navigation }: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>
{/* 
      Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif'
          }}
          style={styles.avatar}
        />
        </View>
        {/* Opciones de Menu */}
          <View style={styles.menuContainer}> 
              <TouchableOpacity 
                  style={{
                    ...styles.menuBoton,
                    flexDirection: 'row'
                  }}
                  onPress={ () => navigation.navigate('Tabs')}
              >
              <Icon name="navigate-circle-outline" size={20} color='black' />
                <Text style={styles.menuTexto }> Navegación</Text>
              </TouchableOpacity>

            <TouchableOpacity 
                  style={{
                    ...styles.menuBoton,
                    flexDirection: 'row'
                  }}
                  onPress={ () => navigation.navigate('SettingScreen')}
            >
               <Icon name="cog-outline" size={20} color='black' />
              <Text style={styles.menuTexto }> Ajustes</Text>
            </TouchableOpacity>
          </View>

    </DrawerContentScrollView>
  );
}