import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../component/Header";

const LoginPage = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleLogin = () => {
    navigation.navigate("Page1");
  };

  const handleSignUp = () => {
    navigation.navigate("Registration");
  };

  const handleResetPassword = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TextInput style={styles.input} placeholder="Username" />

        {/* Password input */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
          >
            <Text style={styles.eyeIconText}>{showPassword ? "👁" : "👁"}</Text>
          </TouchableOpacity>
        </View>

        {/* Login button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#444147", width: "45%" }]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign up button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#444147", width: "45%" }]}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Forgot password text */}
        <TouchableOpacity onPress={handleResetPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#CDBBAD",
    paddingTop: 30,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#6E5447",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "100%",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#6E5447",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  eyeIcon: {
    marginLeft: -25, // Adjust the margin to align the eye icon more to the side
  },
  eyeIconText: {
    fontSize: 24, // Adjust the font size to make the eye icon bigger
  },
  button: {
    backgroundColor: "#444147",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "45%",
  },
  buttonText: {
    color: "#CDBBAD",
    textAlign: "center",
  },
  forgotPasswordText: {
    textAlign: "center",
    color: "#444147",
  },
});

export default LoginPage;
