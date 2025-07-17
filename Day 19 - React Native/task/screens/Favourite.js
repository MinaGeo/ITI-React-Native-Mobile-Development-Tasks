import React, { useState, useEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';

const Favourite = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Fetch the data directly from the server
    axios
      .get('http://192.168.1.16:4000/users')
      .then(response => {
        const users = response.data;

        if (Array.isArray(users)) {
          const filteredUsers = users.filter(user => user.Favourite === true || user.Favourite === "true");
          setFavourites(filteredUsers);
        }
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const removeFromFav = (userId) => {
    axios
      .patch(`http://192.168.1.16:4000/users/${userId}`, { Favourite: false })
      .then(() => {
        setFavourites((prev) =>
          prev.filter((user) => user.id !== userId)
        );
      })
      .catch((err) => console.error(err));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.gridContainer}>
        {favourites.length > 0 ? (
          favourites.map((user) => (
            <View key={user.id} style={styles.card}>
              <Image source={{ uri: user.Poster }} style={styles.poster} />
              <Text style={styles.title}>{user.Title}</Text>
              <Text style={styles.year}>{user.Year}</Text>
              <Pressable
                onPress={() => removeFromFav(user.id)}
                style={styles.deleteBtn}
              >
                <Text style={styles.deleteTxt}>Delete</Text>
              </Pressable>
            </View>
          ))
        ) : (
          <Text style={styles.noFavsText}>No favourites found</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#e52165',
    borderRadius: 5,
    backgroundColor: '#0d1137',
  },
  poster: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gold',
    marginBottom: 5,
  },
  year: {
    fontSize: 14,
    color: '#e52165',
    marginBottom: 10,
  },
  deleteBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#e52165',
    borderRadius: 5,
  },
  deleteTxt: {
    fontSize: 16,
    color: 'white',
  },
  noFavsText: {
    color: 'gold',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
});

export default Favourite;
