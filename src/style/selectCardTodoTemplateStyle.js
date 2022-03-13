import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export const Style = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "space-around",
    width: "100%",
    height: "50%",
  },
  singleBox: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: (Dimensions.get("window").width / 2) * 0.8,
    height: (Dimensions.get("window").width / 2) * 0.8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  boxIcon: {
    marginBottom: Dimensions.get("window").width / 32,
  },
  boxTitle: {
    fontSize: Dimensions.get("window").width / 24,
    textAlign: "center",
  },
});
