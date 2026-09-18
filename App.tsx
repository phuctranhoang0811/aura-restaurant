import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from './src/navigation/MainTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <MainTabNavigator />
    </NavigationContainer>
  );
}
