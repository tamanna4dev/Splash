import { Image, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from '../Screen/BottomScreen/Screen1';
import Screen2 from '../Screen/BottomScreen/Screen2';
import Screen3 from '../Screen/BottomScreen/Screen3';
import { NavigationContainer } from '@react-navigation/native';





const bottom=createBottomTabNavigator();
const BottomNavigation = () => {
    return (
    // <NavigationContainer>

        <bottom.Navigator>
            <bottom.Screen name='Screen1' component={Screen1} 
            options={{headerShown:false, tabBarIcon:()=>{
                return (
                <Image source={require('../Assets/image/20.png')} style={{ height: 22, width: 22}} />
            )
        }}} />
        <bottom.Screen name='Screen2' component={Screen2} options={{headerShown:false, tabBarIcon:()=>{
            return (
                <Image source={require('../Assets/image/21.png')} style={{ height: 22, width: 22}} />

            )
        }}} />
           <bottom.Screen name='Screen3' component={Screen3} options={{headerShown:false, tabBarIcon:()=>{
            return (
                <Image source={require('../Assets/image/22.png')} style={{ height: 22, width: 22}} />

            )
        }}} />
            

    </bottom.Navigator>
// </NavigationContainer>
 
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})