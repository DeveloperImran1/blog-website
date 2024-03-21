import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    const [theme, setTheme] = useState("light");


    const handleToggle = event => {
        // console.log(event.target.checked); 
        if(event.target.checked){
            setTheme("synthwave")
        }
        else{
            setTheme("light")
        }
    };

    
    useEffect( ()=>{
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    } ,[theme]);


    return (
        <div className="navbar bg-base-100 shadow-lg px-4 fixed  z-10">
            <div className="flex-1">
                <NavLink to="/" className="btn btn-ghost gap-0 text-secondary text-3xl">Byte<span className="text-primary">Blaze</span></NavLink>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 flex gap-3">
                    {/* aikhane NavLink tag use korai jei button click kora thakbe tar moddhe akta active namer class automatice add hoia thakbe. Onno button a clik korle ager active remove hoia , porer button a active class add hoi.
                    Abar nicher niom a className er moddhe dynamick kore akta function likha jai. jar perameter a isActive ai name akta perameter distucture kore pawa jai. Current url er path and oi NavLink tag er path link same hole, isActive er value true hoi, ar porer kajgulo complete kore. */}
                    <NavLink to="/" className={({isActive})=> isActive ? 'font-bold text-xl text-primary' : 'font-bold  text-xl ' }>Home</NavLink>
                    <NavLink to="/blogs" className={({isActive})=> isActive ? 'font-bold text-xl text-primary' : 'font-bold  text-xl ' }>Blogs</NavLink>
                    <NavLink to="/bookmarks" className={({isActive})=> isActive ? 'font-bold text-xl text-primary' : 'font-bold  text-xl ' }>Bookmarks</NavLink>
                  

                </ul>

                <label className="cursor-pointer grid place-items-center ml-[20px]">
                    <input  onChange={handleToggle}  type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>

    );
};

export default Nav;