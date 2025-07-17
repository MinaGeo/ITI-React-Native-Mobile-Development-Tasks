import React, { useContext, useState, useEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { usersContext } from '../contexts/usersContextProvider';
import Search from '../components/Search';
import SimpleBackdrop from '../components/spinner';
import routes from '../utils/routes';
import style from '../style';
import { db } from '../helpers/firebaseConfig';
import { addDoc, collection, onSnapshot, query } from 'firebase/firestore';

const Users = () => {
    const [addLoading, setAddLoading] = useState(false);
    const { navigate } = useNavigation();
    const { users } = useContext(usersContext);
    const [filteredArr, setFilteredArr] = useState(users);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "favoriteUsers"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const favs = querySnapshot.docs.map(doc => doc.data().user);
            setFavorites(favs || []);
        });

        return () => unsubscribe(); 
    }, []);



    const addFavoriteUser = async (user) => {
        favorites.includes(user) ? null : setFavorites((prev) => [...prev, user]);
        await addFavoriteItem(user);
        setFavorites((prevList) => [...prevList, user]);
    
        // !favorites?.includes(user) &&
        //   setFavorites((prevList) => [...prevList, user]);
      };
    
      const addFavoriteItem = async (user) => {
        setAddLoading(true);
        try {
          if (favorites.includes(user)) {
            ToastAndroid.show("already added", ToastAndroid.SHORT);
          } else {
            await addDoc(collection(db, "favoriteUsers"), user);
            setFavorites(prev => [...prev, user]);

            ToastAndroid.show("Added to favorites", ToastAndroid.SHORT);
          }
        } catch (e) {
          console.error("something went wrong");
        } finally {
          setAddLoading(false);
        }
      };

    const recWord = (data) => {
        const lowerCaseData = data.toLowerCase();
        const filtered = users.filter(user =>
            user.username.toLowerCase().includes(lowerCaseData)
        );
        setFilteredArr(filtered);
    };

    if (!users) return <SimpleBackdrop />;

    return (
        <ScrollView style={styles.container}>
            {users.length > 0 ? (
                users.map(user => (
                    <View key={user.id} style={style.userContainer}>
                        <Text style={style.username}>{user.username}</Text>
                        <Pressable 
                            onPress={() => navigate(routes.details, { userId: user.id })} 
                            style={style.arrowBtn}
                        >
                            <Text style={style.arrowTxt}>&#10142;</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => addFavoriteUser(user)}
                            style={styles.heartBtn}
                        >
                            <Text style={styles.heartTxt}>♥</Text>
                        </Pressable>
                    </View>
                ))
            ) : (
                <Text>No users found</Text>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    userContainer: {
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    heartBtn: {
        padding: 5,
    },
    heartTxt: {
        fontSize: 20,
        color: '#e52165',
    },
});

export default Users;
