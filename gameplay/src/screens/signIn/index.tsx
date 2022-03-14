/* Base */
import React, { useState } from 'react'
import { View, Text, Image } from "react-native"
import { useNavigation } from '@react-navigation/native'

/* Custon */
import { styles } from './styles'
import { Routes } from '../../routes/index'
/* Conponents */
import { ButtonIcon } from '../../components/buttonIcon'
 
/* Assets */
import Illustration from '../../assets/illustration.png' 

export function SignIn() {
  const navigation = useNavigation() 

  return (
    <View style= { styles.container }>
      
      <Image 
        source={Illustration}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style= { styles.content }>
        <Text style={styles.title} >  
          Conect-se {'\n'}
          e organize suas {'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games  {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
          title='Entrar com Discord'
          onPress= { () => { navigation.navigate('HomePage' as never) } }
        />

      </View>

    </View>
  );
}

