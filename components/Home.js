// import React, {useState} from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView, Modal, Pressable, TextInput, historyVisible,  FlatList, history } from 'react-native';

// import { FontAwesome } from '@expo/vector-icons';  // For the bottom icons
// import { BlurView } from 'expo-blur'; // For blur effect

// export default function HomeScreen({ navigation }) {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [historyVisible, setHistoryVisible] = useState(false);
//   const [budget, setBudget] = useState(0);
//   const [inputValue, setInputValue] = useState('');
//   const [history, setHistory] = useState([]);

//   const handleAddBudget = () => {
//     const newBudget = parseInt(inputValue, 10);
//     if (!isNaN(newBudget) && newBudget > 0) {
//       const date = new Date().toLocaleDateString();
//       setBudget(budget + newBudget);
//       setHistory([{ amount: newBudget, date }, ...history]);
//       setInputValue('');  // Clear the input after updating
//       setModalVisible(false);
//     } else {
//       alert('Please enter a valid amount');
//     }
//   };
//   const formatNumber = (number) => {
//     return new Intl.NumberFormat().format(number);
//   };

//   const renderHistoryItem = ({ item }) => (
//     <View style={styles.historyItem}>
//       <Text style={styles.historyText}>+{item.amount}</Text>
//       <Text style={styles.historyDate}>{item.date}</Text>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Top section */}
//       <View style={styles.header}>
//         <Text style={styles.greeting}>Hello, Zain</Text>
//         <Text style={styles.welcome}>Welcome to Event Craft!</Text>
        
//       </View>

//       {/* Middle Section */}
//       <View style={styles.cardContainer}>
//         <View style={styles.beansSection}>
//           <Text style={styles.beansText}>Current Balance</Text>
//           <Text style={styles.beansValue}>{formatNumber(budget)}</Text>
//           <View style={styles.beansActions}>
//             <TouchableOpacity style={styles.beansButton} onPress={() => setModalVisible(true)}> 
//               <Text style={styles.beanText}>Add Budget</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.beansButton} onPress={() => setHistoryVisible(true)}>
//               <Text style={styles.beanText}>Budget History</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//  {/* Modal Popup */}
//  <Modal
//         transparent={true}
//         animationType="slide"
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <Pressable style={styles.modalBackground} onPress={() => setModalVisible(false)}>
//           <View style={styles.modalContainer} onStartShouldSetResponder={() => true}>
//             <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
//               <Text style={styles.closeButtonText}>×</Text>
//             </TouchableOpacity>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter amount"
//               keyboardType="numeric"
//               value={inputValue}
//               onChangeText={setInputValue}
//             />
//             <TouchableOpacity style={styles.updateButton} onPress={handleAddBudget}>
//               <Text style={styles.updateButtonText}>Update</Text>
//             </TouchableOpacity>
//           </View>
//         </Pressable>
//       </Modal>

//       {/* Budget History Modal */}
//       <Modal
//         transparent={true}
//         animationType="slide"
//         visible={historyVisible}
//         onRequestClose={() => setHistoryVisible(false)}
//       >
//         <Pressable style={styles.modalBackground} onPress={() => setHistoryVisible(false)}>
//           <View style={styles.modalContainer}>
//             <TouchableOpacity style={styles.closeButton} onPress={() => setHistoryVisible(false)}>
//               <Text style={styles.closeButtonText}>×</Text>
//             </TouchableOpacity>
//             <Text style={styles.historyTitle}>Budget History</Text>
//             <FlatList
//               data={history}
//               renderItem={renderHistoryItem}
//               keyExtractor={(item, index) => index.toString()}
//             />
//           </View>
//         </Pressable>
//       </Modal>


//         {/* Buttons section */}
//         <View style={styles.menuContainer}>
//           {/* Large container */}
//           <ImageBackground
//             source={require('../Images/wedding.jpg')}
//             style={styles.largeContainerBackground}
//           >
//             <BlurView intensity={50} style={styles.blurContainer}>
//               <TouchableOpacity style={styles.menuItem}>
//                 <Text style={styles.menuText}>Special Offers</Text>
//               </TouchableOpacity>
//             </BlurView>
//           </ImageBackground>

//           {/* Small container */}
//           <ImageBackground
//             source={require('../Images/Earthy Minimalist Fashion New Event Book Now Animated Instagram Story.png')}
//             style={styles.smallContainerBackground}
//             imageStyle={styles.imageBackground}
//           >
//             <BlurView intensity={50} style={styles.blurContainer}>
//               <TouchableOpacity style={styles.menuItem}>
//                 <Text style={styles.smallcontainermenuText}>Plan Now!</Text>
//               </TouchableOpacity>
//             </BlurView>
//           </ImageBackground>

