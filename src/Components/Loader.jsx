import { ScaleLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex justify-center items-center flex-col min-h-[calc(100vh-116px)]">
            {/* aikhne loader er namta dita hobe. jeita website theke pawa jabe. ar upore impont korte hobe. */}
            <ScaleLoader size={100} color='#F92FD3' ></ScaleLoader>   
        </div>
    );
};

export default Loader;