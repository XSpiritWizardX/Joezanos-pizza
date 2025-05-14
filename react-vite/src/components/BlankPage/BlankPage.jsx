
import "./BlankPage.css"
import { NavLink } from "react-router-dom";

function BlankPage() {



  return (
    <div
    className="pro-divvy"
    >
        <h1>FEATURE COMING SOON</h1>

            <NavLink
            to='/'
            className="nav-linky"
            >
            BACK TO HOME
            </NavLink>
    </div>
  );
}

export default BlankPage;
