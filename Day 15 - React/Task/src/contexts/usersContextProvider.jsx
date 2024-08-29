import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
// 1-
export const usersContext = createContext();
const UsersContextProvider = ({ children }) => {
  const [usersArr, setUsers] = useState(null);
  const addUserFun = (data) => {
    const newUser = { ...data, id: uuid() };

    // Send a POST request to the server to add the new user
    axios.post("http://localhost:3000/users", newUser)
      .then((res) => {
        // After successfully adding, update the usersArr state
        setUsers([...usersArr, res.data]);
      })
      .catch((err) => {
        console.error("Failed to add user:", err);
      });
  };
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => setUsers(res.data));
  }, []);
  return (
    <usersContext.Provider value={{ usersArr, addUserFun }}>
      {children}
    </usersContext.Provider>
  );
};

export default UsersContextProvider;
