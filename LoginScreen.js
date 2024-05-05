import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { firestore } from './firebase'; // Assuming you've initialized Firestore in './firebase.js'
import { collection, query, where, getDocs } from 'firebase/firestore';
import FeaturePage from './FeaturePage';
import { useNavigation } from '@react-navigation/native'; 
import { useUser } from './UserContext'; // Import the useUser hook


const LoginScreen = () => {
    const { setUser } = useUser(); // Get setUser from the context

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigation = useNavigation();




  const handleLogin = async () => {
    console.log("hello");
    const usersRef = collection(firestore, 'users');
    const q = query(usersRef, where('username', '==', username));

    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const user = doc.data();
          if (user.password === password) {
            // Login successful
            setIsLoggedIn(true);
            setUser(user);
            console.log("user",user);
          } else {
            // Incorrect password
            Alert.alert('Incorrect password');
          }
        });
      } else {
        // User not found
        Alert.alert('User not found');
      }
    } catch (error) {
      console.error('Error getting documents:', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink'}}>
      {isLoggedIn ? (
        <FeaturePage />
      ) : (
        <>
          <Text>Username:</Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Enter your username"
            style={{ borderWidth: 1, padding: 5, marginBottom: 10, width: 200 }}
          />
          <Text>Password:</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
            style={{ borderWidth: 1, padding: 5, marginBottom: 10, width: 200 }}
          />
          <Button title="Login" onPress={handleLogin} color='#A3D8FF'/>
        </>
      )}
    </View>
  );
};

export default LoginScreen;
