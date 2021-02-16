import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Colors } from "../styles";

const Iphone = (props) => {
  return (
    <View
      style={[
        props.mobile ? styles.iphone : null,
        { width: props.width, height: props.height },
      ]}
    >
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  iphone: {
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 38.5,
    overflow: "hidden",
    backgroundColor: Colors.secondary,
  },
});

export default Iphone;
