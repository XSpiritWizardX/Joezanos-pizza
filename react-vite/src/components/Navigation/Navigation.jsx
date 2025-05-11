import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  return (
    <>

    <div
    className="nav-bar"
    >


        <ProfileButton />




      <img
      className="logo-img"
      src="https://res.cloudinary.com/dl6ls3rgu/image/upload/v1746919467/joezanos_pizza_name_jkhxhp_e_background_removal_c_fill_w_400_h_240_f_png_ziegza.png"/>






      <div
      className="home-linky"
      >
        <NavLink to="/">Home</NavLink>
      </div>
    </div>
    </>
  );
}

export default Navigation;
