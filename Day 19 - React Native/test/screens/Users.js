import React, { useContext, useState, useEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { usersContext } from "../contexts/usersContextProvider";
import Search from "../components/Search";
import SimpleBackdrop from "../components/spinner";
import routes from "../utils/routes";
import style from "../style";

const Users = () => {
  const { navigate } = useNavigation();
  const { users, loading, error, dispatch } = useContext(usersContext);
  const [filteredArr, setFilteredArr] = useState(users);
  useEffect(() => {
    setFilteredArr(users);
  }, [users]);
  const recWord = (data) => {
    const lowerCaseData = data.toLowerCase();
    const filtered = users.filter((user) =>
      user.username.toLowerCase().includes(lowerCaseData)
    );
    setFilteredArr(filtered);
  };

  if (loading) return <SimpleBackdrop />;
  if (error) return <Text>Error...</Text>;
  return (
    <ScrollView style={styles.container}>
      <Search recWord={recWord} />
      {filteredArr.length > 0 ? (
        filteredArr.map((user) => (
          <View key={user.id} style={style.userContainer}>
            <Text style={style.username}>{user.username}</Text>
            <Pressable
              onPress={() => navigate(routes.details, { userId: user.id })}
              style={style.arrowBtn}
            >
              <Text style={style.arrowTxt}>&#10142;</Text>
            </Pressable>
          </View>
        ))
      ) : (
        <Text>No users found</Text>
      )}

      <Pressable
        onPress={() => dispatch({ type: "CLEAR" })}
        style={style.arrowBtn}
      >
        <Text style={style.arrowTxt}>Clear</Text>
      </Pressable>
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
    borderColor: "gray",
    borderRadius: 5,
  },
});

export default Users;
