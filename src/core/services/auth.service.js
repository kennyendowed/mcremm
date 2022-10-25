import axios from "axios";
import jwt_decode from 'jwt-decode';
// const config = require("../config/db.config.js");

const API_URL = process.env.REACT_APP_BaseApi_URL+'auth';

const signup = (payload) => {
  return axios
    .post(API_URL + "/signup", {
      ...payload,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/signin", {
      email,
      password,
    })
    .then((response) => {
      if(response.data.data[0].email_verify==="unverify"){

      }
      else if(response.data.data[0].accessToken) {
      
         localStorage.setItem("user",JSON.stringify( jwt_decode(response.data.data[0].accessToken)));
        localStorage.setItem("token", JSON.stringify(response.data.data[0].accessToken));
      }

      return response.data.data[0];
    });
};

const reSendOtp = (emailOrPhone) => {
  return axios
    .post(API_URL + "/re-send-otp", {
      emailOrPhone
    })
    .then((response) => {
       return response.data.data[0];
    });
};


const Emailverify  = (code) => {
  return axios
    .post(API_URL + "/verify", {
      code
    })
    .then((response) => {

      return response.data.data[0];
    });
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  
  
};

const getCurrentUser = () => {
  // console.log(jwt_decode(localStorage.getItem("user")))
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  login,Emailverify,
  logout,signup,
  getCurrentUser,reSendOtp
};

export default authService;
