import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import routes from "../utils/routes";
import About from "../screens/About";
import Users from "../screens/Users";
import Home from "../screens/Home";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={routes.about} component={About} />
      <Drawer.Screen name={routes.users} component={Users} />
      <Drawer.Screen name={routes.home} component={Home} />
      <Drawer.Screen name={"camera"} component={CameraM} />
    
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
