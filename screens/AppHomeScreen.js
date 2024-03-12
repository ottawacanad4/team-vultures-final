// AppHomeScreen.js
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../component/Header';

const AppHomeScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate("LoginPage");
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Button title="Login" onPress={handleLoginPress} color="#CDBBAD" />
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
    paddingHorizontal: 8,
    backgroundcolor: "#444147",
    alignItems: "center",

    justifyContent: "center",
    paddingHorizontal: 20,
  },
  loginText: {
    color: "#CDBBAD", // Change the color to whatever you prefer
    fontSize: 18,
    fontWeight: "bold",
  },
});


export default AppHomeScreen;
