import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { Colors, Typography } from "../styles";
import { Reviews, Projects, Social } from "../components";
import { usePhoneDimensions } from "../hooks";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

const { width, height } = usePhoneDimensions();
const visibleEllipse = height * 0.35;

const Home = () => {
  const translationY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationY.value = event.contentOffset.y;
  });

  const animatedEllipseContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            translationY.value,
            [0, 250, 300],
            [0, -(height * 0.2), -(height * 0.2)],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            translationY.value,
            [0, 250],
            [0, -height * 0.09],
            Extrapolate.CLAMP
          ),
        },
        {
          scale: interpolate(
            translationY.value,
            [0, 250],
            [1, 0.7],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const animatedSubHeaderStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        translationY.value,
        [0, 250],
        [1, 0],
        Extrapolate.CLAMP
      ),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.ellipseContainer, animatedEllipseContainerStyle]}
      >
        <View style={styles.ellipse} />
      </Animated.View>
      <Animated.View style={[styles.header, animatedHeaderStyle]}>
        <Text style={Typography.mainHeader}>Zac Demi</Text>
        <Animated.Text style={[Typography.subHeader, animatedSubHeaderStyle]}>
          React Native Developer | Austin, TX
        </Animated.Text>
      </Animated.View>
      <Animated.ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 25,
        }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <View style={{ height: visibleEllipse }} />
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
        <View style={{ height: height * 0.2 }} />
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: Colors.secondary,
  },
  ellipseContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    overflow: "hidden",
    height: visibleEllipse + 0.01,
    alignItems: "center",
    width: "100%",
    zIndex: 1,
  },
  ellipse: {
    position: "absolute",
    top: -(width - visibleEllipse),
    width: width,
    height: width,
    borderRadius: width / 2,
    backgroundColor: Colors.primary,
    transform: [{ scaleX: 2 }],
  },
  header: {
    position: "absolute",
    top: visibleEllipse / 3,
    left: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
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
