import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import { Button } from 'react-native-';
import { Button } from '@rneui/themed';
import routes from '../utils/routes';
import { useNavigation } from '@react-navigation/native';
const Home = ({navigation}) => {
    const {navigate} = useNavigation();
    return (
        <>
        <View style={styles.container}>
            <Button title="Users" onPress={()=>{
                navigation.navigate(routes.users)
            }}
            ></Button>
            </View>
        <View style={styles.container}>
            <Button title="About" onPress={()=>{
                navigate(routes.about)
            }}>

            </Button>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
})

export default Home;
