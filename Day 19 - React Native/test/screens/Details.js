import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { usersContext } from '../contexts/usersContextProvider';
import { useRoute } from '@react-navigation/native';
import SimpleBackdrop from '../components/spinner';
import { Card } from '@rneui/themed';
const Details = () => {
    const { params } = useRoute();
    const { users } = useContext(usersContext);
    const [user, setUser] = useState(null); 

    useEffect(() => {
        const foundUser = users.find((u) => u.id === params.userId);
        setUser(foundUser);
    }, []);

    if (!user) return <SimpleBackdrop />;

    return (
        <View style={styles.container}>
            <Card>
                <Card.Title>User Details</Card.Title>
                <Card.Divider />
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
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default Details;
