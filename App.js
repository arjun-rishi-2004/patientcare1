import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import FeaturePage from './FeaturePage';
import MedicineReminderScreen from './MedicineReminderScreen';
const Stack = createNativeStackNavigator();
import { UserProvider } from './UserContext'; // Import the UserProvider

const App = () => {
  return (
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Features" component={FeaturePage} /> */}
              <Stack.Screen name="MedicineReminder" component={MedicineReminderScreen} />

      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
  );
};

export default App;