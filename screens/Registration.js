import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import Header from "../component/Header";

const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [securePassword, setSecurePassword] = useState(true);
  const [secureNewPassword, setSecureNewPassword] =
    useState(true);

  const handleRegister = () => {
    console.log("handleRegister function called");

    navigation.goBack();
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text style={styles.label}></Text>
          <View style={styles.passwordInput}>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              placeholder="Enter your username"
            />
            <TouchableOpacity
              onPress={() => setSecurePassword(!securePassword)}
              style={styles.eyeIcon}
            >
              <FontAwesome5
                name={securePassword ? "" : ""}
                size={20}
                color="#6E5447"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.label}></Text>
          <View style={styles.passwordInput}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={securePassword}
              placeholder="Enter your password"
            />
            <TouchableOpacity
              onPress={() => setSecurePassword(!securePassword)}
              style={styles.eyeIcon}
            >
              <FontAwesome5
                name={securePassword ? "eye-slash" : "eye"}
                size={20}
                color="#6E5447"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.label}></Text>
          <View style={styles.passwordInput}>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={secureNewPassword}
              placeholder="Confirm password"
            />
            <TouchableOpacity
              onPress={() => setSecureNewPassword(!secureNewPassword)}
              style={styles.eyeIcon}
            >
              <FontAwesome5
                name={secureNewPassword ? "eye-slash" : "eye"}
                size={20}
                color="#6E5447"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleRegister} style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDBBAD",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "45%",
    backgroundColor: "#444147",
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#CDBBAD",
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#6E5447",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordInput: {
    flexDirection: "row",
    alignItems: "center",
    width: "75%",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
});

export default RegistrationScreen;
