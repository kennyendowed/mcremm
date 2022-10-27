import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import AuthService from "../../../core/services/auth.service";
import LoadingSpinner from "../../Utility/spinner";
import "./EmailValidate.css";
// import background from "../../../assets/img/curved-images/curved6.jpg";
 import logo from "../../../assets/img/logo.svg";
import { display } from "@mui/system";


function EmailValidate() {
	const navigate = useNavigate();
	const { register, handleSubmit,   formState: { errors,isSubmitting, isDirty, isValid} } = useForm({ mode: "onChange" });
	const [showPassword, setShowPassword] = useState(false)
	// const [username, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const handleClick =()=>{
	// 	setShowpassword(true);

	// }
	const onSubmit =async (data) => {
	    // console.log(data.email);
		// console.log(data.username);
		  try {
			return new Promise((resolve) => {
					setTimeout(() => {
			  resolve();		
		 AuthService.Emailverify(data.code).then(
		  () => {
			navigate("/auth");
		
		  },
		  (ex) => {
			console.log(ex);
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

		
				if (typeof  ex.response.data.data != 'string') {
				  for (let err in  ex.response.data.data) {
					// console.log(err);
					let Msg = () => (
						<div>
							 <img src={logo} className="toaster-brand-img h-100 wi0" alt="main_logo" />
						<p> { ex.response.data.data[0].message } </p> 
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
	}, 2000);
});
	  } catch (err) {
		console.log(err);
	  }

	  };
	
  

	
	
	// const handleForgetPassword = async (e) => {
	//   e.preventDefault();
	//   try {
	// 	await AuthService.ForgetPassword(username, password).then(
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
	
			  <form className = "form"onSubmit={handleSubmit(onSubmit)}>
				
					  <div className="mb-3">
                          <input
						   className="form-control ForgetPassword_input"
                          type="text"
                          name="code"
                          placeholder="Otp"
			              {...register('code', { required: "Email Otp is required"})}
			            
                         />
						  <p className="error-color">{errors.code?.message}</p>
                      </div>                            
					  <div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className="mb-4 text-sm mx-auto">
                    Request new otp ? 👉️
					<Link
						to="/auth/reset-otp"
						  className="text-info text-gradient font-weight-bold">Click Me...</Link>
                  </p>
                </div>
					  <div className="text-center">
		  {!isSubmitting ? 
		              (
                      <button type="submit" className="btn bg-gradient-info w-100 mt-4 mb-0 "  disabled={!isDirty || !isValid}>Send Request</button> 
                      ) : (

                        <button
                          className="btn bg-gradient-info w-100 mt-4 mb-0"
                          disabled
                        >
                        <LoadingSpinner/> 
                        </button>
                      )
					  }

                    						
                       
                      </div>
					
      </form>
	 
	  </>
		

        
);
}

export default EmailValidate;