import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

import { Colors, Typography, Constants } from "../styles";

const iconSize = 28;

const icons = [
  {
    name: "Avem",
    link: "https://avem.io",
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
    link: "https://github.com/zacdemi/StudioListings",
    icon: (
      <Ionicons name="musical-notes" size={iconSize} color={Colors.secondary} />
    ),
  },
  {
    name: "Speed Jenga",
    link: "https://hackaday.io/project/169055-speed-jenga",
    icon: (
      <MaterialIcons name="av-timer" size={iconSize} color={Colors.secondary} />
    ),
  },
  {
    name: "Profile",
    link: "https://github.com/zacdemi/portfolio",
    icon: (
      <FontAwesome5
        name="user-astronaut"
        size={iconSize}
        color={Colors.secondary}
      />
    ),
  },
];

const Button = ({ name, icon, link }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => Linking.openURL(link)}
    >
      {icon}
      <Text style={styles.buttonTitle}>{name}</Text>
    </TouchableOpacity>
  );
};

const Projects = (props) => {
  return (
    <View style={styles.buttonContainer}>
      {icons.map((item, index) => {
        return <Button name={item.name} icon={item.icon} link={item.link} />;
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
    marginLeft: 15,
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
