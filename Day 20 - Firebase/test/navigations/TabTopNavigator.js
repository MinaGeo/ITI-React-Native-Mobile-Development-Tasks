import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import routes from "../utils/routes";
import Home from "../screens/Home";
import About from "../screens/About";
import { Ionicons } from "@expo/vector-icons"; // Example for using icons from Expo

const Tab = createMaterialTopTabNavigator();

const TabTopNavigator = () => {
  return (
    <Tab.Navigator
      options={{ unmountOnBlur: true }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "gold",
        tabBarInactiveTintColor: "#e52165",
        tabBarIndicatorStyle: {
          backgroundColor: "gold",
        },
        tabBarStyle: {
          backgroundColor: "#0d1137",
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === routes.home) {
            iconName = "home";
          } else if (route.name === routes.about) {
            iconName = "information-circle";
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={routes.home}
        component={Home}
        options={{ unmountOnBlur: true }}
      />
      <Tab.Screen
        name={routes.about}
        component={About}
        options={{ unmountOnBlur: true }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabTopNavigator;
