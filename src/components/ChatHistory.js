import React from 'react';
import { ScrollView, View, Text, Image} from 'react-native';

import ChatBubble from './ChatBubble';
import parrot from "../Images/parrot.png"

import styles from "../styles/ChatHistoryStyle";

export default function ChatHistory({ chat }){
  return(
    <ScrollView 
      style={styles.chatContainer}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
      }} >

      <Image style={styles.parrot} source={parrot}/>

      {
        chat.length === 0 ? (
          <View style={styles.suggestionTextField} >
            <Text style={styles.suggestionText} > Mande um olá! </Text>
          </View>
          ) : (
              chat.map((chatMessage, index) => {
                return (
                <ChatBubble
                  key={index}
                  message={chatMessage.message} 
                  sent={chatMessage.sent}
                  time={chatMessage.time} />
                )
              })
            )
        }
    </ScrollView>
  )
}