import React from 'react';
import { StyleSheet, View,Text, Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const About = () => {
    return (
        <View>
            <Text>About</Text>
            <MaterialCommunityIcons size={50} color={"red"} onPress={()=>Linking.openURL("https://www.facebook.com")} name="facebook"></MaterialCommunityIcons> 
        </View>
    );
}

const styles = StyleSheet.create({})

export default About;
