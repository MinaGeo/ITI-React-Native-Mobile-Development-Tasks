import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { usersContext } from '../contexts/usersContextProvider';
import { useRoute } from '@react-navigation/native';
import { Card, Divider } from '@rneui/themed';

const Details = () => {
    const { params } = useRoute();
    const { users } = useContext(usersContext);
    const [user, setUser] = useState(null); 

    useEffect(() => {
        const foundUser = users.find((u) => u.id === params.userId);
        setUser(foundUser);
    }, []);

    if (!user) return <Text>Loading....</Text>;

    return (
        <View style={styles.container}>
            <Card containerStyle={styles.card}>
                <Card.Title style={styles.cardTitle}>User Details</Card.Title>
                <Divider style={styles.divider} />
                <View style={styles.avatarContainer}>
                    <Image 
                        source={{ uri: user.avatar }} 
                        style={styles.avatar}
                    />
                </View>
                <Text style={styles.header}>Name: {user.name}</Text>
                <Text style={styles.details}>Email: {user.email}</Text>
                <Text style={styles.details}>Address: {user.address.street}, {user.address.city}, {user.address.zipcode}</Text>
                <Text style={styles.details}>Phone: {user.phone}</Text>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#1e212b', // Dark gray
        flex: 1,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#2c2f3a', // Slightly lighter gray
        borderRadius: 10,
        padding: 20,
    },
    cardTitle: {
        color: '#f5a623', // Orange
        fontSize: 20,
        fontWeight: 'bold',
    },
    divider: {
        backgroundColor: '#3e4451', // Dark gray for divider
        marginVertical: 10,
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f5a623', // Orange for headers
        marginBottom: 10,
    },
    details: {
        fontSize: 16,
        color: '#ffffff', // White for details text
        marginBottom: 5,
    },
});

export default Details;
