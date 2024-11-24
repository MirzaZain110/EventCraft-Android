// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

// // Sample data for chat messages
// const initialMessages = [
//   { id: '1', text: 'Hello! How are you?' },
//   { id: '2', text: 'I am good, thanks for asking!' },
//   { id: '3', text: 'What about you?' },
// ];

// const Chat = () => {
//   const [messages, setMessages] = useState(initialMessages);
//   const [message, setMessage] = useState('');

//   const handleSend = () => {
//     if (message.trim()) {
//       const newMessage = {
//         id: (messages.length + 1).toString(),
//         text: message.trim(),
//       };
//       setMessages([...messages, newMessage]);
//       setMessage('');
//     }
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.messageContainer}>
//       <Text style={styles.messageText}>{item.text}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={messages}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.messageList}
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           value={message}
//           onChangeText={setMessage}
//           placeholder="Type a message"
//         />
//         <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'F9F3EC',
//     padding: 10,
//     paddingBottom: 70,
//   },
//   messageList: {
//     flexGrow: 1,
//     justifyContent: 'flex-end',
//   },
//   messageContainer: {
//     marginVertical: 5,
//     padding: 10,
//     backgroundColor: '#e1e1e1',
//     borderRadius: 10,
//   },
//   messageText: {
//     fontSize: 16,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//     paddingVertical: 10,
//   },
//   input: {
//     flex: 1,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 20,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginRight: 10,
//   },
//   sendButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 20,
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default Chat;

import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Icon library
import moment from 'moment'; // For formatting time

// Sample data for chat messages
const initialMessages = [
  { id: '1', text: 'Hello! How are you?', type: 'received', name: 'Vendor', time: '09:15 AM' },
  { id: '2', text: 'I am good, thanks for asking!', type: 'sent', name: 'You', time: '09:16 AM' },
  { id: '3', text: 'What about you?', type: 'received', name: 'Vendor', time: '09:17 AM' },
];

const Chat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState('');
  const flatListRef = useRef(null); // Ref for the FlatList

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = {
        id: (messages.length + 1).toString(),
        text: message.trim(),
        type: 'sent',
        name: 'You',
        time: moment().format('hh:mm A'), // Current time
      };
      setMessages([...messages, newMessage]);
      setMessage('');

      // Scroll to the bottom after sending the message
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.type === 'sent' ? styles.sentMessage : styles.receivedMessage,
      ]}
    >
      <Text style={styles.senderName}>{item.name}</Text>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.messageTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      

      {/* Messages List */}
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
        onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })} // Scroll to end when content size changes
      />

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message"
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <MaterialCommunityIcons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F3EC',
    paddingBottom: 58
  
  },
  header: {
    padding: 15,
    backgroundColor: '#007bff',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  messageList: {
    flexGrow: 1,
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
  },
  messageContainer: {
    maxWidth: '70%',
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  sentMessage: {
    backgroundColor: '#6A4E36',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0,
  },
  receivedMessage: {
    backgroundColor: '#e1e1e1',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  senderName: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  messageTime: {
    fontSize: 10,
    color: '#888',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 10,
  },
  input: {
    flex: 1,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 50,
  },
});

export default Chat;
