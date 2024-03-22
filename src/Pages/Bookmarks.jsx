import { useEffect, useState } from "react";
import Blogs from "../Components/Blogs";
import { deleteBlog, getBlogs } from "../utils";
import BlogPost from "../Components/BlogPost";
import EmptyBookMarks from "../Components/EmptyBookMarks";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect( ()=>{
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs)
    } ,[]);

    const handleDelete = id =>{
        deleteBlog(id);
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs)
    }

    if(blogs.length < 1){
        return <EmptyBookMarks></EmptyBookMarks>
    }
    return (
        <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {
                blogs.map(blog => <BlogPost handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></BlogPost>)
            }

        </div>

    );
};

export default Bookmarks;