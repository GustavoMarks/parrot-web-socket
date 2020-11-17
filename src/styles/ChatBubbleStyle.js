import { StyleSheet } from 'react-native';

const ChatBubbleStyle = StyleSheet.create({

  bubbleParrot: {
    backgroundColor: '#fff',
    padding: 15,
    maxWidth: '70%',
    width: 'auto',
    borderRadius: 18,
    marginLeft: 70,
    elevation: 4,
  },
  bubbleUser: {
    backgroundColor: '#dcdcdc',
    padding: 15,
    maxWidth: '70%',
    width: 'auto',
    borderRadius: 18,
    alignSelf: 'flex-end',
    marginRight: 10,
    elevation: 4
  },
  bubbleText: {
    fontFamily: 'Nunito_600SemiBold'
  },

  bubbleTime: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#b3b3b3',
    fontSize: 10,
    marginTop: 4,
  },

  leftArrow: {
    position: "absolute",
    marginLeft: -8,
    marginTop: 10,
  },

});

export default ChatBubbleStyle;