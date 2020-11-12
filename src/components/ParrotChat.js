import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import EchoSocket from '../services/EchoSocket';

import styles from '../styles/ParrotChatStyle';

export default function ParrotChat() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);                                      // chat será uma lista de objetos: { text, time, sent(?) }
  const [openSocket, setOpenSocket] = useState(false);

  const echoSocket = new EchoSocket();
  echoSocket.addOpener(function () { setOpenSocket(true) });
  echoSocket.addCloser(function () { setOpenSocket(false) });
  echoSocket.addMessager(handleSocketResponse);
  echoSocket.addError(handleSocketError);

  function handleSubmitChat() {
    if (message && openSocket) {
      const newChat = chat.concat([{ text: message, sent: true, time: new Date() }]);
      setChat(newChat);
      echoSocket.submit(message);
      
    }

    if (!openSocket) alert("Aguarde um momento...");
  }

  function handleSocketResponse(event) {
    const newChatResponse = chat.concat([{ text: event.data, sent: false, time: new Date() }]);
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
