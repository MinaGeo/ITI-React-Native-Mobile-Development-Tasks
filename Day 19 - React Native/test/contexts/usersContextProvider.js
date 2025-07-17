import axios from 'axios';
import useAxios from 'axios-hooks';
import React, { Children, createContext, useEffect, useReducer, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { usersReducer } from '../reducers/usersReducers';
export const usersContext = createContext();
const UsersContextProvider = ({children}) => {
    const [users, dispatch] = useReducer(usersReducer,[]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    // const [{data: users,loading,error},refetch] = useAxios({url:"https://jsonplaceholder.typicode.com/users"})
    useEffect( () => {
        //3.
        async function getData(){
            try{
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            const data = res.data;
            dispatch({type:"ADDUsers",payload: data});
            setLoading(false);
            }
            catch(err){
                setError(err);
            }
        }
        getData();        


        // 1.
        // axios.get("https://jsonplaceholder.typicode.com/users")
        //     .then(res => setUsers(res.data))
        //     .catch(err => console.error(err));
    }, []);
    return (
        <usersContext.Provider value={{users, loading, error, dispatch}}>

            {children}
        </usersContext.Provider>
    );
}

const styles = StyleSheet.create({})

export default UsersContextProvider;
