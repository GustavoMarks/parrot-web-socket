import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);                                      // chat será uma lista de objetos: { text, time, sent(?) }
  const [openSocket, setOpenSocket] = useState(false);

  const webSocket = new WebSocket("wss://echo.websocket.org/");
  webSocket.onerror = (event) => handleSocketError(event);
  webSocket.onmessage = (event) => handleSocketResponse(event);
  webSocket.onopen = function(){ setOpenSocket(true) };
  webSocket.onclose = function(){ setOpenSocket(false) };

  function handleSubmitChat() {
    if (message && openSocket) {
      const newChat = chat.concat([{ text: message, sent: true, time: new Date() }]);
      setChat(newChat);
      console.log(chat[0])
      try {
        webSocket.send(message);

      } catch (error) {
        alert("Error inesperado... tente novamente mais tarde!");
        console.log(error);

      }
    }

    if(!openSocket) alert("Aguarde um momento...");
  }

  function handleSocketResponse(event) {
    const newChatResponse = chat.concat([{ text: event.data, sent: false, time: new Date() }]);
    console.log(chat[0])
    setChat(newChatResponse);
  }

  function handleSocketError(event) {
    const newChatError = chat.concat([{
      text: `Desculpe, tente novamente mais tarde... (ERROR: ${event.data})`,
      sent: false,
      time: new Date()
    }]);
    setChat(newChatError);

  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View>
        {
          chat.length === 0 ? (
            <Text> Diga Olá </Text>
          ) : (
              chat.map(chatMessage => {
                return (
                  <Text key={String(chatMessage.time)}>
                    { chatMessage.sent === true ? 'VOCÊ: ' : 'PAPAGAIO: '} { chatMessage.text}
                  </Text>
                )
              })
            )
        }
      </View>

      <View>
        <TextInput
          value={message}
          onChangeText={text => setMessage(text)}
        />

        <TouchableOpacity onPress={handleSubmitChat} >
          <Text>Enviar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
