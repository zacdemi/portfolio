import React, { cloneElement } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import { Iphone } from "./src/components";
import { Home } from "./src/screens";
import { Colors } from "./src/styles";
import { usePhoneDimensions } from "./src/hooks";

const { width, height, mobile } = usePhoneDimensions();

console.log("width, height, mobile", width, height, mobile);

export default function App() {
  return (
    <View style={styles.container}>
      <Iphone width={width} height={height} mobile={mobile}>
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
    paddingVertical: 20,
  },
});
