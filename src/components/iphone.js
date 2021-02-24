import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../styles";
import { usePhoneDimensions } from "../hooks";

const { width, height } = usePhoneDimensions();

const Iphone = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.notch} />
      <View style={styles.screen}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 20,
    borderRadius: 60,
  },
  screen: {
    width,
    height,
    backgroundColor: Colors.secondary,
  },
  notch: {
    width: 209,
    height: 30,
    position: "absolute",
    top: -2,
    left: "auto",
    right: "auto",
    backgroundColor: "black",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 1,
  },
});

export default Iphone;
