import './SaveReport.css';
import React, { useEffect, useState,createContext ,useMemo } from "react";
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import logo from "../../../assets/img/logo.svg";
import dashboardService from "../../../core/services/dashboard.service";


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
                  <div class="row">
                     <div class="col-12 col-xl-8 w-100">
                       <div class="card card-body border-0 shadow mb-4">
                         
                             <form>
                                <div class="row">
                                  <div class="col-md-6 mb-3">
                                     <div>
                                        <label for="first_name">Reference number</label>
                                        <input 
                                         value = {formdata.ref}
                                         name = "ref"
                                         onChange = {handleFormStateChange}
                                        class="form-control" 
                                        id="first_name" 
                                        type="text"  
                                        required 
                                        />
                                     </div>
                                   </div>
                                   <div class="col-md-6 mb-3">
                                     <div>
                                        <label for="last_name">Customer Name</label>
                                        <input
                                         value ={formdata.companyName} 
                                         name = "companyName"
                                         onChange = {handleFormStateChange}
                                        class="form-control" 
                                        id="last_name" 
                                        type="text"  required />
                                     </div>
                                   </div>
                                 </div>
                                <div class="row align-items-center">
                                    <div class="col-md-6 mb-3">
                                       <label for="birthday">Equipment</label>
                                         <div class="input-group">
                                             
                                              <input
                                               value = {formdata.equipment} 
                                               name = "equipment"
                                               onChange = {handleFormStateChange}
                                            
                                              class="form-control" 
                                            
                                              type="text" 
                                              required 
                                              />
                                         </div>
                                     </div>
                                     <div class="col-md-6 mb-3">
                                         <label >sn/no</label>
                                          <input
                                           value = {formdata.serial} 
                                           name = "serial"
                                           onChange = {handleFormStateChange}
                                          class="form-control mb-0" 
                                         required
                                          />
                                        
                                   
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label >model/type</label>
                                        <input
                                         value = {formdata.modeType}
                                         name = "modeType"
                                         onChange = {handleFormStateChange}
                                        class="form-control" 
                                        
                                         required
                                         />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label >fleet no</label>
                                        <input 
                                        value ={formdata.fleetNO}
                                        name = "fleetNO"
                                        onChange = {handleFormStateChange}
                                        class="form-control" 
                                           required />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label >Manufacturer</label>
                                        <input
                                         value = {formdata.manufacturer}
                                         name = "manufacturer"
                                         onChange = {handleFormStateChange}

                                        class="form-control" 
                                       
                                         required/>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label>Location</label>
                                        <input 
                                        value = {formdata.location}
                                        name = "location"
                                        onChange = {handleFormStateChange}
                                        class="form-control" 
                                         required />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label >Capacity</label>
                                        <input

                                        class="form-control" 
                                        value = {formdata.capacity} 
                                        name = "capacity"
                                        onChange = {handleFormStateChange} 
                                         required/>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label>Weight</label>
                                        <input
                                        onChange = {handleFormStateChange} 
                                        value = {formdata.weight}
                                        name = "weight"
                                        class="form-control"  required />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label for="email">Manufactured year</label>
                                        <input
                                        value = {formdata.manufacturedYear}
                                        name ="manufacturedYear"
                                            onChange = { handleFormStateChange }
                                        class="form-control" 
                                        id="email"  
                                         required/>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label >insp date</label>
                                        <input 
                                      
                                        value ={formdata.inspDate}
                                        name  =  "inspDate"
                                        onChange = {handleFormStateChange}
                                        class="form-control" 
                                        type = "date" 
                                        required />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label>Next insp</label>
                                        <input
                                        type = "date"
                                        value = {formdata.nextInspDate}
                                        name = "nextInspDate"
                                        onChange = {handleFormStateChange}
                                        class="form-control" 
                                       
                                         required/>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="form-group mt-2">
                                        <label></label>
                                        <input
                                           type = "file"
                                           name = "file"
                                           class="form-control" 
                                           onChange={handlefileEvent}
                                         required/>
                                    </div>
                                </div>
                              
                            </div>
                     
                            <div class="mt-3">
                                <button class="btn btn-gray-800 mt-2 animate-up-2"  onClick={handleSubmit} type="submit">Save all</button>
                            </div>
                        </form>
                      </div>
                    </div>
                    </div>
                    </form>
        </>
    )






}

export default SaveReport;