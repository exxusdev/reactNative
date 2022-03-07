/* Base */
import { StyleSheet } from 'react-native';

/* Custons */
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    height: 48,
    width: 48,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
})