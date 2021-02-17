import { Colors } from "./index";
import { usePhoneDimensions } from "../hooks";
import { WIDTH } from "./constants";

const appFont = "Helvetica";
const { width } = usePhoneDimensions();

// Thank you https://gist.github.com/nirsky/17b95fc07332bcce64cdb6916a4f271e#file-scaling_utils-js
const scale = (size) => {
  return (width / WIDTH) * size;
};

export const base = {
  fontFamily: appFont,
};

export const mainHeader = {
  fontFamily: appFont,
  fontSize: scale(77),
  fontWeight: "bold",
  color: Colors.secondary,
};

export const subHeader = {
  fontFamily: appFont,
  fontSize: scale(20),
  fontWeight: "bold",
  color: Colors.secondary,
};

export const sectionHeader = {
  fontFamily: appFont,
  fontSize: 35,
  fontWeight: "bold",
  color: Colors.primary,
};

export const paragraph = {
  fontFamily: appFont,
  fontSize: 14,
  fontWeight: "bold",
  color: Colors.secondary,
};
