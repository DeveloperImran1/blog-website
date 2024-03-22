import { Link } from "react-router-dom";

const EmptyBookMarks = () => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center h-[calc(100vh-116px)]">
            <h1 className="text-5xl text-gray-500">No Book Marks</h1>
            {/* tailwind css button  */}
            <Link to="/blogs" className="px-5 mr-6 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">Read Blogs</span>
            </Link>
        
        </div>
    );
};

export default EmptyBookMarks;