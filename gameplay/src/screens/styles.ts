import { StyleSheet } from 'react-native';
import { theme } from '../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 360
  },
  content: {
    marginTop: -50,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 16 
  },
  subtitle: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 64
  }
});