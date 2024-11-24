// import React from 'react';
// import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { Icon } from 'react-native-elements';

// const eventData = [
//   {
//     id: '1',
//     title: 'Convention Center A',
//     rating: 4.8,
//     image: require('../../Images/Item/item1.jpg'), // Using local image
//     duration: '20-35 min',
//     price: 'Rs. 99.00',
//   },
//   {
//     id: '2',
//     title: 'Convention Center B',
//     rating: 4.8,
//     image: require('../../Images/Item/item2.jpg'), // Using local image
//     duration: '35-55 min',
//     price: 'Rs. 99.00',
//   },
//   {
//     id: '3',
//     title: 'Convention Center C',
//     rating: 4.8,
//     image: require('../../Images/Item/item3.jpg'), // Using local image
//     duration: '35-55 min',
//     price: 'Rs. 99.00',
//   },
//   {
//     id: '4',
//     title: 'Convention Center B',
//     rating: 4.8,
//     image: require('../../Images/Item/item4.jpg'), // Using local image
//     duration: '35-55 min',
//     price: 'Rs. 99.00',
//   },
//   // Add more events as needed
// ];

// const EventCard = ({ item }) => (
//   <View style={styles.card}>
//     <Image source={item.image} style={styles.image} />
//     <View style={styles.infoContainer}>
//       <Text style={styles.title}>{item.title}</Text>
//       <View style={styles.ratingContainer}>
//         <Icon name="star" size={16} color="orange" />
//         <Text style={styles.ratingText}>{item.rating}</Text>
//       </View>
//       <Text style={styles.duration}>{item.duration}</Text>
//       <Text style={styles.price}>{item.price}</Text>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>View Details</Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// );

// export default function ConventionCenterList() {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={eventData}
//         renderItem={({ item }) => <EventCard item={item} />}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   card: {
//     backgroundColor: '#f8f8f8',
//     borderRadius: 10,
//     marginVertical: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     shadowOffset: { height: 2, width: 0 },
//   },
//   image: {
//     width: '100%',
//     height: 150,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   infoContainer: {
//     padding: 10,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 5,
//   },
//   ratingText: {
//     marginLeft: 5,
//     color: '#777',
//   },
//   duration: {
//     color: '#777',
//     marginTop: 5,
//   },
//   price: {
//     fontWeight: 'bold',
//     marginTop: 5,
//   },
//   button: {
//     backgroundColor: '#ff5a60',
//     padding: 10,
//     marginTop: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// import React, { useState } from 'react';
// import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput,Animated } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Picker } from '@react-native-picker/picker';

// const eventData = [
//   {
//     id: '1',
//     title: 'Convention Center A',
//     rating: 4.8,
//     image: require('../../Images/Item/item1.jpg'),
//     duration: '20-35 min',
//     price: 'Rs. 99.00',
//   },
//   {
//     id: '2',
//     title: 'Convention Center B',
//     rating: 4.8,
//     image: require('../../Images/Item/item2.jpg'),
//     duration: '35-55 min',
//     price: 'Rs. 99.00',
//   },
//   {
//     id: '3',
//     title: 'Convention Center C',
//     rating: 4.8,
//     image: require('../../Images/Item/item3.jpg'),
//     duration: '35-55 min',
//     price: 'Rs. 99.00',
//   },
//   {
//     id: '4',
//     title: 'Convention Center D',
//     rating: 4.8,
//     image: require('../../Images/Item/item4.jpg'),
//     duration: '35-55 min',
//     price: 'Rs. 99.00',
//   },
//   // Add more events as needed
// ];

// const EventCard = ({ item, onPress, onAddToCart }) => (
//   <View style={styles.card}>
//     <Image source={item.image} style={styles.image} />
//     <View style={styles.infoContainer}>
//       <Text style={styles.title}>{item.title}</Text>
//       <View style={styles.ratingContainer}>
//         <MaterialCommunityIcons name="star" size={16} color="orange" />
//         <Text style={styles.ratingText}>{item.rating}</Text>
//       </View>
//       <Text style={styles.duration}>{item.duration}</Text>
//       <Text style={styles.price}>{item.price}</Text>
//       <TouchableOpacity style={styles.button} onPress={() => onAddToCart(item)}>
//         <MaterialCommunityIcons name="cart-plus" size={20} color="white" />
//       </TouchableOpacity>
//     </View>
//   </View>
// );
// export default function Item1() {
//     const [modalVisible, setModalVisible] = useState(false);
//     const [purchaseSuccess, setPurchaseSuccess] = useState(false);
//     const [animationValue] = useState(new Animated.Value(0));
//     const [selectedEventPrice, setSelectedEventPrice] = useState(0);
//     const navigation = useNavigation();
  
