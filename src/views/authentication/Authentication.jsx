import React from "react"
import { useNavigate,Link } from "react-router-dom";
import {useLocation} from "react-router-dom"
 import background from "../../assets/img/illustrations/signin.svg";
import logo from "../../assets/img/logo.svg";
import "./Authentication.css";
import Login from "../../Components/Forms/login";
import Register from "../../Components/Forms/register";
import EmailValidate from "../../Components/Forms/emailValidate";
import ForgetPassword from "../../Components/Forms/forgetPassword";
import ResetEmailOtpValidate from "../../Components/Forms/resetEmailOtpValidate";



function Authentication(){
    const location = useLocation()

    console.log(location.pathname)
return (
    <>
       <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
            <div className="container">
                {/* <p className="text-center">
                    <a href="../dashboard/dashboard.html" className="d-flex align-items-center justify-content-center">
                        <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                        Back to homepage
                    </a>
                </p> */}
                <div className="row justify-content-center form-bg-image" style={{ backgroundImage: `url(${background})` }} data-background-lg>
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                            <div className="text-center text-md-center mb-4 mt-md-0">
                                <h1 className="mb-0 h3">👉️ Onboared </h1><hr />
                            </div>
                            {(location.pathname ==="/auth") ?     <Login /> : (location.pathname ==="/auth/reset-otp") ?    <ResetEmailOtpValidate /> : (location.pathname ==="/auth/emailValidate") ?    <EmailValidate /> : (location.pathname ==="/auth/register") ?    <Register /> : (location.pathname ==="/auth/forget-password") ?  <ForgetPassword /> :( 
                 "NULL........"
                       )}
                            <div className="mt-3 mb-4 text-center">
                                <span className="fw-normal"></span>
                            </div>
                            <div className="d-flex justify-content-center my-4">
                             
                            </div>
                            <div className="d-flex justify-content-center align-items-center mt-4">
                            {(location.pathname ==="/auth/register") ? 
                             <span className="fw-normal">
                           Already have an account ?  👉️ 
                             <Link
                 to="/auth"
                 className="fw-bold">
    Sign in
             </Link>
                            
                         </span> :  <span className="fw-normal">
                            Not registered ?  👉️ 
                            <Link
                to="/auth/register"
                className="fw-bold">
            Create account
            </Link>
                           
                        </span> }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    // <div className="page-header min-vh-100 ">
    //         <div className="container w-100">
    //             <div className="row ">                 

	// 		  <div className="col-lg-8">
				  
	// 			  <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{ backgroundImage: `url(${background})` }}>
         
    //       </div>
		
	// 		  </div>
    //     {/* <div className="content">
    //        <p>
    //     <Link
	// 					to="/auth/register"
	// 					className="btn btn-outline-primary btn-sm mb-0 BtnSpaceRight">
	// 					Sign up
	// 				</Link>
    //     </p></div> */}
    //     <div className="col-xl-4 col-lg-5 col-md-4  d-flex flex-column " >
    //                   <div className=" card card-plain ">
    //                        <div className="card-body pb-0 text-left login_head" style={{backgroundColor:"white" }}>
                         
    //                        <h4 className="font-weight-bolder text-center sp">PROVI<span className="text-info text-gradient logText">BILL</span></h4>
    //                        {(location.pathname ==="/auth") || (location.pathname ==="/auth/register") ? 
    //                         <p className="mb-0">Welcome back! Please login to your account</p> : <p> Enter your email and we send you a password reset link </p> }
    //                   </div>
    //           <div className="card-body login_body " style = {{backgroundColor :"white"}}>
    //               {(location.pathname ==="/auth") ?     <Login /> : (location.pathname ==="/auth/register") ?    <Register /> : (location.pathname ==="/auth/forget-password") ?  <ForgetPassword /> :( 
    //              "NULL........"
    //                    )}
    //           </div>
	// 				</div>
	// 		  </div>
	// 		</div>
	// 	  </div>

	
        
);
}

export default Authentication;