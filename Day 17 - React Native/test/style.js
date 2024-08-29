import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 0,
    flex: 1,
    backgroundColor: "black",
  },
  view1: {
    margin: 50,
    width: 100,
    height: 100,
    backgroundColor: "yellow",
  },
  view2: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    position: "absolute",
    bottom: 0,
    left: 200,
  },
  inputContainer: {
    flexDirection: "row", // Aligns the TextInput and button in the same line
    alignItems: "center",
    marginHorizontal: 60, // Align with button margin
    marginBottom: 20,
  },
  btnContainer: {
    backgroundColor: "rgb(200,34,33)",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  txt: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    backgroundColor: "crimson",
    marginBottom: 10,
  },
  txtInput: {
    flex: 1, // Takes up available space
    height: 40,
    color: "white",
    borderBottomWidth: 2,
    borderBottomColor: "crimson", // Underline color for TextInput
    marginRight: 10, // Space between input and button
    paddingHorizontal: 5,
  },
  btnTxt: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  cyan: {
    backgroundColor: "#2aa198",
    padding: 10,
    marginHorizontal: 18,
    borderRadius: 2,
  },
  text: {
    fontSize: 1,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
