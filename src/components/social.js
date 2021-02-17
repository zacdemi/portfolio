import React from "react";
import { StyleSheet, View, Linking, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { Colors } from "../styles";

const github = "http://github.com/zacdemi";
const email = "mailto:zac.demi@gmail.com";
const resume = "https://zacdemi.s3-us-west-1.amazonaws.com/zacdemi-resume.pdf";

const Social = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(email)}
      >
        <MaterialCommunityIcons
          name={"email-send-outline"}
          size={30}
          color={Colors.secondary}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(github)}
      >
        <Entypo name={"github"} size={30} color={Colors.secondary} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(resume)}
      >
        <Ionicons
          name={"document-text"}
          size={30}
          color={Colors.secondary}
          style={{ textAlign: "center" }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginHorizontal: 5,
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Social;
