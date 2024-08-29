import { useContext, useState } from "react";
import classes from "../styles/AddUser.module.css";
import { useNavigate } from "react-router-dom";
import { usersContext } from "../contexts/usersContextProvider";

const AddUser = () => {
    const { addUserFun } = useContext(usersContext);
    const [user, setUser] = useState({ Title: "", Year: "", Genre: "", Plot: "", Poster: "" });
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        addUserFun(user);
        setUser({ Title: "", Year: "", Genre: "", Plot: "", Poster: "" });
        navigate("/");
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>Add a New Movie</h1>
            <form onSubmit={handleSubmit} className={classes.form}>
                <label className={classes.label}>Title:</label>
                <input className={classes.input} name="Title" value={user.Title} onChange={handleChange} required />
                
                <label className={classes.label}>Year:</label>
                <input className={classes.input} name="Year" value={user.Year} onChange={handleChange} required />
                
                <label className={classes.label}>Genre:</label>
                <input className={classes.input} name="Genre" value={user.Genre} onChange={handleChange} required />
                
                <label className={classes.label}>Plot:</label>
                <textarea className={classes.textarea} name="Plot" value={user.Plot} onChange={handleChange} required />
                
                <label className={classes.label}>Poster URL:</label>
                <input className={classes.input} name="Poster" value={user.Poster} onChange={handleChange} required />
                
                <button className={classes.btn} type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddUser;
