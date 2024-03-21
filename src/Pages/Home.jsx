import Hero from "../Components/Hero";
import wave from '../assets/wave.svg'

const Home = () => {
    return (
        <div className="flex flex-col relative item-center justify-between min-h-[calc(100vh-116px)]">
            <Hero></Hero>
            <img className="w-full absolute bottom-0" src={wave} alt="" />
        </div>

    );
};

export default Home;