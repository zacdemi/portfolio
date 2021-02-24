import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { Colors, Typography } from "../styles";
import { Reviews, Projects, Social } from "../components";
import { usePhoneDimensions } from "../hooks";
import Animated, { Easing } from "react-native-reanimated";

const { width, height } = usePhoneDimensions();

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 25,
        }}
      >
        <View style={styles.headerContainer}>
          <View style={styles.ellipse} />
          <View styles={styles.header}>
            <Text style={Typography.mainHeader}>Zac Demi</Text>
            <Text style={Typography.subHeader}>
              React Native Developer | Austin, TX
            </Text>
          </View>
        </View>
        <View style={styles.welcome}>
          <Text style={styles.sectionHeader}>Welcome! 👋🏼</Text>
        </View>
        <View style={styles.projects}>
          <Text style={styles.sectionHeader}>React Native Projects</Text>
          <Projects />
        </View>
        <View style={styles.reviews}>
          <Text style={styles.sectionHeader}>Employer Reviews</Text>
          <Reviews />
        </View>
        <View>
          <Social />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: Colors.secondary,
  },
  headerContainer: {
    height: height * 0.31,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    overflow: "hidden",
  },
  ellipse: {
    position: "absolute",
    top: -(width - height * 0.3),
    width: width,
    height: width,
    borderRadius: width / 2,
    backgroundColor: Colors.primary,
    transform: [{ scaleX: 2 }],
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
