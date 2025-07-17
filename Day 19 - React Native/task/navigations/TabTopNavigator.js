import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import routes from '../utils/routes';
import Home from '../screens/Home';
import About from '../screens/About';
import Favourite from '../screens/Favourite';

const Tab = createMaterialTopTabNavigator();

const TabTopNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'gold',
                tabBarInactiveTintColor: '#e52165',
                tabBarIndicatorStyle: {
                    backgroundColor: 'gold',
                },
                tabBarStyle: {
                    backgroundColor: '#0d1137',
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Tab.Screen name={routes.home} component={Home} />
            <Tab.Screen name={routes.about} component={About} />
            <Tab.Screen name={routes.favourite} component={Favourite} />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({});

export default TabTopNavigator;
