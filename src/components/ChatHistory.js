import React from 'react';
import { ScrollView, View, Text} from 'react-native';

import ChatBubble from './ChatBubble';

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
        
      {
        chat.length === 0 ? (
          <View style={styles.suggestionTextField} >
            <Text style={styles.suggestionText} > Mande um olá! </Text>
          </View>
          ) : (
              chat.map((chatMessage, index) => {
                return (
                <ChatBubble
                  index={index}
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