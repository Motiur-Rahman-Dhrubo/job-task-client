import { BiTask } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import './nav.css'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        logOut();
        Swal.fire({
            position: "top",
            icon: "success",
            title: "Log Out Successful",
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(() => navigate("/sign-in"), 1500);
    }

    const links = <>
        <li><NavLink className='py-0 px-0 w-min whitespace-nowrap' to="/">Add Tasks</NavLink></li>
        <li><NavLink className='py-0 px-0 w-min whitespace-nowrap' to="/my-tasks">My Tasks</NavLink></li>
    </>

    return (
        <div className="sticky border-b top-0 z-50 bg-base-100">
            <div className="navbar w-11/12 mx-auto px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden shadow mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-nav menu-sm dropdown-content bg-base-100 z-[1] mt-3 w-52 p-3 border border-black font-semibold text-black text-base gap-1">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="flex text-2xl items-center font-bold"><BiTask />Y.task</Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-nav menu-horizontal font-semibold text-black text-base p-0 gap-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="">
                            <img src={user?.photoURL || "/assets/user.png"} alt="user_photo" className="w-12 h-12 object-cover rounded-full border border-black" />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 border border-black z-[1] w-52 p-2">
                            <li className="text-black font-semibold py-2 text-lg text-center">{user?.displayName}</li>

                            <li><button onClick={handleLogout} className="text-black justify-center font-semibold rounded-none hover:border border-black py-2 hover:py-[7px] hover:bg-black hover:text-white">Log Out</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;