//     const handlePurchase = () => {
//       // Trigger animation for the success message
//       Animated.spring(animationValue, {
//         toValue: 1,
//         friction: 5,
//         tension: 100,
//         useNativeDriver: true,
//       }).start(() => {
//         // Update the budget in Home.js
//         const updatedBudget = currentBudget - selectedEventPrice; // Adjust according to your logic
//         navigation.navigate('Home', { updatedBudget });
  
//         setPurchaseSuccess(false);
//         setModalVisible(false);
//       });
  
//       setPurchaseSuccess(true);
//     };
  
//     return (
//       <View style={styles.container}>
//         {/* Navigation Bar */}
//         <View style={styles.navBar}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
//           </TouchableOpacity>
//           <Text style={styles.navTitle}>Item1 Title</Text>
//         </View>
  
//         <FlatList
//           data={eventData}
//           renderItem={({ item }) => <EventCard item={item} onAddToCart={() => {
//             setSelectedEventPrice(parseFloat(item.price.replace('Rs. ', '')));
//             setModalVisible(true);
//           }} />}
//           keyExtractor={(item) => item.id}
//         />
  
//         {/* Modal for adding events */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
//                 <Text style={styles.closeButtonText}>✖</Text>
//               </TouchableOpacity>
  
//               <Text style={styles.label}>Enter Event Name:</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter Name of Event"
//               />
  
//               <Text style={styles.label}>Enter Event Budget:</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter Budget of Event"
//                 keyboardType="numeric"
//               />
  
//               <Text style={styles.label}>Enter username:</Text>
//               <View style={styles.row}>
//                 <TextInput
//                   style={[styles.input, { flex: 1 }]}
//                   placeholder="Enter username"
//                 />
//                 <Picker
//                   selectedValue={userRole}
//                   style={styles.picker}
//                   onValueChange={(itemValue) => setUserRole(itemValue)}
//                 >
//                   <Picker.Item label="Viewer" value="Viewer" />
//                   <Picker.Item label="Editor" value="Editor" />
//                 </Picker>
//                 <TouchableOpacity style={styles.addButton}>
//                   <Text style={styles.addButtonText}>+</Text>
//                 </TouchableOpacity>
//               </View>
  
//               <Text style={styles.label}>Add Vendors:</Text>
//               <View style={styles.row}>
//                 <Picker
//                   selectedValue={vendor}
//                   style={styles.picker}
//                   onValueChange={(itemValue) => setVendor(itemValue)}
//                 >
//                   <Picker.Item label="Liberty Hall" value="Liberty Hall" />
//                   <Picker.Item label="Sunset Gardens" value="Sunset Gardens" />
//                 </Picker>
//                 <Picker
//                   selectedValue={vendorType}
//                   style={styles.picker}
//                   onValueChange={(itemValue) => setVendorType(itemValue)}
//                 >
//                   <Picker.Item label="Hall" value="Hall" />
//                   <Picker.Item label="Catering" value="Catering" />
//                 </Picker>
//                 <TouchableOpacity style={styles.addButton}>
//                   <Text style={styles.addButtonText}>+</Text>
//                 </TouchableOpacity>
//               </View>
  
//               <TouchableOpacity style={styles.addButton}>
//                 <Text style={styles.addPictureText}>Add Picture +</Text>
//               </TouchableOpacity>
  
//               <TouchableOpacity style={styles.createButton} onPress={handlePurchase}>
//                 <Text style={styles.createButtonText}>Purchase</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
  
