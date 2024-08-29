import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Box = ({ colorName, hexCode }) => {
    return (
        <View style={[styles.view, { backgroundColor: hexCode }]}>
            <Text style={styles.text}>{colorName} {hexCode}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        padding: 10,
        marginHorizontal: 18,
        marginTop: 5,
        borderRadius: 5,
    },
    text: {
        fontSize: 16,  // Adjusted font size
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
});

export default Box;
