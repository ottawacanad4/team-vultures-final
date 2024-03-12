import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './component/Header';
import LoginPage from './screens/LoginPage'; 
import Page1 from './screens/page1'; 
import Registration from './screens/Registration';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'; 


const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#27232B" }, // Change the background color here
            headerTintColor: "#CDBBAD", // Change the text color if needed
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name="Page1"
            component={Page1} // Updated import path
            options={{ title: "Main Page" }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration} // Updated import path
            options={{ title: "Registration" }}
          />
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
            options={{ title: "Forgot Password" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const HomeScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <h1 style={{ color: "#444147" }}>Login to Your Account!</h1>
        <Button
          title="Login"
          onPress={handleLoginPress}
          color="#444147"
          titleStyle={{ color: "#CDBBAD" }} // Change the color of the button text
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDBBAD",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
