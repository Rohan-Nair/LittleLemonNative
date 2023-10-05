import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  //   useEffect(() => {
  //     router.replace("/welcome");
  //   }, []);
  return (
    <SafeAreaView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Link href="/welcome/">
          <Pressable>
            <Text style={styles.buttonStyle}>Start App</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default index;
