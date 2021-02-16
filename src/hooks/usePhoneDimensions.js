import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";

//base iphone
const WIDTH = 414;
const HEIGHT = 896;

const usePhoneDimensions = () => {
  const { width, height } = Dimensions.get("window");
  if (width <= 768) {
    return { width, height, mobile: true };
  } else {
    return { WIDTH, HEIGHT, mobile: false };
  }
};

export default usePhoneDimensions;
