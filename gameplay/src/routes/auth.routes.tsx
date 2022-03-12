/* Base */
import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* Custons */
import { HomePage } from '../screens/home'
import { SignIn } from '../screens/signIn'
import { setStatusBarTranslucent } from "expo-status-bar";

const { Navigator, Screen } = createNativeStackNavigator () 

export function AuthRoutes() {
  return (
    <NavigationContainer >
      <Navigator 
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "transparent",
            translucent: true        
          }
        }}
      >
        <Screen 
          name= "SignIn"
          component= {SignIn}
        />
        <Screen 
          name= "HomePage"
          component= {HomePage}
        />
      </Navigator>
    </NavigationContainer>
  )
}