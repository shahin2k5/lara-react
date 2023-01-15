import react from "react";
import { Outlet, Link } from "react-router-dom";

const LayoutWeb = ()=>{
    return (<>
                <h3>Welcome main page</h3>
                <nav>
                    <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    </ul>
                </nav>
                <Outlet/>
            </>)
}

export default LayoutWeb;