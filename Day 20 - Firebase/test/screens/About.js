import { deleteDoc, doc, getDocs, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView, ToastAndroid } from 'react-native';
import { db } from '../helpers/firebaseConfig';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

const About = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);

    const fetchFavoriteUsers = async () => {
        setIsLoading(true);
        try {
            const queryOutput = await getDocs(collection(db, "favoriteUsers"));
            const favoriteUsers = queryOutput.docs.map((doc) => {
                const data = doc.data();
                // console.log(data);
                // console.log({ ...data, userId: doc.id });
                return { ...data, userId: doc.id }; // Flatten the user data
            });
            // console.log(`HEREEEE: ${favoriteUsers[0].name}`)
            setItems(favoriteUsers);

        } catch (error) {
            ToastAndroid.show("Error fetching favorites", ToastAndroid.SHORT);
            console.error("Error", error);
        } finally {
            setIsLoading(false);
        }
    };
    const isFocused = useIsFocused();

    useEffect(() => {
        isFocused?fetchFavoriteUsers(): null
 
      }, [isFocused]);


    const deleteFavoriteUser = async (userId) => {
        setIsLoading(true);
        try {
            const itemRef = doc(db, "favoriteUsers", userId);
            await deleteDoc(itemRef);
            setItems(items.filter((item) => item.userId !== userId));
            ToastAndroid.show("Deleted from favorites", ToastAndroid.SHORT);
        } catch (err) {
            ToastAndroid.show("Error deleting user", ToastAndroid.SHORT);
            console.error("Error", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Favorite Users</Text>
            {isLoading ? (
                <Text>Loading...</Text>
            ) : (
                items.length > 0 ? (
                    items.map((user) => (
                        <View key={user.userId} style={styles.userContainer}>
                            <Text style={styles.username}>{user.username}</Text>
                            <Pressable
                                onPress={() => deleteFavoriteUser(user.userId)}
                                style={styles.heartBtn}
                            >
                                <Text style={styles.heartTxt}>❌</Text>
                            </Pressable>
                        </View>
                    ))
                ) : (
                    <Text>No favorite users found</Text>
                )
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    userContainer: {
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    username: {
        fontSize: 18,
        color: '#000',
    },
    heartBtn: {
        padding: 5,
    },
    heartTxt: {
        fontSize: 20,
        color: '#e52165',
    },
});

export default About;
