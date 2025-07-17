import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import About from "../screens/About";
import Users from "../screens/Users";
import Details from "../screens/Details";
import routes from "../utils/routes";
import Home from "../screens/Home";
import TabTopNavigator from "./TabTopNavigator";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='tab'
       component={TabTopNavigator}
       options={{headerShown:false, unmountOnBlur: true }}>

      </Stack.Screen>
    {/* <Stack.Screen name='drawer'
       component={DrawerNavigator}
       options={{headerShown:false}}>

      </Stack.Screen> */}
    
      <Stack.Screen
        options={{
          headerTitle: "Home Screen",
          // header:()=>null, // Uncomment this if you want to hide the header
          headerStyle: { backgroundColor: "crimson" },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 25 },
          unmountOnBlur: true,

        }}
        name={routes.home}
        component={Home}

      />
      <Stack.Screen 
        name={routes.about} 
        component={About} 
        options={{
          headerStyle: { backgroundColor: "crimson" },
          headerTintColor: "white",
          unmountOnBlur: true,
        }}
      />
      <Stack.Screen 
        name={routes.users} 
        component={Users} 
        options={{
          headerStyle: { backgroundColor: "crimson" },
          headerTintColor: "white",
          unmountOnBlur: true,

        }}
      />
      <Stack.Screen 
        name={routes.details} 
        component={Details} 
        options={{
          headerStyle: { backgroundColor: "#0d1137" },
          headerTintColor: "gold",
          unmountOnBlur: true,

          // headerShown:,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
