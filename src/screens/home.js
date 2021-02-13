import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { Iphone } from "../components";

import { Colors, Typography, Constants } from "../styles";
import { Svg, Ellipse } from "../../Svg";
import { Reviews, Projects } from "../components";
import { reviews } from "../../data/reviews.json";

const Home = () => {
  const WIDTH = Constants.WIDTH;

  return (
    <View style={styles.container}>
      <View style={{ height: WIDTH * 0.6 + WIDTH / 6 }}>
        <Svg height="auto">
          <Ellipse
            cx={WIDTH / 2}
            cy={WIDTH / 6}
            rx={WIDTH}
            ry={WIDTH * 0.6}
            fill={Colors.primary}
          />
        </Svg>
      </View>
      <View style={styles.headerContainer}>
        <Text style={Typography.mainHeader}>Zac Demi</Text>
        <Text style={Typography.subHeader}>
          React Native Developer | Austin, TX
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <View style={{ marginBottom: 30 }}>
          <Reviews data={reviews} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: "absolute",
    top: 125,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  sectionHeader: {
    ...Typography.sectionHeader,
    marginLeft: 20,
  },
});

export default Home;
