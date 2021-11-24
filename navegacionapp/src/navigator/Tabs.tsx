import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';


export const Tabs = () => {
  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
}



const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary
      }}

      screenOptions={ ({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch(route.name) {
            case 'Tab1Screen':
              iconName = 'airplane-outline'
              break;
            
            case 'Tab2Screen':
              iconName = 'basketball-outline'
              break;
            
            case 'StackNavigator':
              iconName = 'bookmarks-outline'
              break;
            
          }
          return <Icon name={iconName} size={ 20 } color={ color } />
        }
      })}

    >
      <BottomTabAndroid.Screen name="Tab1Screen"     component={Tab1Screen}       options={{ title:'Tab1'   }}    />
      <BottomTabAndroid.Screen name="Tab2Screen"     component={TopTabNavigator}  options={{ title:'Tab2'   }}    />
      <BottomTabAndroid.Screen name="StackNavigator" component={StackNavigator}   options={{ title:'Stack'  }}    />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={{
        tabBarActiveTintColor: colores.primary,
        tabBarStyle:{
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle:{
          fontSize: 15
        }
      }}

      screenOptions={ ({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch(route.name) {
            case 'Tab1Screen':
              iconName = 'airplane-outline'
              break;
            
            case 'Tab2Screen':
              iconName = 'basketball-outline'
              break;
            
            case 'StackNavigator':
              iconName = 'bookmarks-outline'
              break;
            
          }
          return <Icon name={iconName} size={ 20 } color={ color } />
        }
      })}

    >
      <BottomTabIOS.Screen name="Tab1Screen"     component={Tab1Screen}       options={{headerShown:false, title:'Tab1'   }}    />
      <BottomTabIOS.Screen name="Tab2Screen"     component={TopTabNavigator}  options={{headerShown:false, title:'Tab2'   }}    />
      <BottomTabIOS.Screen name="StackNavigator" component={StackNavigator}   options={{headerShown:false, title:'Stack'  }}    />
    </BottomTabIOS.Navigator>
  );
}