//           {/* Small container */}
//           <ImageBackground
//       source={require('../Images/Orange White Minimalist Simple Year End Big Sale Instagram Post.png')}
//       style={styles.smallContainerBackground}
//       imageStyle={styles.imageBackground}
//     >
//       <BlurView intensity={50} style={styles.blurContainer}>
//         <TouchableOpacity
//           style={styles.menuItem}
//           onPress={() => navigation.navigate('Services')} // Navigate to services.js
//         >
//           <Text style={styles.smallcontainermenuText}>Special Services</Text>
//         </TouchableOpacity>
//       </BlurView>
//     </ImageBackground>

//           {/* Large container */}
//           <ImageBackground
//             source={require('../Images/Brown White Simple International Day Of Friendship Instagram Post.png')}
//             style={styles.largeContainerBackground}
            
//           >
//             <BlurView intensity={50} style={styles.blurContainer}>
//             <TouchableOpacity
//         style={styles.menuItem}
//         onPress={() => navigation.navigate('Team')}
//       >
//         <Text style={styles.menuText}>Our Team</Text>
//       </TouchableOpacity>
//             </BlurView>
//           </ImageBackground>
//         </View>
//       </View>

//       {/* Bottom social icons */}
//       <View style={styles.socialIcons}>
//         <FontAwesome name="facebook" size={24} color="blue" />
//         <FontAwesome name="instagram" size={24} color="#E1306C" />
//         <FontAwesome name="twitter" size={24} color="#1DA1F2" />
//         <FontAwesome name="whatsapp" size={24} color="#25D366" />
//         <FontAwesome name="youtube" size={24} color="red" />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9F3EC',
//     padding: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   greeting: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   welcome: {
//     fontSize: 16,
//     color: '#6A4E36',
//     marginRight: 45,
//   },
//   profilePic: {
//     width: 50,
//     height: 50,
//     borderRadius: 30,
//   },
//   cardContainer: {
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     padding: 8,
//     elevation: 3,
//   },
//   beansSection: {
//     marginBottom: 20,
//   },
//   beansText: {
//     fontSize: 16,
//     color: '#6A4E36',
//   },
//   beansValue: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#6A4E36',
//   },
//   beansActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,

//   },
//   beansButton: {
//     backgroundColor: '#FEDC56',
//     padding: 12,
//     borderRadius: 5,
    
