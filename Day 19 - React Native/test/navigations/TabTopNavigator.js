import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import routes from '../utils/routes';
import Home from '../screens/Home';
import About from '../screens/About';
import CameraM from '../screens/Camera';
const Tab = createMaterialTopTabNavigator();

const TabTopNavigator = () => {
    return (
        <Tab.Navigator>
         <Tab.Screen name={routes.home} component={Home} />
         <Tab.Screen name={routes.about} component={About} />

      </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default TabTopNavigator;
