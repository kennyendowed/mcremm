import './SaveReport.css';
import React, { useEffect, useState,createContext ,useMemo } from "react";
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import logo from "../../../assets/img/logo.svg";
import dashboardService from "../../../core/services/dashboard.service";
import { PulseLoader } from 'react-spinners';


const API_URL2 = process.env.REACT_APP_BaseApi_URL
const INITIAL_FORM_STATE = {
  serial: "",
  ref: "",
  weight: "",
  companyName: "",
  equipment: "",
  modeType: "",
  fleetNO: "",
  manufacturedYear: "",
  location: "",
  manufacturer: "",
  capacity:"",
 inspDate:"",
  nextInspDate:""
};

function SaveReport(){
  const [ file , setFile ] = useState([]) 
  const [formdata , setFormdata ] = useState(INITIAL_FORM_STATE)
  const [ items ,setItems ] = useState([])
  const [loading , setLoading] = useState(false)


  const handleFormStateChange = (event) => {
    const { name, value } = event.target;
    setFormdata({ ...formdata, [name] : value });
  };

  const handlefileEvent = (e) => {
    console.log("true");
    const file = e.target.files[0];

    console.log(e.target.files[0]);
    setFile(e.target.files[0]);

   

    console.log(file.type);
    // if (file.type !== "application/pdf") {
    //   toast.error("Only pdfs are allowed");
    //   return;
    // }
    // if (file.size > 2000000 ) {

    //   toast.error("Maximum file size is 2MB...");
   

    // } else {

    

    
  };

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setLoading(true)
    const token =  localStorage.getItem("token")
    const formData = new FormData();
   
    
    formData.append("ref", formdata.ref);
    formData.append("weight", formdata.weight);
    formData.append("capacity", formdata.capacity);
    formData.append("location", formdata.location);
    formData.append("manufacturer", formdata.manufacturer);
    formData.append("fleetNO", formdata.fleetNO);
    formData.append("companyName", formdata.companyName);
    formData.append("modeType", formdata.modeType);
    formData.append("nextInspDate", formdata.nextInspDate);
    formData.append("inspDate", formdata.inspDate);
    formData.append("manufacturedYear", formdata.manufacturedYear);
    formData.append("equipment", formdata.equipment);
    formData.append("avater", file);
    formData.append("serial", formdata.serial);
  
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    
    dashboardService.AddDocument(formData).then(
      (response) => {
         
          if(response.data[0].code === 200){
  
              console.log(response.data[0].data);
              const data = response.data[0].data
              console.log(data.manufacturedYear)
              setItems(response.data);
              let Msg = () => (
                  <div>
                      <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                      <p> {response.message} </p>
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
              setLoading(false) 
          }
          
      }  , 
          (ex) => {
                  // console.log(ex );
                  
                  if (ex.code === "ERR_NETWORK") {
                      let Msg = () => (
                          <div>
                              <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                              <p> {ex.message} </p>
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
  
                  if (ex.response.data.status === "FALSE") {
                      let Msg = () => (
                          <div>
                              <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                              <p> {ex.message}  </p>
                              <p>❌ {ex.response.data.data[0].message} ❌</p>
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
                  if (ex.response.data?.error.code === 404) {
                      let Msg = () => (
                          <div>
                              <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                              <p> {ex.message}  </p>
                              <p>❌ {ex.response.data.error.message} ❌</p>
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
                  
              }
              
          );
  
          
    }








    return (
        <>
          <form onSubmit = {handleSubmit}>
                  <div className="row">
                     <div className="col-12 col-xl-8 w-100">
                       <div className="card card-body border-0 shadow mb-4">
                                <div className="row">
                                  <div className="col-md-6 mb-3">
                                     <div>
                                        <label htmlFor="first_name">Reference number</label>
                                        <input 
                                         value = {formdata.ref}
                                         name = "ref"
                                         onChange = {handleFormStateChange}
                                        className="form-control" 
                                        id="first_name" 
                                        type="text"  
                                        required 
                                        />
                                     </div>
                                   </div>
                                   <div className="col-md-6 mb-3">
                                     <div>
                                        <label htmlFor="last_name">Customer Name</label>
                                        <input
                                         value ={formdata.companyName} 
                                         name = "companyName"
                                         onChange = {handleFormStateChange}
                                        className="form-control" 
                                        id="last_name" 
                                        type="text"  required />
                                     </div>
                                   </div>
                                 </div>
                                <div className="row align-items-center">
                                    <div className="col-md-6 mb-3">
                                       <label htmlFor="birthday">Equipment</label>
                                         <div className="input-group">
                                             
                                              <input
                                               value = {formdata.equipment} 
                                               name = "equipment"
                                               onChange = {handleFormStateChange}
                                            
                                              className="form-control" 
                                            
                                              type="text" 
                                              required 
                                              />
                                         </div>
                                     </div>
                                     <div className="col-md-6 mb-3">
                                         <label >sn/no</label>
                                          <input
                                           value = {formdata.serial} 
                                           name = "serial"
                                           onChange = {handleFormStateChange}
                                          className="form-control mb-0" 
                                         required
                                          />
                                        
                                   
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                        <label >model/type</label>
                                        <input
                                         value = {formdata.modeType}
                                         name = "modeType"
                                         onChange = {handleFormStateChange}
                                        className="form-control" 
                                        
                                         required
                                         />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                        <label >fleet no</label>
                                        <input 
                                        value ={formdata.fleetNO}
                                        name = "fleetNO"
                                        onChange = {handleFormStateChange}
                                        className="form-control" 
                                           required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                        <label >Manufacturer</label>
                                        <input
                                         value = {formdata.manufacturer}
                                         name = "manufacturer"
                                         onChange = {handleFormStateChange}

                                        className="form-control" 
                                       
                                         required/>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                        <label>Location</label>
                                        <input 
                                        value = {formdata.location}
                                        name = "location"
                                        onChange = {handleFormStateChange}
                                        className="form-control" 
                                         required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                        <label >Capacity</label>
                                        <input

                                        className="form-control" 
                                        value = {formdata.capacity} 
                                        name = "capacity"
                                        onChange = {handleFormStateChange} 
                                         required/>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                        <label>Weight</label>
                                        <input
                                        onChange = {handleFormStateChange} 
                                        value = {formdata.weight}
                                        name = "weight"
                                        className="form-control"  required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="email">Manufactured year</label>
                                        <input
                                        value = {formdata.manufacturedYear}
                                        name ="manufacturedYear"
                                            onChange = { handleFormStateChange }
                                        className="form-control" 
                                        id="email"  
                                         required/>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                        <label >insp date</label>
                                        <input 
                                      
                                        value ={formdata.inspDate}
                                        name  =  "inspDate"
                                        onChange = {handleFormStateChange}
                                        className="form-control" 
                                        type = "date" 
                                        required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                        <label>Next insp</label>
                                        <input
                                        type = "date"
                                        value = {formdata.nextInspDate}
                                        name = "nextInspDate"
                                        onChange = {handleFormStateChange}
                                        className="form-control" 
                                       
                                         required/>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="form-group mt-2">
                                        <label></label>
                                        <input
                                           type = "file"
                                           name = "file"
                                           className="form-control" 
                                           onChange={handlefileEvent}
                                         required/>
                                    </div>
                                </div>
                              
                            </div>
                     
                            <div className="mt-3">
                                <button className="btn btn-gray-800 mt-2 animate-up-2"  onClick={handleSubmit} type="submit">{loading ? <PulseLoader color="#fbbf0e" /> :"Save all"}</button>
                            </div>
                     
                      </div>
                    </div>
                    </div>
                    </form>
        </>
    )






}

export default SaveReport;