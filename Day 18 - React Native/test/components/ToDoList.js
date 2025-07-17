import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox } from "@rneui/themed";

const ToDoList = ({ toDoName, isDone, onToggleDone, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          isDone && { textDecorationLine: "line-through", color: "gray" },
        ]}
      >
        {toDoName}
      </Text>
      <CheckBox
        containerStyle={styles.checkbox}
        title="Done"
        checked={isDone}
        onPress={onToggleDone}
      />
      <CheckBox
        containerStyle={styles.checkbox}
        title="Delete"
        onPress={onDelete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Aligns items in a row
    alignItems: "center", // Centers items vertically
    backgroundColor: "crimson", // Crimson background for the box
    padding: 10,
    marginHorizontal: 18,
    marginTop: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white", // White text color
    flex: 1, // Makes the text take up available space
  },
  checkbox: {
    backgroundColor: "transparent", // Makes the checkbox background transparent
    borderColor: "transparent", // Removes the checkbox border
    padding: 0, // Removes checkbox padding
  },
});

export default ToDoList;
