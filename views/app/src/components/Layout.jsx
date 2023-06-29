import { Link } from "react-router-dom";

export default function Layout({ children }) {
    return (
        <>

         

            <div id="layout-children" className="flex flex-col">{children}</div>
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
                        <Link to="/contract">Contracts</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
