import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Colors, Typography } from "../styles";
import { reviews } from "../../data/reviews.json";
import { usePhoneDimensions } from "../hooks";

const { mobile } = usePhoneDimensions();

const Reviews = (props) => {
  const flatListRef = useRef(null);
  const [index, setIndex] = useState(0);

  const handleScrollLeft = () => {
    if (index > 0) {
      flatListRef.current.scrollToIndex({ animated: true, index: index - 1 });
      setIndex((index) => index - 1);
    }
  };

  const handleScrollRight = () => {
    if (index < reviews.length - 1) {
      flatListRef.current.scrollToIndex({ animated: true, index: index + 1 });
      setIndex((index) => index + 1);
    }
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
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
              <Text style={styles.name}>- {item.name}</Text>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          );
        }}
      />
      {!mobile && (
        <TouchableOpacity
          style={styles.caretRight}
          onPress={() => handleScrollRight()}
        >
          <AntDesign name="caretright" size={40} color={Colors.tertiary} />
        </TouchableOpacity>
      )}

      {!mobile && (
        <TouchableOpacity
          style={styles.caretLeft}
          onPress={() => handleScrollLeft()}
        >
          <AntDesign name="caretleft" size={40} color={Colors.tertiary} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 260,
    height: 270,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  text: {
    ...Typography.base,
    fontSize: 25,
    color: Colors.primary,
  },
  name: {
    ...Typography.base,
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.primary,
  },
  title: {
    ...Typography.base,
    fontSize: 15,
    color: Colors.primary,
  },
  caretRight: {
    position: "absolute",
    top: "40%",
    right: 5,
    opacity: 0.4,
  },
  caretLeft: {
    position: "absolute",
    top: "40%",
    left: 5,
    opacity: 0.4,
  },
});

export default Reviews;
