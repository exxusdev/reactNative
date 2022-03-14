/* Base */
import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* Custons */
import { HomePage } from '../screens/home'
import { SignIn } from '../screens/signIn'

const { Navigator, Screen } = createNativeStackNavigator () 

export function AuthRoutes() {
  return (
    <NavigationContainer 
      independent={true}
    >
      <Navigator 
        screenOptions={{
          headerShown: false,
          headerTransparent: true,
          contentStyle: {
            backgroundColor: "transparent",
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