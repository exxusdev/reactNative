/* Base */
import { useState } from 'react'
import { View, Text, Image, StatusBar } from "react-native"

/* Custon */
import { styles } from './styles'
import { ButtonIcon } from '../components/buttonIcon'
 
/* Assets */
import Illustration from '../assets/illustration.png' 

export function Sign() {
  const [text, setText] = useState('')

  return (
    <View style= { styles.container }>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent
      />

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
          activeOpacity={0.8}
        />

      </View>

    </View>
  );
}

