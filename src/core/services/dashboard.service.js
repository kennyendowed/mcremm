import authHeader from "../services/auth-header";
import axios from "axios";

const API_URL = process.env.REACT_APP_BaseApi_URL+'hod';
const API_URL2 = process.env.REACT_APP_BaseApi_URL;

const fetchExistedUsers = () => {
  return axios.get(API_URL2 + "/GetAllStatusCount", { headers: authHeader() });
  // return fetch(API_URL + "/getAllExistedRMS", { method: 'GET', headers: authHeader()});
};

const fetchRMSCustomerUsersList =(payload) =>{
  return axios.post(API_URL2 + "getRMSCustomerList",payload, {headers: authHeader()})
  .then((response) => {
      return response.data;
  });
}

const fetchAllDeparment =() =>{
  return axios.get(API_URL2 + "/GetDeparment", { headers: authHeader() });
}

const GetAccountInfo =(payload) =>{
  return axios.post(API_URL2 + "GetAccountInfo",payload, {headers: authHeader()})
  .then((response) => {
      return response.data;
  });
}

const ReassignRequest = (payload) => {
  return axios.post(API_URL2 + "ReassignRequest",payload, {headers: authHeader()})
  .then((response) => {
      return response.data;
  });
}

const ActionRequest =(payload) =>{
  return axios.post(API_URL2 + "ApproveDeclineRequests", payload, { headers: authHeader() })
  .then((response) => {
    return response.data;
});
}

const fetchPendingRequests = (payload) =>{
  return axios.post(API_URL2 + "GetAllPendingRequests", payload, { headers: authHeader() })
  .then((response) => {
    return response.data;
});
}

const fetchTreatedRequests = (payload) =>{
  return axios.post(API_URL2 + "GetAllTreatedRequests", payload, { headers: authHeader() })
  .then((response) => {
    return response.data;
});
}
const GetReport =(payload) =>{
  return axios.post(API_URL2 + "GetAllReport",payload, {headers: authHeader()})
  .then((response) => {
      return response.data;
  });
}


const dashboardService = {
  GetReport,fetchTreatedRequests,fetchAllDeparment,fetchPendingRequests,fetchExistedUsers,fetchRMSCustomerUsersList,GetAccountInfo,ReassignRequest,ActionRequest
};

export default dashboardService;
