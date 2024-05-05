// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, FlatList } from 'react-native';
// import { collection, addDoc, getDocs } from 'firebase/firestore';
// import { firestore } from './firebase'; // Assuming you've initialized Firestore in './firebase.js'
// import DateTimePicker from '@react-native-community/datetimepicker';

// const MedicineReminderScreen = () => {
//   const [medicineName, setMedicineName] = useState('');
//   const [selectedTime, setSelectedTime] = useState(new Date());
//   const [medicines, setMedicines] = useState([]);
//   const [showTimePicker, setShowTimePicker] = useState(false);

//   const addMedicine = async () => {
//     try {
//       const docRef = await addDoc(collection(firestore, 'medicines'), {
//         medicineName,
//         time: selectedTime.getTime(),
//       });
//       console.log('Document written with ID: ', docRef.id);
      
//       setSelectedTime(new Date());
//     } catch (e) {
//       console.error('Error adding document: ', e);
//     }
//   };

//   const fetchMedicines = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(firestore, 'medicines'));
//       const medicines = [];
//       querySnapshot.forEach((doc) => {
//         medicines.push({
//           id: doc.id,
//           ...doc.data(),
//         });
//       });
//       console.log('Medicines:', medicines);
//       setMedicines(medicines);
//     } catch (error) {
//       console.error('Error fetching medicines:', error);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Medicine Name:</Text>
//       <TextInput
//         value={medicineName}
//         onChangeText={setMedicineName}
//         placeholder="Enter medicine name"
//         style={{ borderWidth: 1, padding: 5, marginBottom: 10, width: 200 }}
//       />
//       <Text>Selected Time: {selectedTime.toLocaleTimeString()}</Text>
//       <Button title="Select Time" onPress={() => setShowTimePicker(true)} />
//       {showTimePicker && (
//         <DateTimePicker
//           value={selectedTime}
//           mode="time"
//           is24Hour={true}
//           display="default"
//           onChange={(event, selectedTime) => {
//             setShowTimePicker(false);
//             setSelectedTime(selectedTime || selectedTime);
//           }}
//         />
//       )}
//       <Button title="Add Medicine" onPress={addMedicine} />
//       <Button title="Fetch Medicines" onPress={fetchMedicines} />
//       <Text style={{ marginTop: 20 }}>Medicines:</Text>
//       <FlatList
//         data={medicines}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <Text>{item.medicineName} - {new Date(item.time).toLocaleString()}</Text>
//         )}
//       />
//     </View>
//   );
// };

// export default MedicineReminderScreen;

//2


import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { firestore } from './firebase'; // Assuming you've initialized Firestore in './firebase.js'
import DateTimePicker from '@react-native-community/datetimepicker';

const MedicineReminderScreen = () => {
  const [medicineName, setMedicineName] = useState('');
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [medicines, setMedicines] = useState([]);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const addMedicine = async () => {
    try {
      const docRef = await addDoc(collection(firestore, 'medicines'), {
        medicineName,
        time: selectedTime.getTime(),
      });
      console.log('Document written with ID: ', docRef.id);
      
      setSelectedTime(new Date());
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const fetchMedicines = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'medicines'));
      const medicines = [];
      querySnapshot.forEach((doc) => {
        medicines.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log('Medicines:', medicines);
      setMedicines(medicines);
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medicine Name:</Text>
      <TextInput
        value={medicineName}
        onChangeText={setMedicineName}
        placeholder="Enter medicine name"
        style={styles.input}
      />
      <Text style={styles.title}>Selected Time: {selectedTime.toLocaleTimeString()}</Text>
      <Button title="Select Time" onPress={() => setShowTimePicker(true)} />
      {showTimePicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={(event, selectedTime) => {
            setShowTimePicker(false);
            setSelectedTime(selectedTime || selectedTime);
          }}
        />
      )}
      <Button title="Add Medicine" onPress={addMedicine} />
      <Button title="Fetch Medicines" onPress={fetchMedicines} />
      <Text style={styles.subtitle}>Medicines:</Text>
      <FlatList
        data={medicines}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.medicine}>{item.medicineName} - {new Date(item.time).toLocaleString()}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
    width: 200,
    backgroundColor: '#fff',
  },
  medicine: {
    fontSize: 14,
    color: '#333',
  },
});

export default MedicineReminderScreen;
