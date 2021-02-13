import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Colors } from "../styles";

const WIDTH = 414;
const HEIGHT = 896;

const Iphone = (props) => {
  return <View style={styles.iphone}>{props.children}</View>;
};

const styles = StyleSheet.create({
  iphone: {
    width: WIDTH,
    height: HEIGHT,
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 38.5,
    position: "relative",
    overflow: "hidden",
    backgroundColor: Colors.secondary,
  },
});

export default Iphone;
