import { Button, Image, StyleSheet, TextInput } from "react-native";

import { Text, View } from "../../components/Themed";
import { useState } from "react";

export default function TabTwoScreen() {
  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const [email, setEmail] = useState("");
  const checkValidEmail = validateEmail(email);
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/little-lemon-logo-grey.png")}
      />
      <Text style={styles.textStyle}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>

      <TextInput
        style={styles.inputStyle}
        placeholder="Type your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        textContentType="emailAddress"
      />

      <Button
        onPress={() => alert("Thanks for subscribing, stay tuned!")}
        title="Subscribe"
        color="#006600"
        disabled={!checkValidEmail}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 120,
    width: 200,
    resizeMode: "contain",
  },
  textStyle: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 19,
    textAlign: "center",
    width: 300,
  },
  inputStyle: {
    color: "white",
    marginBottom: 20,
    fontSize: 16,
    borderColor: "white",
    borderWidth: 1,
    height: 40,
    width: 300,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
