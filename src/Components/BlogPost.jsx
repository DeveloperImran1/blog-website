import { Link } from "react-router-dom";
import errorPhoto from '../assets/404.jpg'

const BlogPost = ({ blog }) => {
    const {cover_image, title, description, published_at, id} = blog;
    return (
      <div  className="max-w-sm mx-auto group transition border-2 rounded-xl hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline dark:bg-gray-900">

     
            <Link to={`/blog/${id}`} rel="noopener noreferrer"  className="max-w-sm mx-auto group  hover:no-underline focus:no-underline dark:bg-gray-900">
                <img role="presentation" className="object-cover mt-[-20px] p-2 rounded-xl w-full  h-44 dark:bg-gray-500" src={cover_image || errorPhoto} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            </div>
    );
};

export default BlogPost;