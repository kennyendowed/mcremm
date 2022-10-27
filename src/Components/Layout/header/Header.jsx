import React from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";
import { Navbar, Onheader } from "../..";
import ActionCard from "../../Utility/ActionCard/ActionCard";
import { useAuthContext } from "../../../core/modules";

function Header() {
  const { currentUser } = useAuthContext();
  const location = useLocation();
  return (
    <>
      {/* {location.pathname.includes('/auth') ? <Onheader /> : <Navbar />} */}
      {currentUser ?(
      <div>
         <Navbar />
        
      </div>

           ):(
       <Onheader /> 
       )} 
    </>
  );

}

export default Header;
