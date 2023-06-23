import { Outlet, Link } from "react-router-dom";



export default function Layout({children}) {
    return (
        <div>
            <nav id="navbar">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <Link to="/contract">Contracts</Link>
                    </li>
                </ul>
            </nav>

            <div>
                {children}
            </div>
        </div>
    )
};