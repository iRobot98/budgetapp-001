import { useState } from "react";
import { Link } from "react-router-dom";

const Xmark = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512">
        {/* <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
    </svg>
);

const HamburgerBars = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">
        {/* <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
);

export default function Layout({ children }) {
    const [dropDown, setDropDown] = useState(false);
    const [user_name, setUserName] = useState("default_name");
    const [phone_number, setPhoneNumber] = useState("phone_number");
    const toggleDropDown = () => setDropDown(!dropDown);
    return (
        <>
            <div id="header-banner">
                {/* User Image */}
                <div className="profile">
                    <img
                        className="profile_pic"
                        src="images/default_profile_picture.png"
                        alt=""
                    />
                    <div className="user_info">
                        <h3>{user_name}</h3>
                        <h4>{phone_number}</h4>
                    </div>
                </div>
                {/* Logo */}
                <img src="images/logo.png" className="logo" alt="" srcset="" />

                {/* User Control menu */}
                <div className="dropDown" onClick={toggleDropDown}>
                    {dropDown ? (
                        // <i class="fa-solid fa-bars"></i>
                        <Xmark />
                    ) : (
                        // <i class="fa-regular fa-circle-xmark"></i>
                        <HamburgerBars />
                    )}
                </div>
            </div>

            <div
                id="layout-children"
                className="flex flex-col justify-center items-center"
            >
                {children}
            </div>
            <nav id="navbar">
                <ul>
                    <li>
                        <Link to="/home">
                            {/* Home */}
                            <i class="fa-solid fa-house"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/search">
                            {/* Search */}
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contract">
                            {/* Contracts */}
                            <i class="fa-solid fa-scroll"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/market">
                            {/* Contracts */}
                            <i class="fa-solid fa-store"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
