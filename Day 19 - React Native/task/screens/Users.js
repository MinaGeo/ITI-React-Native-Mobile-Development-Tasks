import React, { useContext, useState, useEffect } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { usersContext } from "../contexts/usersContextProvider";
import Search from "../components/Search";
import SimpleBackdrop from "../components/spinner";
import routes from "../utils/routes";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Users = () => {
  const { navigate } = useNavigation();
  const { users, loading, error } = useContext(usersContext);
  const [filteredArr, setFilteredArr] = useState([]);
  useEffect(() => {
    if (users && Array.isArray(users)) {
      setFilteredArr(users);
    }
  }, [users]);

  const addToFav = (userId) => {
    axios
      .patch(`http://192.168.1.16:4000/users/${userId}`, { Favourite: true })
      .then(() => {
        const updatedUsers = filteredArr.map((user) =>
          user.id === userId ? { ...user, Favourite: true } : user
        );
        setFilteredArr(updatedUsers); // Update local state to reflect change
      })
      .catch((err) => console.error(err));
  };

  const recWord = (data) => {
    const lowerCaseData = data.toLowerCase();
    if (users && Array.isArray(users)) {
      const filtered = users.filter((user) =>
        user.Title.toLowerCase().includes(lowerCaseData)
      );
      setFilteredArr(filtered);
    }
  };

  if (loading) return <SimpleBackdrop />;
  if (error) return <Text style={styles.errorText}>Error...</Text>;

  return (
    <ScrollView style={styles.container}>
      <Search recWord={recWord} />
      <View style={styles.gridContainer}>
        {filteredArr.length > 0 ? (
          filteredArr.map((user) => (
            <View key={user.id} style={styles.card}>
              <Image source={{ uri: user.Poster }} style={styles.poster} />
              <Text style={styles.title}>{user.Title}</Text>
              <Text style={styles.year}>{user.Year}</Text>
              <View style={styles.fav_ctr}>
                <Pressable
                  onPress={() => addToFav(user.id)}
                  style={[styles.favBtn, { opacity: user.Favourite ? 0.5 : 1 }]} // Apply opacity based on user.Favourite
                  disabled={user.Favourite} // Disable button if user.Favourite is true
                >
                  <Icon
                    name={user.Favourite ? 'heart' : 'heart-outline'}
                    size={24}
                    color={user.Favourite ? 'red' : 'gray'}
                  />
                </Pressable>
                <Pressable
                  onPress={() => navigate(routes.details, { userId: user.id })}
                  style={styles.arrowBtn}
                >
                  <Text style={styles.arrowTxt}>&#10142;</Text>
                </Pressable>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noUsersText}>No users found</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#e52165",
    borderRadius: 5,
    backgroundColor: "#0d1137",
  },
  poster: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gold",
    marginBottom: 5,
  },
  year: {
    fontSize: 14,
    color: "#e52165",
    marginBottom: 10,
  },
  fav_ctr: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Space out buttons
  },
  favBtn: {
    padding: 10,
    marginRight: 10,
  },
  arrowBtn: {
    padding: 10,
  },
  arrowTxt: {
    fontSize: 20,
  },
  noUsersText: {
    color: "gold",
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
  },
  errorText: {
    color: "gold",
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
  },
});

export default Users;
