import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { usersContext } from '../contexts/usersContextProvider';
import { useRoute } from '@react-navigation/native';
import SimpleBackdrop from '../components/spinner';
import { Card } from '@rneui/themed';
import { ScrollView } from 'react-native-gesture-handler';

const Details = () => {
    const { params } = useRoute();  
    const { users } = useContext(usersContext);
    const [user, setUser] = useState(null); 

    useEffect(() => {
        const foundUser = users.find((u) => u.id === params.userId);
        setUser(foundUser);
    }, [params.userId, users]);

    if (!user) return <SimpleBackdrop />;

    return (
            <View style={styles.container}>
        <ScrollView>

                <Card containerStyle={styles.card}>
                    <Image
                        source={{ uri: user.Poster }}
                        style={styles.poster}
                    />
                    <Text style={styles.header}>{user.Title}</Text>
                    <Text style={styles.details}>{user.Year}</Text>
                    <Text style={styles.details}>{user.Genre}</Text>
                    <Text style={styles.details}>{user.Plot}</Text>
                </Card>
        </ScrollView>

            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#white',
        minHeight: 1000,
    },
    card: {
        backgroundColor: '#0d1137', // Card background color
        borderColor: '#e52165', // Card border color
    },
    poster: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 15,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: "center",
        color: 'gold', // Header text color
    },
    details: {
        fontSize: 16,
        marginBottom: 5,
        color: '#e52165', // Details text color
    },
});

export default Details;
