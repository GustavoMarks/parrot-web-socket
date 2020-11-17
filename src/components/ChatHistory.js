import React from 'react';
import { ScrollView, View, Text} from 'react-native';

import styles from "../styles/ChatHistoryStyle";

export default function ChatHistory({ chat }){
  return(
    <ScrollView 
      style={styles.chatContainer}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'flex-end'
      }} >
        
      {
        chat.length === 0 ? (
          <View style={styles.suggestionTextField} >
            <Text style={styles.suggestionText} > Mande um olá! </Text>
          </View>
          ) : (
              chat.map((chatMessage, index) => {
                return (
                  <Text key={index}>
                    { chatMessage.parrotMessage ? `PAPAGAIO: ${chatMessage.parrotMessage}` : `VOCÊ: ${chatMessage.userMessage}`}
                  </Text>
                )
              })
            )
        }
    </ScrollView>
  )
}