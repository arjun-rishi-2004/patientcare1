import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { firestore } from './firebase'; // Assuming you've initialized Firestore in './firebase.js'
import DateTimePicker from '@react-native-community/datetimepicker';

const DoctorAppointmentsScreen = () => {
  const [patientName, setPatientName] = useState('');
  const [appointmentTime, setAppointmentTime] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const addAppointment = async () => {
    try {
      const docRef = await addDoc(collection(firestore, 'appointments'), {
        patientName,
        appointmentTime: appointmentTime.getTime(),
      });
      console.log('Document written with ID: ', docRef.id);
      
      setPatientName('');
      setAppointmentTime(new Date());
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const fetchAppointments = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'appointments'));
      const appointments = [];
      querySnapshot.forEach((doc) => {
        appointments.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log('Appointments:', appointments);
      setAppointments(appointments);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Patient Name:</Text>
      <TextInput
        value={patientName}
        onChangeText={setPatientName}
        placeholder="Enter hospital  name"
        style={{ borderWidth: 1, padding: 5, marginBottom: 10, width: 200 }}
      />
      <Text>Appointment Time: {appointmentTime.toLocaleString()}</Text>
      <Button title="Select Time" onPress={() => setShowDateTimePicker(true)} />
      {showDateTimePicker && (
        <DateTimePicker
          value={appointmentTime}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={(event, selectedTime) => {
            setShowDateTimePicker(false);
            setAppointmentTime(selectedTime || appointmentTime);
          }}
        />
      )}
      <Button title="Add Appointment" onPress={addAppointment} />
      <Button title="Fetch Appointments" onPress={fetchAppointments} />
      <Text style={{ marginTop: 20 }}>Appointments:</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{item.patientName} - {new Date(item.appointmentTime).toLocaleString()}</Text>
        )}
      />
    </View>
  );
};

export default DoctorAppointmentsScreen;
