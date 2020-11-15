import { StyleSheet } from 'react-native';

const ParrotChatStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  header: {
    backgroundColor: '#00c272',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 70,
  },
  headerText: {
    color: '#fff',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 20,
  }
});

export default ParrotChatStyle;