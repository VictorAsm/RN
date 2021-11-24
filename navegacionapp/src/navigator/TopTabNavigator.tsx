import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

/* import {LogBox} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
LogBox.ignoreLogs(['Sending']) */

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top:paddingTop } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        padding: paddingTop
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={{
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary
        },
        tabBarStyle:{
          borderTopColor: colores.primary,
          shadowColor: 'transparent',
          elevation: 0
        }
      }}

      screenOptions={ ({route}) => ({
          tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch(route.name) {
            case 'Chats':
              iconName = 'chatbox-ellipses-outline'
            
            case 'Contacts':
              iconName = 'people-outline'
              break;
            
            case 'Albums':
              iconName = 'albums-outline'
              break;

          }
          return <Icon name={iconName} size={ 20 } color={ color } />
        }
      })}
    >
      <Tab.Screen name="Chats"    component={ChatScreen}     />
      <Tab.Screen name="Contacts" component={ContactScreen}  />
      <Tab.Screen name="Albums"   component={AlbumScreen}    />
    </Tab.Navigator>
  );
}