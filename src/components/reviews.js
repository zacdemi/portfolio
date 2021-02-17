import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";

import { Colors, Typography } from "../styles";
import { reviews } from "../../data/reviews.json";

const Reviews = (props) => {
  return (
    <FlatList
      data={reviews}
      keyExtractor={(item) => item.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <View style={styles.card}>
            <Text style={styles.text} adjustsFontSizeToFit>
              {item.quote}
            </Text>
            <Text style={styles.signature}>- {item.name}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: 240,
    height: 300,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  text: {
    ...Typography.base,
    fontSize: 25,
    color: Colors.primary,
  },
  signature: {
    ...Typography.base,
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.primary,
  },
});

export default Reviews;
