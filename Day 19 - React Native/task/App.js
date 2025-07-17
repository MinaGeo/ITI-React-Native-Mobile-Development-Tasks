import { useState } from "react";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
} from "react-native";
import style from "./style";
import Home from "./screens/Home";
import Users from "./screens/Users";
import About from "./screens/About";
import { NavigationContainer } from "@react-navigation/native";
import routes from "./utils/routes";
import Details from "./screens/Details";
import UsersContextProvider from "./contexts/usersContextProvider";
import StackNavigator from "./navigations/StackNavigator";
import DrawerNavigator from "./navigations/DrawerNavigator";
import TabTopNavigator from "./navigations/TabTopNavigator";
export default function App() {
 
  return (
    <UsersContextProvider>
      <NavigationContainer>
        <SafeAreaView style={style.container}>
         <StackNavigator/>
         {/* <DrawerNavigator></DrawerNavigator> */}
         {/* <TabTopNavigator></TabTopNavigator> */}
        </SafeAreaView>
        </NavigationContainer>
      </UsersContextProvider>
  );
}

