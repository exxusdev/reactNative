/* Base */
import React from "react";
import { RectButton, RectButtonProps  } from 'react-native-gesture-handler'
import { Text, Image, View } from "react-native"

/* Custon */
import { styles } from './styles'

/* Assets */
import Discord from '../../assets/discord.png'

type Props = RectButtonProps & {
  title: string,
}

export function ButtonIcon ({ title, ...rest } : Props) {
  return (
    <RectButton 
      style={styles.container} 
    >
      <View style={styles.iconWrapper}>
        <Image source={Discord} style={styles.icon} />
      </View>  

      <Text style={styles.title}> 
        { title }
      </Text>    

    </RectButton>
  ) 
}