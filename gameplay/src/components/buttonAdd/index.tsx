/* Base */
import React from 'react';
import { RectButton, RectButtonProps  } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

/* Custons */
import { styles } from './styles'
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
}

export function ButtonAdd( { ...rest } : Props ) {
  return (
    <RectButton 
      style={styles.container}
    >
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      />

    </RectButton>
  )
}
