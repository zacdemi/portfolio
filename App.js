import React, { cloneElement } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import { Iphone } from "./src/components";
import { Home } from "./src/screens";
import { Colors } from "./src/styles";

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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.tertiary,
  },
});
