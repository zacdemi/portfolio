import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

import { Colors, Typography, Constants } from "../styles";

const iconSize = 28;

const projects = [
  {
    name: "Avem",
    icon: (
      <FontAwesome5
        name="map-marker"
        size={iconSize}
        color={Colors.secondary}
      />
    ),
  },
  {
    name: "Plug Music",
    icon: (
      <Ionicons name="musical-notes" size={iconSize} color={Colors.secondary} />
    ),
  },
  {
    name: "Speed Jenga",
    icon: (
      <MaterialIcons name="av-timer" size={iconSize} color={Colors.secondary} />
    ),
  },
  {
    name: "Profile",
    icon: (
      <FontAwesome5
        name="user-astronaut"
        size={iconSize}
        color={Colors.secondary}
      />
    ),
  },
];

const Button = ({ name, icon }) => {
  return (
    <TouchableOpacity style={styles.button}>
      {icon}
      <Text style={styles.buttonTitle}>{name}</Text>
    </TouchableOpacity>
  );
};

const Projects = (props) => {
  return (
    <View style={styles.buttonContainer}>
      {projects.map((item, index) => {
        return <Button name={item.name} icon={item.icon} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 64,
    minWidth: 142,
    backgroundColor: Colors.primary,
    borderRadius: 40,
    paddingHorizontal: 10,
    margin: 5,
  },
  buttonContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  buttonTitle: {
    ...Typography.base,
    fontSize: 25,
    color: Colors.secondary,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default Projects;
