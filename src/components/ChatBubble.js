import React from 'react';
import { View, Text} from 'react-native';

import { Octicons } from '@expo/vector-icons'; 

import styles from "../styles/ChatBubbleStyle";


export default function ChatBubble({ message, sent, time }){
  return(
    <View style={ sent ? styles.bubbleUser : styles.bubbleParrot } >
      <Text style={ styles.bubbleText } >{ message } </Text>
      <Text style={styles.bubbleTime}>
        { new Date(time).toTimeString().substr(0,5) }
      </Text>
      {
        !sent ?
        <View style={styles.leftArrow} >
          <Octicons name="triangle-left" size={24} color="#fff" />
        </View> : null
      }
      
    </View>
  )
}