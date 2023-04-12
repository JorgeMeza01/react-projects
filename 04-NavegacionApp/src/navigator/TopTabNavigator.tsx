import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { LogBox, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

LogBox.ignoreLogs(['Sending'])
const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

const { top:paddingTop} = useSafeAreaInsets()
  return (
    <Tab.Navigator
        style={{ paddingTop }}
        sceneContainerStyle={{ backgroundColor: 'white' }}
        
        screenOptions={({route}) => ({
          tabBarShowIcon: true,
          tabBarIndicatorStyle: {
            backgroundColor: colores.primary,
          },
          tabBarActiveTintColor: 'black',
          tabBarPressColor: colores.primary,
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarStyle: {
            paddingVertical: 12,
            backgroundColor: 'white'
          },
          tabBarIconStyle: {
            flexDirection: 'row',
            justifyContent: 'center',
          },
          tabBarIcon: ({color, focused}) => {
            let iconName: string = '';
            switch (route.name) {
                case 'Chat':
                iconName = 'chatbubbles-outline'
                break;
   
                case 'Contacts':
                iconName = 'people-outline'
                break;
   
                case 'Albums':
                iconName = 'images-outline'
                break;
            }
            return <Icon name={iconName} size={20} color={color} />
          }
        })}
        
    >
      <Tab.Screen name="Chat" options={{ title: 'Chat' }} component={ChatScreen} />
      <Tab.Screen name="Contacts"  options={{title: 'Contacts'}} component={ContactsScreen} />
      <Tab.Screen name="Albums"  options= {{title: 'Albums'}} component={AlbumsScreen} />
    </Tab.Navigator>
  );
}