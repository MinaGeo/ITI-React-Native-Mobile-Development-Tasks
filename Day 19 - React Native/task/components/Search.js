import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const Search = ({ recWord }) => {
    const [word, setWord] = useState("");

    const handleChange = (text) => {
        setWord(text);
        recWord(text);
    };

    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.input}
                value={word}
                onChangeText={handleChange}
                placeholder="Search by name"
                placeholderTextColor="gold"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        marginBottom: 20,
    },
    input: {
        borderColor: '#e52165',
        backgroundColor: "#0d1137",
        color:'gold',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
});

export default Search;
