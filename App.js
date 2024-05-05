// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './LoginScreen';
// import FeaturePage from './FeaturePage';
// import MedicineReminderScreen from './MedicineReminderScreen';
// const Stack = createNativeStackNavigator();
// import { UserProvider } from './UserContext'; // Import the UserProvider
// import DoctorAppointmentsScreen from './AppointmentReminder';

// const App = () => {
//   return (
//     <UserProvider>
//     <NavigationContainer>
//       <Stack.Navigator>

//         <Stack.Screen name="Login" component={LoginScreen} />
//         {/* <Stack.Screen name="Features" component={FeaturePage} /> */}
//               <Stack.Screen name="MedicineReminder" component={MedicineReminderScreen} />
//               <Stack.Screen name="AppointmentReminder" component={DoctorAppointmentsScreen} />

//       </Stack.Navigator>
//     </NavigationContainer>
//     </UserProvider>
//   );
// };

// export default App;


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserProvider } from './UserContext';
import LoginScreen from './LoginScreen';
import MedicineReminderScreen from './MedicineReminderScreen';
import DoctorAppointmentsScreen from './AppointmentReminder';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#A3D8FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            
          }}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name="MedicineReminder"
            component={MedicineReminderScreen}
            options={{ title: 'Medicine Reminder' }}
          />
          <Stack.Screen
            name="AppointmentReminder"
            component={DoctorAppointmentsScreen}
            options={{ title: 'Doctor Appointments' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