//   },
//   menuContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   largeContainerBackground: {
//     width: '100%',
//     height: 120, // Adjust the height as needed
//     marginBottom: 10,
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   smallContainerBackground: {
//     width: '48%', // Small containers take up half of the row's width
//     height: 150,
//     marginBottom: 10,
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   blurContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   menuItem: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   menuText: {
//     color: '#6A4E36',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   beanText: {
//     fontWeight: 'bold',
//   },
//   smallcontainermenuText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   socialIcons: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20,
//   },
//   imageBackground: {
//     resizeMode: 'cover',
//     width: '100',
//      // Or use 'contain', 'stretch', etc., based on your needs
//   },
//   modalBackground: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContainer: {
//     width: 300,
//     padding: 20,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//   },
//   closeButtonText: {
//     fontSize: 24,
//     color: '#000',
//   },
//   input: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#000',
//     width: '100%',
//     padding: 10,
//     fontSize: 18,
//   },
//   updateButton: {
//     marginTop: 10,
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     backgroundColor: '#28a745',
//     borderRadius: 5,
//     elevation: 3,  // Adds shadow for Android
//     shadowColor: '#000', // Adds shadow for iOS
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//   },
//   updateButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   historyTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   historyItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   historyText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   historyDate: {
//     fontSize: 14,
//     color: '#888',
//   },
// });


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView, Modal, Pressable, TextInput, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

export default function HomeScreen({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [historyVisible, setHistoryVisible] = useState(false);
  const [budget, setBudget] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState([]);

  // Handle receiving updated budget from navigation
  useEffect(() => {
    if (route.params?.updatedBudget) {
      setBudget(route.params.updatedBudget);
    }
  }, [route.params?.updatedBudget]);

  const handleAddBudget = () => {
    const newBudget = parseInt(inputValue, 10);
    if (!isNaN(newBudget) && newBudget > 0) {
      const date = new Date().toLocaleDateString();
      setBudget(budget + newBudget);
      setHistory([{ amount: newBudget, date }, ...history]);
      setInputValue('');  // Clear the input after updating
      setModalVisible(false);
    } else {
      alert('Please enter a valid amount');
    }
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  const renderHistoryItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Text style={styles.historyText}>+{item.amount}</Text>
      <Text style={styles.historyDate}>{item.date}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Top section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Ali</Text>
        <Text style={styles.welcome}>Welcome to Event Craft!</Text>
      </View>

      {/* Middle Section */}
      <View style={styles.cardContainer}>
        <View style={styles.beansSection}>
          <Text style={styles.beansText}>Current Balance</Text>
          <Text style={styles.beansValue}>{formatNumber(budget)}</Text>
          <View style={styles.beansActions}>
            <TouchableOpacity style={styles.beansButton} onPress={() => setModalVisible(true)}> 
              <Text style={styles.beanText}>Add Budget</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.beansButton} onPress={() => setHistoryVisible(true)}>
              <Text style={styles.beanText}>Budget History</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Modal Popup */}
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <Pressable style={styles.modalBackground} onPress={() => setModalVisible(false)}>
            <View style={styles.modalContainer} onStartShouldSetResponder={() => true}>
              <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                placeholder="Enter amount"
                keyboardType="numeric"
                value={inputValue}
                onChangeText={setInputValue}
              />
              <TouchableOpacity style={styles.updateButton} onPress={handleAddBudget}>
                <Text style={styles.updateButtonText}>Update</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Modal>

        {/* Budget History Modal */}
        <Modal
          transparent={true}
          animationType="slide"
          visible={historyVisible}
          onRequestClose={() => setHistoryVisible(false)}
        >
          <Pressable style={styles.modalBackground} onPress={() => setHistoryVisible(false)}>
            <View style={styles.modalContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={() => setHistoryVisible(false)}>
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
              <Text style={styles.historyTitle}>Budget History</Text>
              <FlatList
                data={history}
                renderItem={renderHistoryItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </Pressable>
        </Modal>

        {/* Buttons section */}
        <View style={styles.menuContainer}>
          {/* Large container */}
          <ImageBackground
            source={require('../Images/wedding.jpg')}
            style={styles.largeContainerBackground}
          >
            <BlurView intensity={50} style={styles.blurContainer}>
              <TouchableOpacity style={styles.menuItem}  onPress={() => navigation.navigate('Offers')}>
                <Text style={styles.menuText}>Special Offers</Text>
              </TouchableOpacity>
            </BlurView>
          </ImageBackground>

          {/* Small container */}
          <ImageBackground
            source={require('../Images/Earthy Minimalist Fashion New Event Book Now Animated Instagram Story.png')}
            style={styles.smallContainerBackground}
            imageStyle={styles.imageBackground}
          >
            <BlurView intensity={50} style={styles.blurContainer}>
              <TouchableOpacity style={styles.menuItem}  onPress={() => navigation.navigate('Plan')}>
                <Text style={styles.smallcontainermenuText}>Plan Now!</Text>
              </TouchableOpacity>
            </BlurView>
          </ImageBackground>

          {/* Small container */}
          <ImageBackground
            source={require('../Images/Orange White Minimalist Simple Year End Big Sale Instagram Post.png')}
            style={styles.smallContainerBackground}
            imageStyle={styles.imageBackground}
          >
            <BlurView intensity={50} style={styles.blurContainer}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate('Services')} // Navigate to services.js
              >
                <Text style={styles.smallcontainermenuText}>Special Services</Text>
              </TouchableOpacity>
            </BlurView>
          </ImageBackground>

          {/* Large container */}
          <ImageBackground
            source={require('../Images/Brown White Simple International Day Of Friendship Instagram Post.png')}
            style={styles.largeContainerBackground}
          >
            <BlurView intensity={50} style={styles.blurContainer}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate('Team')}
              >
                <Text style={styles.menuText}>Our Team</Text>
              </TouchableOpacity>
            </BlurView>
          </ImageBackground>
        </View>
      </View>

      {/* Bottom social icons */}
      <View style={styles.socialIcons}>
        <FontAwesome name="facebook" size={24} color="blue" />
        <FontAwesome name="instagram" size={24} color="#E1306C" />
        <FontAwesome name="twitter" size={24} color="#1DA1F2" />
        <FontAwesome name="whatsapp" size={24} color="#25D366" />
        <FontAwesome name="youtube" size={24} color="red" />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F3EC',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  welcome: {
    fontSize: 16,
    color: '#6A4E36',
    marginRight: 45,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  cardContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 8,
    elevation: 3,
  },
  beansSection: {
    marginBottom: 20,
  },
  beansText: {
    fontSize: 16,
    color: '#6A4E36',
  },
  beansValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6A4E36',
  },
  beansActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,

  },
  beansButton: {
    backgroundColor: '#FEDC56',
    padding: 12,
    borderRadius: 5,
    
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  largeContainerBackground: {
    width: '100%',
    height: 120, // Adjust the height as needed
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  smallContainerBackground: {
    width: '48%', // Small containers take up half of the row's width
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  blurContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    color: '#6A4E36',
    fontSize: 18,
    fontWeight: 'bold',
  },
  beanText: {
    fontWeight: 'bold',
  },
  smallcontainermenuText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  imageBackground: {
    resizeMode: 'cover',
    width: '100',
     // Or use 'contain', 'stretch', etc., based on your needs
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#000',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: '100%',
    padding: 10,
    fontSize: 18,
  },
  updateButton: {
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: '#28a745',
    borderRadius: 5,
    elevation: 3,  // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  historyText: {
    fontSize: 16,
    color: '#000',
  },
  historyDate: {
    fontSize: 14,
    color: '#888',
  },
});