//         {purchaseSuccess && (
//           <Animated.View style={[styles.successMessage, { opacity: animationValue }]}>
//             <Text style={styles.successText}>Purchase Successful!</Text>
//           </Animated.View>
//         )}
//       </View>
//     );
//   }
  

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   navBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#6A4E36',
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     elevation: 3,
//     position: 'relative',
//   },
//   backButton: {
//     padding: 10,
//   },
//   navTitle: {
//     flex: 1,
//     textAlign: 'center',
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginRight: 43,
//   },
//   card: {
//     backgroundColor: '#f8f8f8',
//     borderRadius: 10,
//     marginVertical: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     shadowOffset: { height: 2, width: 0 },
//   },
//   image: {
//     width: '100%',
//     height: 150,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   infoContainer: {
//     padding: 10,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 5,
//   },
//   ratingText: {
//     marginLeft: 5,
//     color: '#777',
//   },
//   duration: {
//     color: '#777',
//     marginTop: 5,
//   },
//   price: {
//     fontWeight: 'bold',
//     marginTop: 5,
//   },
//   button: {
//     position: 'absolute',
//     bottom: 30,
//     left: '50%',
//     transform: [{ translateX: -30 }],
//     backgroundColor: '#6A4E36',
//     borderRadius: 50,
//     padding: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginLeft: 140,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalView: {
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//     width: '90%',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//   },
//   closeButtonText: {
//     fontSize: 20,
//     color: 'red',
//   },
//   label: {
//     alignSelf: 'flex-start',
//     marginBottom: 5,
//     fontSize: 16,
//     color: '#333',
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#F0F0F0',
//     marginBottom: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//   },
//   picker: {
//     height: 50,
//     flex: 1,
//     marginLeft: 10,
//   },
//   addButton: {
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//     padding: 10,
//     marginLeft: 10,
//   },
//   addButtonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   addPictureText: {
//     fontSize: 16,
//     color: '#007BFF',
//     marginVertical: 20,
//   },
//   createButton: {
//     backgroundColor: '#00C851',
//     borderRadius: 5,
//     padding: 15,
//     width: '100%',
//     alignItems: 'center',
//   },
//   createButtonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   successContainer: {
//     position: 'absolute',
//     top: '20%',
//     left: '10%',
//     right: '10%',
//     padding: 20,
//     backgroundColor: '#4CAF50', // Green background for success
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 10, // Shadow for Android
//     shadowColor: '#000', // Shadow for iOS
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     zIndex: 1000, // Make sure it appears above other elements
//   },
//   successMessage: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   successButton: {
//     marginTop: 15,
//     padding: 10,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     elevation: 3,
//   },
//   successButtonText: {
//     color: '#4CAF50',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

import React, { useState } from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const eventData = [
  {
    id: '1',
    title: 'Convention Center A',
    rating: 4.8,
    image: require('../../Images/Item/item1.jpg'),
    duration: '20-35 min',
    price: 'Rs. 99.00',
  },
  {
    id: '2',
    title: 'Convention Center B',
    rating: 4.8,
    image: require('../../Images/Item/item2.jpg'),
    duration: '35-55 min',
    price: 'Rs. 99.00',
  },
  {
    id: '3',
    title: 'Convention Center C',
    rating: 4.8,
    image: require('../../Images/Item/item3.jpg'),
    duration: '35-55 min',
    price: 'Rs. 99.00',
  },
  {
    id: '4',
    title: 'Convention Center D',
    rating: 4.8,
    image: require('../../Images/Item/item4.jpg'),
    duration: '35-55 min',
    price: 'Rs. 99.00',
  },
  // Add more events as needed
];

const EventCard = ({ item, onAddToCart }) => (
  <View style={styles.card}>
    <Image source={item.image} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.ratingContainer}>
        <MaterialCommunityIcons name="star" size={16} color="orange" />
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>
      <Text style={styles.duration}>{item.duration}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onAddToCart(item)}>
        <MaterialCommunityIcons name="cart-plus" size={20} color="white" />
      </TouchableOpacity>
    </View>
  </View>
);

