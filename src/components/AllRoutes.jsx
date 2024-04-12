import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import BlogGrid from "../pages/BlogGrid";
import Blog from "../pages/Blog";
import Error from "./Error";
import BlogForm from "./BlogForm";

export default function AllRoutes() {
    return <>
        <Routes>


            <Route path="/" element={<BlogGrid />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
<Route path="/write" element= {<BlogForm />} />
            <Route path="/blog/:blogId" element={<Blog />} />
            <Route path="/:error" element={<Error />} />

        </Routes>
    </>
}