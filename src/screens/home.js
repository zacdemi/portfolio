import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { Iphone } from "../components";

import { Colors, Typography, Constants } from "../styles";
import { Reviews, Projects } from "../components";

const ellipseWidth = Constants.WIDTH * 2;
const ellipseHeight = Constants.WIDTH * 2 * 0.6;

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
          paddingVertical: 50,
          justifyContent: "center`",
        }}
      >
        <Text style={[styles.sectionHeader, { marginBottom: 50 }]}>
          Welcome! 👋🏼
        </Text>

        <Text style={[styles.sectionHeader, { marginTop: 20 }]}>
          React Native Projects
        </Text>
        <View style={{ marginTop: 20, marginBottom: 40, marginHorizontal: 15 }}>
          <Projects />
        </View>
        <Text style={styles.sectionHeader}>Employer Reviews</Text>
        <View style={{ flex: 1 }}>
          <Reviews />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 60,
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
  },
});

export default Home;
