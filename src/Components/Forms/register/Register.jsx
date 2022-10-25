import React from "react";
import { useNavigate ,Link} from "react-router-dom";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import AuthService from "../../../core/services/auth.service";
import "./Register.css";
import logo from "../../../assets/img/logo.svg";
import LoadingSpinner from "../../../Components/Utility/spinner";

function Register() {
	const navigate = useNavigate();
	const emailRegExp =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const phoneRegExp =/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
	;
	const formSchema = Yup.object().shape({
		email: Yup.string()
		  .required('Email is mendatory').matches(emailRegExp, 'Email is not valid'),
		  lastname: Yup.string()
		  .required('lastname is mendatory'),
		  firstname: Yup.string()
		  .required('First name is mendatory'),  
		password: Yup.string()
		  .required('Password is mendatory')
		  .min(8, 'Password must be at 8 char long'),
		confirmPwd: Yup.string()
		  .required('Password is mendatory')
		  .min(8, 'Password must be at 8 char long')
		  .oneOf([Yup.ref('password')], 'Confirm Passwords does not match'),
		  phone: Yup.string().required('phone Number is mendatory').matches(phoneRegExp, 'Phone number is not valid').min(10, 'Phone number must be at 10 digit long')
	  })
	  const formOptions = { resolver: yupResolver(formSchema) }
	  const { register, handleSubmit, reset,   formState: { errors,isSubmitting, isDirty, isValid}  } = useForm(formOptions);
	// const [username, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	
	const onSubmit = (data) => {
	   
		  try {
		 AuthService.signup({...data}).then(
		  (data) => {
			console.log(data.data[0].message)
			const Msg = () => (
				<div>
					 <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
				<p> { data.data[0].message} </p> 
				</div>
			  )
			toast.success(Msg, {
				position: "top-right",
				autoClose: 10000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
			navigate("/auth");
			// window.location.reload();
		  },
		  (error) => {
			const Msg = () => (
				<div>
					 <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
				<p> { error.response.data.data[0].message} </p> 
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
			console.log(error.response.data.data[0].message);
		  }
		);
	  } catch (err) {
		console.log(err);
	  }

	  };
	//   console.log(errors);
  

	
	
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
			  <div className="d-flex align-items-center justify-content-between pb-0">
		
					  <div className="form-group mb-4">
            <input
              type="text"
              name="firstname"
              placeholder="Firstname"
			  {...register('firstname')}
			  className={`form-control BtnRESpaceRight ${errors.firstname ? 'is-invalid' : ''}`} 
            />
			 {!!errors.firstname?.message && <p style={{color: 'red'}}>{errors.firstname?.message}</p>}
          </div>
		
					  <div className="form-group mb-4">
            <input
              type="text"
              name="lastname"
              placeholder="Last name"
			  {...register('lastname')}
			  className={`form-control BtnRESpaceLeft ${errors.lastname ? 'is-invalid' : ''}`} 
            />
			 {!!errors.lastname?.message && <p style={{color: 'red'}}>{errors.lastname?.message}</p>}
          </div>
		  </div>
				
					  <div className="form-group mb-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
			  {...register('phone')}
			  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            />
          </div>
		  {!!errors.phone?.message && <p style={{color: 'red'}}>{errors.phone?.message}</p>}
		
		  <div className="form-group mb-4">
                          <input
						    className={`form-control  ForgetPassword_input ${errors.email ? 'is-invalid' : ''}`}
                          type="email"
                          name="email"
                          placeholder="Email"
						  {...register('email')}			             			            
                         />
						  <p className="error-color">{errors.email?.message}</p>
                      </div>  

			<div className="form-group mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
			  {...register('password')}
			  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            />
          </div>
          <p className="error-color">{errors.password?.message}</p>

		  <div className="form-group mb-4">
            <input
              type="password"
              name="confirmPwd"
			  className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}  
              placeholder="Confirm Password"
			  {...register('confirmPwd')}
            />
          </div>
		  <p className="error-color">{errors.confirmPwd?.message}</p>

		  <div className="form-check form-check-info text-left">
                  {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked /> disabled={!isDirty || !isValid} */}
                  <label className="form-check-label" >
                   By filling this form I agree the <a  className="text-dark font-weight-bolder">Terms and Conditions</a>
                  </label>
                </div>
		  <div className="text-center">
		  {!isSubmitting ? 
		              (
                      <button type="submit" className="btn bg-gradient-info w-100 mt-4 mb-0"  >Sign Up</button> 
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

export default Register


