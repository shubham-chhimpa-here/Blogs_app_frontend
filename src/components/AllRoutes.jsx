import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "../pages/Home";
import BlogGrid from "../pages/BlogGrid";
import Blog from "../pages/Blog";
import Error from "./Error";
import Contact from "./Contact";

export default function AllRoutes() {
    return <>
        <Routes>


            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/blogs" element={<BlogGrid />} />
            <Route path="/contact" element= { <Contact />} />
            <Route path="/blogs/:blogId" element={<Blog />} />
            <Route path="/:error" element={<Error />} />

        </Routes>
    </>
}