/* Base */
import React from "react";
import { NavigationContainer } from '@react-navigation/native'

/* Custons */
import { AuthRoutes } from "./auth.routes";
import { Background } from '../components/background';

export function Routes() {
  return (
    <Background>
      <NavigationContainer>
        <AuthRoutes />  
      </NavigationContainer>    
    </Background>
  )
}