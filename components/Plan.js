import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const OffersScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeModalAndNavigate = () => {
    toggleModal();
    navigation.navigate('Home'); // Adjust 'Home' to your actual home screen name
  };

  return (
    <View style={styles.container}>
      <Button title="Check Offers" onPress={toggleModal} />
      
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Working Under Progress</Text>
          <Text style={styles.message}>
            Coming Soon!
          </Text>
          <Button title="Close" onPress={closeModalAndNavigate} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  
});

export default OffersScreen;
