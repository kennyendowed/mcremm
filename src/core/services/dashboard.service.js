import authHeader from "../services/auth-header";
import axios from "axios";

const API_URL = process.env.REACT_APP_BaseApi_URL+'hod';
const API_URL2 = process.env.REACT_APP_BaseApi_URL;

const fetchExistedUsers = () => {
  return axios.get(API_URL2 + "/GetAllStatusCount", { headers: authHeader() });
  // return fetch(API_URL + "/getAllExistedRMS", { method: 'GET', headers: authHeader()});
};


const fetchDocument =() =>{
  return axios.get(API_URL2 + "getReport", { headers: authHeader() });
}


const fetchAllCompany =() =>{
  return axios.get(API_URL2 + "GetallCompany", { headers: authHeader() });
}
const GetAllStatusCount = () =>{
  return axios.get(API_URL2 + "GetAllStatusCount",  { headers: authHeader() })
}

const AddDocument =(payload) =>{
  return axios.post(API_URL2 + "AddReport",payload, {headers: authHeader()})
  .then((response) => {
      return response.data;
  });
}



const DownloadDoc = (payload) =>{
  return axios.post(API_URL2 + "Download", payload, { headers: authHeader() })
  .then((response) => {
    return response.data;
});
}
const GetReport =(payload) =>{
  return axios.post(API_URL2 + "getReport",payload, {headers: authHeader()})
  .then((response) => {
  
      return response.data;
  });

}

const fetchExistedUsersRecords =(payload)=>{
  return axios.get(API_URL2 + "/GetAllStatusCount", { headers: authHeader() })
  .then((response) => {
      return response.data.data;
});
}


const dashboardService = {
  fetchExistedUsersRecords, AddDocument,GetReport,GetAllStatusCount,fetchDocument,fetchExistedUsers,GetReport,fetchAllCompany,fetchExistedUsers,DownloadDoc
};

export default dashboardService;
