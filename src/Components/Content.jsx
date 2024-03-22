import { Link, useLoaderData } from "react-router-dom";
import errorPhoto from '../assets/404.jpg'
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";


const Content = () => {
    const blog = useLoaderData();
    const { cover_image, title,  tags, body_html  } = blog;

    console.log(blog)
    return (
        <div className="w-full group border-2 p-5 rounded-xl  border-opacity-30 hover:no-underline focus:no-underline dark:bg-gray-900">


            <div className="w-full mx-auto group  hover:no-underline focus:no-underline dark:bg-gray-900">
                <img role="presentation" className="object-cover  rounded-xl w-full  h-full dark:bg-gray-500" src={cover_image || errorPhoto} />


                <div>
                    <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
                        {
                            tags.map((tag, index) => <Link key={index} className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900">{tag}</Link>)

                        }
                    </div>

                </div>

                <div className="space-y-2  ">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    
                    {/* <Markdown  rehypePlugins={[rehypeRaw]}>  {body_html}  </Markdown>  aikhane markdown tag er vitore {body_html} aita likhar age pore space diasilam tai kaj kortesilona. So airokom gap dewa jabena. */}
                    <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
                    
                </div>
            </div>

        </div>
    );
};

export default Content;