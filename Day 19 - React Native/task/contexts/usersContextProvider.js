import React, { createContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import db from '../db.json'; 
import useAxios from 'axios-hooks';

export const usersContext = createContext();

const UsersContextProvider = ({ children }) => {
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState("");

    const [{data: users,loading,error},refetch] = useAxios({url:"http://192.168.1.16:4000/users"})
    // console.warn(users)
    
    // useEffect(() => {
        // try {
            // setUsers(db.users);
            // setLoading(false);
        // } catch (err) {
            // setError("Failed to load local data");
            // setLoading(false);
        // }
    // }, []);

    return (
        <usersContext.Provider value={{ users, loading, error }}>
            {children}
        </usersContext.Provider>
    );
};

const styles = StyleSheet.create({});

export default UsersContextProvider;
