/* Base */
import React from "react";
import { 
  Text, 
  Image, 
  View, 
  TouchableOpacity, 
  TouchableOpacityProps } 
from "react-native"

/* Custon */
import { styles } from './styles'

/* Assets */
import Discord from '../../assets/discord.png'

type Props = TouchableOpacityProps & {
  title: string,
}

export function ButtonIcon ({ title, ...rest } : Props) {
  return (
    <TouchableOpacity 
      style={styles.container} 
    >
      <View style={styles.iconWrapper}>
        <Image source={Discord} style={styles.icon} />
      </View>  

      <Text style={styles.title}> 
        { title }
      </Text>    

    </TouchableOpacity>
  ) 
}