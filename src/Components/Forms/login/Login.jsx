import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import AuthService from "../../../core/services/auth.service";
import {ScaleLoader} from "react-spinners";
import "./Login.css";
// import background from "../../../assets/img/curved-images/curved6.jpg";
 import logo from "../../../assets/img/logo.svg";
import { display } from "@mui/system";


function Login() {
	const navigate = useNavigate();
	const { register, handleSubmit,   formState: { errors,isSubmitting, isDirty, isValid} } = useForm({ mode: "onChange" });
	const [showPassword, setShowPassword] = useState(false)
	const [loading , setLoading ] = useState(false)
	// const [username, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const handleClick =()=>{
	// 	setShowpassword(true);

	// }
	const onSubmit =async (data) => {
	    // console.log(data.email);
		// console.log(data.username);
		setLoading(true)
		  try {
		 AuthService.login(data.email, data.password).then(
		  (result) => {
			setLoading(false)
			// const Msg = () => (
			// 	<div>
			// 		 <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
			// 	<p> { data.data[0].message} </p> 
			// 	</div>
			//   )
			// toast.success(Msg, {
			// 	position: "top-right",
			// 	autoClose: 10000,
			// 	hideProgressBar: false,
			// 	closeOnClick: true,
			// 	pauseOnHover: true,
			// 	draggable: true,
			// 	progress: undefined,
			// 	});
				if(result.email_verify ==="unverify"){
					navigate("/auth/emailValidate");
				}
				else{
					navigate("/dashboard");
				}
		
			
		  },
		  (ex) => {
			console.log(ex.response.data.status);
	// 		 if (typeof ex.message == 'string'){
    //     let Msg = () => (
    //       <div>
    //          <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
    //       <p> {  ex.message} </p> 
    //       </div>
    //       )
    //     toast.error(Msg, {
    //       position: "top-right",
    //       autoClose: 10000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       });
    //   }
	setLoading(false)
		
				if (typeof  ex.response.data.data != 'string') {
				  for (let err in  ex.response.data.data) {
					// console.log(err);
					let Msg = () => (
						<div>
							 <img src={logo} className="toaster-brand-img h-100 wi0" alt="main_logo" />
						<p> { ex.response.data.data[0].message} </p> 
						</div>
					  )
					toast.error(Msg, {
						position: "top-right",
						autoClose: 10000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						});
				   // this._globals.toastAlert( ex.response.data.error.data[0].message, 'error');
				  }
				}
		
			// console.log(ex.response.data.data[0].message);
		  }
		);
	
	  } catch (err) {
		console.log(err);
		setLoading(false)	
        let Msg = () => (
          <div>
             <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
          <p> {  err.message} </p> 
          </div>
          )
        toast.error(Msg, {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
    
	  }
	//   finally{
	
		
	//   }

	  };
	
  

	
	
	// const handleLogin = async (e) => {
	//   e.preventDefault();
	//   try {
	// 	await AuthService.login(username, password).then(
	// 	  () => {
	// 		navigate("/dashboard");
	// 		window.location.reload();
	// 	  },
	// 	  (error) => {
	// 		const Msg = () => (
	// 			<div>
	// 				 <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
	// 			<p> { error.response.data.data[0].message} </p> 
	// 			</div>
	// 		  )
	// 		toast.error(Msg, {
	// 			position: "top-right",
	// 			autoClose: 10000,
	// 			hideProgressBar: false,
	// 			closeOnClick: true,
	// 			pauseOnHover: true,
	// 			draggable: true,
	// 			progress: undefined,
	// 			});
	// 		console.log(error.response.data.data[0].message);
	// 	  }
	// 	);
	//   } catch (err) {
	// 	console.log(err);
	//   }
	// };
	

	return (
	<>
	
			  <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
				
					  <div className="form-group mb-4">
                          <input
						   className="form-control login_input"
                          type="email"
                          name="email"
                          placeholder="Email"
			              {...register('email', { required: "Email is required", maxLength: 80 })}
			              
						 aria-label="Email" 
						 aria-describedby="email-addon"
                         />
						  <p className="error-color">{errors.email?.message}</p>
                      </div>
                     {/* <p className="error-color">{errors.username?.message}</p> */}
		         
			        <div className="form-group mb-4 relative password-field">
                       <input
                           type = {showPassword ? "text" : "password"}
                           name="password"
			                className=" form-control login_input"  aria-label="Email" aria-describedby="email-addon"
                            placeholder="Password"
			              {...register('password',{
                          required: "Password is required",
                          minLength: {
                          value: 4,
                          message: "Password must be more than 4 characters",
                          },
                // maxLength: {
                //   value: 10,
                //   message: "Password cannot exceed more than 10 characters",
                // },
              })}
            />
			<div className="icon-container" onClick={() => setShowPassword(shown => !shown)}>
				{showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
			</div>
          </div>
          <p className="error-color">{errors.password?.message}</p>
	

		  <div className="d-flex align-items-center justify-content-between pb-0">
		   
		              
                      <button type="submit" className="btn bg-gradient-info w-100 mt-4 mb-0"  >{loading ? <ScaleLoader color="#fbbf0e" /> :"Login"}</button> 
                     
					      
            </div>
			<div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className="mb-4 text-sm mx-auto">
                    Forgot Password ? 
					<Link
						to="/auth/forget-password"
						  className="text-info text-gradient font-weight-bold">Click Me...</Link>
                  </p>
                </div>
					
      </form>
	 
	  </>
		

        
);
}

export default Login;