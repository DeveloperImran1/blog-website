import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-[calc(100vh-116px)] bg-base-200">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">Welcome to <span className="bg-300% font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">ByteBlaze</span></h1>
                        <p className="py-6">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
                    
                      {/* tailwind css button  */}
                        <Link to="/blogs" className="px-5 mr-6 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-white">Read Blogs</span>
                        </Link>
                        <Link to="/bookmarks" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-white">Bookmarks</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;