import { StyleSheet } from 'react-native';

const ChatHistoryStyle = StyleSheet.create({
  chatContainer: {
    padding: 10,
    height: '100%',
    backgroundColor: '#9accff'
  },
  suggestionTextField: {
    backgroundColor: '#b3b3b3',
    height: 50,
    width: 200,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center'
  },

  suggestionText: {
    color: '#fff',
    fontFamily: 'Nunito_600SemiBold'
  }

});

export default ChatHistoryStyle;