import { StyleSheet } from 'react-native';

const ParrotChatStyle = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'space-between'
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
  },
  inputArea: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#00c272',
    minHeight: 70,
    alignItems: 'center',
    justifyContent: "space-around",
    padding: 20,
  },
  submitButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'yellow',
    alignItems: "center",
    justifyContent: 'center',
    borderColor: '#222222',
    borderWidth: 2
  },
  submitInput: {
    height: 40,
    width: '90%',
    marginRight: 5,
    borderRadius: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderColor: '#222222',
    borderWidth: 2,
    fontFamily: 'Nunito_600SemiBold'
  }
});

export default ParrotChatStyle;