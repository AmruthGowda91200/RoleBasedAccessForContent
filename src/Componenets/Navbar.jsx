import React from "react";
import { Link } from "react-router-dom";


const Navbar = ({ CURRENT_USER ,USER_TYPES }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        padding: 8,
        backgroundColor: "rgb(110, 110, 210)",
        borderBottom: "1px solid red",
        color: "white",
        marginBottom: 8,
      }}
    >
      <Link to="/">Home</Link>
      {(
    CURRENT_USER === USER_TYPES.ADMIN_USER ||
    CURRENT_USER === USER_TYPES.NORMAL_USER
  )?<><Link to="/user">User</Link></>:null}
      {(CURRENT_USER === USER_TYPES.ADMIN_USER?<><Link to="/admin">Admin</Link></>:null)}
      <div>
        current {CURRENT_USER}
      </div>
    </div>
  );
};

export default Navbar;
