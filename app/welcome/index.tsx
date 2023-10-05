import { Image, Pressable, SafeAreaView, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <View>
        <Image
          style={styles.logo}
          source={require("../../assets/images/little-lemon-logo.png")}
        />
        <Text style={styles.textStyle}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
        <Link href="/subscribe">
          <Pressable>
            <Text style={styles.buttonStyle}>Newsletter</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 150,
    marginLeft: 100,
    height: 200,
    width: 200,
    resizeMode: "contain",
  },
  textStyle: {
    marginTop: 90,
    marginLeft: 80,
    marginRight: 80,
    marginBottom: 150,
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonStyle: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#006600",
    textAlign: "center",
    padding: 10,
    borderRadius: 10,
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
