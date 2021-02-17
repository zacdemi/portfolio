import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { Colors, Typography } from "../styles";
import { Reviews, Projects, Social } from "../components";
import { usePhoneDimensions } from "../hooks";

const { width } = usePhoneDimensions();

const ellipseWidth = width * 2;
const ellipseHeight = width * 2 * 0.6;

const Home = () => {
  return (
    <>
      <View style={styles.ellipse} />
      <View style={styles.headerContainer}>
        <Text style={Typography.mainHeader}>Zac Demi</Text>
        <Text style={Typography.subHeader}>
          React Native Developer | Austin, TX
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 25,
        }}
      >
        <View style={styles.welcome}>
          <Text style={styles.sectionHeader}>Welcome! 👋🏼</Text>
        </View>
        <View style={styles.projects}>
          <Text style={styles.sectionHeader}>React Native Projects</Text>
          <Projects />
        </View>
        <View style={styles.reviews}>
          <Text style={styles.sectionHeader}>Reference Snippets</Text>
          <Reviews />
        </View>
        <View>
          <Social />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: ellipseHeight - ellipseHeight / 2.5 - 25, // 25 is the height of the cureve arc
    width: "100%",
    zIndex: 2,
  },
  ellipse: {
    position: "absolute",
    width: ellipseWidth,
    height: ellipseHeight,
    top: -ellipseHeight / 2.5,
    left: -ellipseWidth / 4,
    borderRadius: "50%",
    backgroundColor: Colors.primary,
    zIndex: 1,
  },
  sectionHeader: {
    ...Typography.sectionHeader,
    marginLeft: 20,
    marginBottom: 20,
  },
  welcome: { height: 80, marginBottom: 20 },
  projects: { marginBottom: 20 },
  reviews: { marginBottom: 30 },
});

export default Home;
