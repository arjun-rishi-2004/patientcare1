import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { useUser } from './UserContext'; 


const FeaturePage = () => {
  const navigation = useNavigation();
  const { user } = useUser();
    
  const handleMedicineReminder = () => {
    // Navigate to Medicine Reminder screen
    navigation.navigate('MedicineReminder');

  };

  const handleAppointmentReminder = () => {
    // Navigate to Appointment Reminder screen
  };

  const handleEmergencyAlert = () => {
    // Navigate to Emergency Alert screen
  };

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      // If there is no screen to go back to, you can navigate to a different screen
      // For example, navigate to the home screen
      navigation.dispatch(StackActions.replace('Login'));
    }
  };
  console.log("user",user);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to  Features Page!</Text>

      <Button title="Medicine Reminder" onPress={handleMedicineReminder} />
      <Button title="Appointment Reminder" onPress={handleAppointmentReminder} />
      <Button title="Emergency Alert" onPress={handleEmergencyAlert} />
      <Button title="Back" onPress={handleBack} />
    </View>
  );
};

export default FeaturePage;
