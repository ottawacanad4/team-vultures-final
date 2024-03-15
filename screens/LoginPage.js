import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import Header from "../component/Header";

const LoginPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [securePassword, setSecurePassword] = useState(true);

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
    setSecurePassword(!securePassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        {/* Password input */}
        <View style={styles.passwordInput}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={securePassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
          >
            <FontAwesome5
              name={securePassword ? "eye-slash" : "eye"}
              size={20}
              color="#6E5447"
            />
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
  passwordInput: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
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
