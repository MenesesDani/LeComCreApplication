import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 1,
  },
  image: {
    flex: 1,
  },
  imageStyle: {
    borderRadius: 16,
    resizeMode: 'cover',
  },
});
