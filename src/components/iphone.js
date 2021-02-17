import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Colors } from "../styles";
import { usePhoneDimensions } from "../hooks";

const { width, height, mobile } = usePhoneDimensions();

const Iphone = (props) => {
  return (
    <View style={[!mobile ? styles.iphone : null, styles.container]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: Colors.secondary,
    overflow: "hidden",
  },
  iphone: {
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 38.5,
  },
});

export default Iphone;
