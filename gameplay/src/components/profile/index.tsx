/* Base */
import React from 'react';
import { View, Text } from 'react-native'

/* Custons */
import { styles } from './styles'

/* Components */
import { Avatar } from '../avatar'

export function Profile() {
  return (
    <View style= { styles.container }>

      <Avatar urlImage="https://i.imgur.com/40pGkNR.jpg" />

      <View>

        <View style= { styles.user}>

          <Text style= { styles.greeting}> 
            Hello,
          </Text>

          <Text style= { styles.username}>
            Jonas
          </Text>

        </View>

        <Text style= { styles.message}> 
            It's show time.
        </Text> 

      </View>

    </View>
  )
}
