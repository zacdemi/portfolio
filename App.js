import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import { Iphone } from "./src/components";
import { Home } from "./src/screens";

export default function App() {
  return (
    <View style={styles.container}>
      <Iphone>
        <Home />
      </Iphone>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFB612",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
});
