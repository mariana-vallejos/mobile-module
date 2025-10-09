import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  carouselContainer: {
    position: 'relative',
  },
  buttonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
  },
  buttonPrimary: {
    flex: 1,
    backgroundColor: '#F2C94C',
    alignItems: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  buttonTextPrimary: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonSecondary: {
    flex: 1,
    backgroundColor: '#404040',
    alignItems: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  buttonTextSecondary: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
});