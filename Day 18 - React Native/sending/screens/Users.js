import React, { useContext, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { usersContext } from '../contexts/usersContextProvider';
import Search from '../components/Search';
import routes from '../utils/routes';

const Users = () => {
    const { navigate } = useNavigation();
    const { users } = useContext(usersContext);
    const [filteredArr, setFilteredArr] = useState(users);

    const recWord = (data) => {
        const lowerCaseData = data.toLowerCase();
        const filtered = users.filter(user =>
            user.username.toLowerCase().includes(lowerCaseData)
        );
        setFilteredArr(filtered);
    };

    if (!users) return <Text>Loading.....</Text>;

    return (
        <ScrollView style={styles.container}>
            <Search recWord={recWord} />
            <View style={styles.usersGrid}>
                {filteredArr.length > 0 ? (
                    filteredArr.map(user => (
                        <View key={user.id} style={styles.userCard}>
                            <Text style={styles.username}>{user.username}</Text>
                            <Pressable 
                                onPress={() => navigate(routes.details, { userId: user.id })} 
                                style={styles.arrowBtn}
                            >
                                <Text style={styles.arrowTxt}>&#10142;</Text>
                            </Pressable>
                        </View>
                    ))
                ) : (
                    <Text style={styles.noUsersFound}>No users found</Text>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#282c34', // Dark grayish blue
    },
    usersGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    userCard: {
        width: '48%', // Two cards per row
        marginVertical: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: '#61dafb', // Light blue
        borderRadius: 8,
        backgroundColor: '#3e4451', // Slightly lighter shade of grayish blue
        alignItems: 'center',
    },
    username: {
        color: '#ffffff', // White
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    arrowBtn: {
        padding: 5,
        alignItems: 'center',
    },
    arrowTxt: {
        color: '#ff79c6', // Pink
        fontSize: 20,
    },
    noUsersFound: {
        color: '#ffffff', // White
        textAlign: 'center',
        marginTop: 20,
        width: '100%',
    },
});

export default Users;
