import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// List of template image paths from the assets folder
const templateImages = [
  require('../../assets/Templates/template1.png'),
  require('../../assets/Templates/template2.png'),
  require('../../assets/Templates/template3.png'),
  require('../../assets/Templates/template4.png'),
  require('../../assets/Templates/template5.png'),
  require('../../assets/Templates/template6.png'),
  require('../../assets/Templates/template7.png'),
];

const TemplatesScreen = ({ navigation }) => {
  const [userImage, setUserImage] = useState(null); // State to hold the user-selected image

  // Function to open the image picker
  const pickImage = async () => {
    // Request permission to access media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Permission to access the media library is required.');
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setUserImage(result.uri); // Set the URI of the selected image
    }
  };

  // Render each template in a grid layout
  const renderTemplate = ({ item }) => (
    <TouchableOpacity
      style={styles.templateContainer}
      onPress={() => navigation.navigate('edittemplate', { template: item })}
    >
      <Image source={item} style={styles.templateImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Button to add a custom image */}
      {/* <TouchableOpacity style={styles.addButton} onPress={pickImage}>
        <MaterialIcons name="add-photo-alternate" size={24} color="#fff" />
        <Text style={styles.addButtonText}>Add Custom Image</Text>
      </TouchableOpacity> */}

      {/* Display the user's selected image */}
      {userImage && (
        <TouchableOpacity
          style={styles.templateContainer}
          onPress={() => navigation.navigate('EditTemplate', { template: { uri: userImage } })}
        >
          <Image source={{ uri: userImage }} style={styles.templateImage} />
        </TouchableOpacity>
      )}

      {/* Display template images */}
      <FlatList
        data={templateImages}
        renderItem={renderTemplate}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  addButtonText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
  },
  templateContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(106, 78, 54, 0.7)',
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#f8f8ff',
  },
  templateImage: {
    width: 140,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

export default TemplatesScreen;
