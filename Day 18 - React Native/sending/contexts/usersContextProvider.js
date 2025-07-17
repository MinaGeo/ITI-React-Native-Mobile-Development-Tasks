import axios from 'axios';
import React, {createContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
export const usersContext = createContext();
const UsersContextProvider = ({children}) => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    }, []);
    return (
        <usersContext.Provider value={{users}}>
            {children}
        </usersContext.Provider>
    );
}

const styles = StyleSheet.create({})

export default UsersContextProvider;
