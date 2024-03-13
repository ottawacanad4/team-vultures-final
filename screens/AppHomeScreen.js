// AppHomeScreen.js
import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../component/Header";

const AppHomeScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate("LoginPage");
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TouchableOpacity onPress={handleLoginPress} style={styles.button}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

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
  button: {
    backgroundColor: "#444147",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25, // Adjust the border radius to make the button rounded
  },
  loginText: {
    color: "#CDBBAD",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AppHomeScreen;
