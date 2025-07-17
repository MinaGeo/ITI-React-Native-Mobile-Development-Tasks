import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import { Button } from 'react-native-';
import { Button } from '@rneui/themed';
import routes from '../utils/routes';
import { useNavigation } from '@react-navigation/native';
import Users from './Users';
const Home = ({navigation}) => {
    const {navigate} = useNavigation();
    return (
        <>
        <Users></Users>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
})

export default Home;
