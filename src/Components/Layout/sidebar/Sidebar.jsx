import React, { useState } from "react";
import "./Sidebar.css";
import { useNavigate, Link,useLocation } from "react-router-dom";
 import logo from "../../../assets/img/logo.svg";
 import avater from "../../../assets/img/team/profile-picture-3.jpg";
import AuthService from "../../../core/services/auth.service";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const location = useLocation()
  const [sideMenu,setSideDropped] =useState(false);
  const [toggoleNotify,setNotificationsToggle] =useState(false);
  const [dropDown, setDropdown] = useState(false);
  const [toggole ,setToggle]= useState(false);
  // const { currentUser } = useAuthContext();
  function toggleDropdown (){
    if(dropDown ===false){
      setDropdown(true)
    }
    else{
      setDropdown(false)
    }
  
   }

   function toggleSideMenuState() {
    if (sideMenu ===false) {
      setSideDropped(true)
     } else {
      setSideDropped(false)
          }
       }

   function toggleNavState() {
     if (toggole ===false) {
      setToggle(true)
      } else {
        setToggle(false)
           }
        }
        function toggleNotificationsNavState() {
          if (toggoleNotify ===false) {
           setNotificationsToggle(true)
           } else {
            setNotificationsToggle(false)
                }
             }
             function toggleNavState() {
              if (toggole ===false) {
               setToggle(true)
               } else {
                 setToggle(false)
                    }
                 }
  const logOut = () => {
    AuthService.logout();
    navigate("/auth");
    // window.location.reload();
  };

  

    return (
      <>      
  
  <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
    <a className="navbar-brand me-lg-5" href="../../index.html">
        <img className="navbar-brand-dark" src={logo} alt="Volt logo" /> <img className="navbar-brand-light" src="../../assets/img/brand/dark.svg" alt="Volt logo" />
    </a>
    <div className="d-flex align-items-center">
        <button className="navbar-toggler d-lg-none collapsed" type="button" onClick={toggleNavState} data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    </div>
</nav>

        <nav id="sidebarMenu" className={toggole ?"sidebar d-lg-block bg-gray-800 text-white collapse show " : "sidebar d-lg-block bg-gray-800 text-white collapse"} data-simplebar>
  <div className="sidebar-inner px-4 pt-3">
    <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
      <div className="d-flex align-items-center">
        <div className="avatar-lg me-4">
          <img src={avater} className="card-img-top rounded-circle border-white"
            alt="Bonnie Green" />
        </div>
        <div className="d-block">
          <h2 className="h5 mb-3">Hi, Jane</h2>
          <a  onClick={logOut} className="btn btn-secondary btn-sm d-inline-flex align-items-center">
            <svg className="icon icon-xxs me-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>            
            Sign Out
          </a>
        </div>
      </div>
      <div className="collapse-close d-md-none">
        <a  onClick={toggleNavState} data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true"
            aria-label="Toggle navigation">
            <svg className="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
      </div>
    </div>
    <ul className="nav flex-column pt-3 pt-md-0">
      <li className="nav-item">
        <a href="../../index.html" className="nav-link d-flex align-items-center">
          <span className="sidebar-icon">
            <img src={logo} height="20" width="20" alt="Volt Logo" />
          </span>
          <span className="mt-1 ms-1 sidebar-text">Mcremm</span>
        </a>
      </li>
      <li className="nav-item">
      <Link to={"/"} className={location.pathname === '/dashboard' ? 'nav-link active':'nav-link'}>      
         <span className="sidebar-icon">
            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
          </span> 
          <span className="sidebar-text">Dashboard</span>     
        </Link>
      </li>
      {/* <li className="nav-item" onClick={() => logOut()}>
        <span  className="nav-link  collapsed  d-flex justify-content-between align-items-center"
          data-bs-toggle="collapse" data-bs-target="#submenu-app">
          <span>
            <span className="sidebar-icon">
              <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
            </span> 
            <span className="sidebar-text">Tables</span>
          </span>
          <span className="link-arrow">
            <svg className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </span>
        </span>
        <div className={dropDown ? "multi-level collapse show": "multi-level collapse "}
          role="list" id="submenu-app" aria-expanded={dropDown ?"true": "false"}>
          <ul className="flex-column nav">
            <li className="nav-item ">
              <a className="nav-link" href="../../pages/tables/bootstrap-tables.html">
                <span className="sidebar-text">Bootstrap Tables</span>
              </a>
            </li>
          </ul>
        </div>
      </li> */}

<li className="nav-item" onClick={() => logOut()}>
        <a className="nav-link">
     
      <span className="sidebar-icon">
              <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
            </span> 
          <span className="sidebar-text">Logout</span>     
          </a>
      </li>
      {/* <li className="nav-item">
      <Link to={"/Report"} className={location.pathname === '/report' ? 'nav-link d-flex justify-content-between active':'nav-link d-flex justify-content-between'}>   
          <span>
            <span className="sidebar-icon">
              <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            </span>
            <span className="sidebar-text">Report</span>
          </span>
           <span>
            <span className="badge badge-sm bg-secondary ms-1 text-gray-800">Pro</span>
          </span> 
        </Link>
      </li> */}
   
        {/*
      <li className="nav-item" onClick={() => toggleDropdown()}>
        <span
          className={dropDown ? "nav-link d-flex justify-content-between align-items-center ":"nav-link  collapsed  d-flex justify-content-between align-items-center" }
          data-bs-toggle="collapse" data-bs-target="#submenu-app">
          <span>
            <span className="sidebar-icon">
              <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
            </span> 
            <span className="sidebar-text">Tables</span>
          </span>
          <span className="link-arrow">
            <svg className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </span>
        </span>
        <div className={dropDown ? "multi-level collapse show": "multi-level collapse "}
          role="list" id="submenu-app" aria-expanded={dropDown ?"true": "false"}>
          <ul className="flex-column nav">
            <li className="nav-item ">
              <a className="nav-link" href="../../pages/tables/bootstrap-tables.html">
                <span className="sidebar-text">Bootstrap Tables</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
     <li className="nav-item" onClick={() => toggleDropdown()}>
        <span
      className={dropDown ? "nav-link d-flex justify-content-between align-items-center ":"nav-link  collapsed  d-flex justify-content-between align-items-center" }
          data-bs-toggle="collapse" data-bs-target="#submenu-pages">
          <span>
            <span className="sidebar-icon">
              <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
            </span> 
            <span className="sidebar-text">Page examples</span>
          </span>
          <span className="link-arrow">
            <svg className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </span>
        </span>
        <div className={dropDown ? "multi-level collapse show": "multi-level collapse "} role="list"
          id="submenu-pages" aria-expanded={dropDown ?"true": "false"}>
          <ul className="flex-column nav">
            <li className="nav-item">
              <a className="nav-link" href="../../pages/examples/sign-in.html">
                <span className="sidebar-text">Sign In</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../../pages/examples/sign-up.html">
                <span className="sidebar-text">Sign Up</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../../pages/examples/forgot-password.html">
                <span className="sidebar-text">Forgot password</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../../pages/examples/reset-password.html">
                <span className="sidebar-text">Reset password</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../../pages/examples/lock.html">
                <span className="sidebar-text">Lock</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../../pages/examples/404.html">
                <span className="sidebar-text">404 Not Found</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../../pages/examples/500.html">
                <span className="sidebar-text">500 Not Found</span>
              </a>
            </li>
          </ul>
        </div>
      </li> 
      <li className="nav-item">
        <span
          className="nav-link  collapsed  d-flex justify-content-between align-items-center"
          data-bs-toggle="collapse" data-bs-target="#submenu-components">
          <span>
            <span className="sidebar-icon">
              <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path><path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </span> 
            <span className="sidebar-text">Components</span>
          </span>
          <span className="link-arrow">
            <svg className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </span>
        </span>
        <div className="multi-level collapse " role="list"
          id="submenu-components" aria-expanded="false">
          <ul className="flex-column nav">
            <li className="nav-item">
              <a className="nav-link" target="_blank"
                href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/components/accordions/">
                <span className="sidebar-text">All Components</span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="../../pages/components/buttons.html">
                <span className="sidebar-text">Buttons</span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="../../pages/components/notifications.html">
                <span className="sidebar-text">Notifications</span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="../../pages/components/forms.html">
                <span className="sidebar-text">Forms</span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="../../pages/components/modals.html">
                <span className="sidebar-text">Modals</span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="../../pages/components/typography.html">
                <span className="sidebar-text">Typography</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>
   */}
    </ul>
  </div>
</nav>

    
    

  </>
  )
  }
  
  
  export default Sidebar;
  