export default function Item1() {
  const [modalVisible, setModalVisible] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [animationValue] = useState(new Animated.Value(0));
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [inputName, setInputName] = useState('');
  const [inputBudget, setInputBudget] = useState('');
  const [userRole, setUserRole] = useState('Viewer');
  const [vendor, setVendor] = useState('Liberty Hall');
  const [vendorType, setVendorType] = useState('Hall');
  
  const navigation = useNavigation();
  
  const handleAddToCart = (event) => {
    setSelectedEvent(event);
    setInputName(event.title);
    setInputBudget(event.price.replace('Rs. ', ''));
    setModalVisible(true);
  };

  const handlePurchase = () => {
    Animated.spring(animationValue, {
      toValue: 1,
      friction: 5,
      tension: 100,
      useNativeDriver: true,
    }).start(() => {
      const updatedBudget = parseFloat(inputBudget) - parseFloat(selectedEvent.price.replace('Rs. ', ''));
      navigation.navigate('Home', { updatedBudget });

      setPurchaseSuccess(false);
      setModalVisible(false);
    });

    setPurchaseSuccess(true);
  };
  
  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Convection Centers</Text>
      </View>

      <FlatList
        data={eventData}
        renderItem={({ item }) => (
          <EventCard 
            item={item} 
            onAddToCart={() => handleAddToCart(item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Modal for adding events */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>✖</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Venue Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Name of Convection Center"
              value={inputName}
              onChangeText={setInputName}
            />

            <Text style={styles.label}>Venue Budget</Text>
            <TextInput
              style={styles.input}
              placeholder="Budget of Venue"
              keyboardType="numeric"
              value={inputBudget}
              onChangeText={setInputBudget}
            />

            <Text style={styles.label}>Enter Username:</Text>
            <View style={styles.row}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="Enter Username"
              />
              <Picker
                selectedValue={userRole}
                style={styles.picker}
                onValueChange={(itemValue) => setUserRole(itemValue)}
              >
                <Picker.Item label="Viewer" value="Viewer" />
                <Picker.Item label="Editor" value="Editor" />
              </Picker>
            </View>

            <Text style={styles.label}>Add Vendors:</Text>
            <View style={styles.row}>
              <Picker
                selectedValue={vendor}
                style={styles.picker}
                onValueChange={(itemValue) => setVendor(itemValue)}
              >
                <Picker.Item label="Liberty Hall" value="Liberty Hall" />
                <Picker.Item label="Sunset Gardens" value="Sunset Gardens" />
              </Picker>
              <Picker
                selectedValue={vendorType}
                style={styles.picker}
                onValueChange={(itemValue) => setVendorType(itemValue)}
              >
                <Picker.Item label="Hall" value="Hall" />
                <Picker.Item label="Catering" value="Catering" />
              </Picker>
            </View>

          

            <TouchableOpacity style={styles.createButton} onPress={handlePurchase}>
              <Text style={styles.createButtonText}>Purchase</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {purchaseSuccess && (
        <Animated.View style={[styles.successContainer, { opacity: animationValue }]}>
          <Text style={styles.successMessage}>Purchase Successful!</Text>
          <TouchableOpacity style={styles.successButton} onPress={() => setPurchaseSuccess(false)}>
            <Text style={styles.successButtonText}>OK</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6A4E36',
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 3,
    position: 'relative',
  },
  backButton: {
    padding: 10,
  },
  navTitle: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 43,
  },
  card: {
    backgroundColor: '#F9F3EC',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { height: 2, width: 0 },
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    marginLeft: 5,
    color: '#777',
  },
  duration: {
    color: '#777',
    marginTop: 5,
  },
  price: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    left: '50%',
    transform: [{ translateX: -30 }],
    backgroundColor: '#6A4E36',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 140,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 20,
    color: 'red',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 16,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#F0F0F0',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  picker: {
    height: 50,
    flex: 1,
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
  addPictureText: {
    fontSize: 16,
    color: '#007BFF',
    marginVertical: 20,
  },
  createButton: {
    backgroundColor: '#00C851',
    borderRadius: 5,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  createButtonText: {
    color: 'white',
    fontSize: 18,
  },
  successContainer: {
    position: 'absolute',
    top: '20%',
    left: '10%',
    right: '10%',
    padding: 20,
    backgroundColor: '#4CAF50', // Green background for success
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    zIndex: 1000, // Make sure it appears above other elements
  },
  successMessage: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  successButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
  },
  successButtonText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

