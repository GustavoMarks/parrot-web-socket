import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';

import ChatHistory from "./ChatHistory";
import { Feather } from "@expo/vector-icons";
import background from '../Images/background.png';

import EchoSocket from '../services/EchoSocket';

import styles from '../styles/ParrotChatStyle';

export default function ParrotChat() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);                                      // chat será uma lista de objetos com o tempo e mensagem
  const [openSocket, setOpenSocket] = useState(false);

  const echoSocket = new EchoSocket();
  echoSocket.addOpener(function () { setOpenSocket(true) });
  echoSocket.addCloser(function () { setOpenSocket(false) });
  echoSocket.addMessager(handleSocketResponse);
  echoSocket.addError(handleSocketError);

  function handleSubmitChat() {
    if (message && openSocket) {
      echoSocket.submit(message);
      setMessage('');
    }

    if (!openSocket) alert("Aguarde um momento...");
  }

  function handleSocketResponse(event) {
    const newChatResponse = chat.concat([{ time: new Date(), userMessage: event.data }, { time: new Date(), parrotMessage: event.data }]);
    setChat(newChatResponse);
  }

  function handleSocketError(event) {
    const newChatError = chat.concat([{
      time: new Date(),
      parrotMessage: `Desculpe, tente novamente mais tarde... (ERROR: ${event.data})`
    }]);
    setChat(newChatError);

  }

  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMethod="resize" resizeMode="repeat" style={styles.background}>

      <StatusBar backgroundColor='#00c272' />
      <View style={styles.header} >
        <Text style={styles.headerText} > Parrot Web Socket </Text>
      </View>
      

        <ChatHistory chat={chat}/>


        <View style={styles.inputArea}>
          <TextInput
            value={message}
            onChangeText={text => setMessage(text)}
            style={styles.submitInput}
            placeholder="Escrever..."
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmitChat} >
            <Feather
              name="chevron-right"
              size={20}
              color="#222222" />
          </TouchableOpacity>
        </View>
      </ImageBackground>

    </View>
  );
}
