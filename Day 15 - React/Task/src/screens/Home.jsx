import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Users from "../components/Users";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
}

export default Home;
