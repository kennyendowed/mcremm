import React, { useEffect, useState,createContext } from "react";
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import logo from "../../assets/img/logo.svg";
import "./Dashboard.css";
import dashboardService from "../../core/services/dashboard.service";
import Skeleton from 'react-loading-skeleton';
import Card from "../../Components/Card/Card";
import { Modal, Button } from "react-bootstrap";



const API_URL2 = process.env.REACT_APP_BaseApi_URL
const INITIAL_FORM_STATE = {
  sN: "",
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

function Dashboard() {
  const currentData = JSON.parse(window.localStorage.getItem('user'));
  const [isFetchExisted, setFetchExisted] = useState([]);
  
  const [show, setShow] = useState(false);
  const [formdata , setFormdata ] = useState(INITIAL_FORM_STATE)
 
  const [openModal, setBulkUploadShow] = useState(false);
 
  const [ items ,setItems ] = useState([])
  const [ file , setFile ] = useState([])
 
  const location = useLocation();



  const handleBulkModalClose = () => setBulkUploadShow(false);

  const handleBulkShow =() =>{
    setBulkUploadShow(true);
  }
  
    const handleShow = (record) => {
      // getData(record);
      setShow(true);
 
  
    }

    
  useEffect(() => {
      const timing = setTimeout(async () => {
      dashboardService.fetchExistedUsers().then(
        (response) => {
          //  console.log(response.data.data)
          setFetchExisted(response.data.data);
        },
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
        
          if(ex.response.data.status ==="FALSE"){
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

    }, 1000)
    return () => clearTimeout(timing);

  }, []);

  const handleFormStateChange = (event) => {
    const { name, value } = event.target;
    setFormdata({ ...formdata, [name]: value });
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
  formData.append("sN", formData.sN);
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
  formData.append("avater", file);

  for (var pair of formData.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }

  dashboardService.AddDocument(formData).then(
    (response) => {
        setItems(response.data);
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

  const clipRule = {
	infowidth: {
	  width: "17%"
	},
	warningColor: {
		color: 'orange'
	},
	errorColor: {
		color: 'red'
	}
  };
  const handleClose = () => setShow(false);


  return (
    <div>
     	   <div className="row">
            
                 <Card
                    name = "Client"
                    price = "345k"
                    icon = "ni ni-paper-diploma"
                  />
                  <Card
                    name = "Due Date Insp"
                    price = "$43,594"
                 />

             
              
           
                {/* <div className="col-12 col-sm-6 col-xl-6 mb-4">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <div className="row d-block d-xl-flex align-items-center">
                                <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                    <div className="icon-shape icon-shape-primary rounded me-4 me-sm-0">
                                        <svg className="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                                    </div>
                                    <div className="d-sm-none">
                                        <h2 className="h5">Total Client</h2>
                                        <h3 className="fw-extrabold mb-1">345,678</h3>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-7 px-xl-0">
                                    <div className="d-none d-sm-block">
                                        <h2 className="h6 text-gray-400 mb-0">Client</h2>
                                        <h3 className="fw-extrabold mb-2">345k</h3>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */} 
                {/* <div className="col-12 col-sm-6 col-xl-6 mb-4">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <div className="row d-block d-xl-flex align-items-center">
                                <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                    <div className="icon-shape icon-shape-secondary rounded me-4 me-sm-0">
                                        <svg className="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <div className="d-sm-none">
                                        <h2 className="fw-extrabold h5">Due Date Insp</h2>
                                        <h3 className="mb-1">$43,594</h3>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-7 px-xl-0">
                                    <div className="d-none d-sm-block">
                                        <h2 className="h6 text-gray-400 mb-0">Due Date Insp</h2>
                                        <h3 className="fw-extrabold mb-2">$43,594</h3>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="col-12 col-sm-6 col-xl-4 mb-4">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <div className="row d-block d-xl-flex align-items-center">
                                <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                    <div className="icon-shape icon-shape-tertiary rounded me-4 me-sm-0">
                                        <svg className="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <div className="d-sm-none">
                                        <h2 className="fw-extrabold h5"> Bounce Rate</h2>
                                        <h3 className="mb-1">50.88%</h3>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-7 px-xl-0">
                                    <div className="d-none d-sm-block">
                                        <h2 className="h6 text-gray-400 mb-0"> Bounce Rate</h2>
                                        <h3 className="fw-extrabold mb-2">50.88%</h3>
                                    </div>
                                    <small className="text-gray-500">
                                        Feb 1 - Apr 1
                                    </small> 
                                    <div className="small d-flex mt-1">                               
                                        <div>Since last month <svg className="icon icon-xs text-success" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"></path></svg><span className="text-success fw-bolder">4%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

          <div className="card border-0 shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-centered table-nowrap mb-0 rounded">
                            <thead className="thead-light">
                                <tr>
                                    <th className="border-0"><button className = "add__button" onClick={() => handleBulkShow()}>Add </button></th>
                                    <th className="border-0">Reference number</th>
                                    <th className="border-0">Customer Name</th>
                                    <th className="border-0">Category</th>
                                    <th className="border-0">Manufacturer</th>
                                    <th className="border-0">model/type</th>
                                    <th className="border-0 rounded-end">fleet no</th>
                                </tr>
                            </thead>
                            <tbody>
                         
                                <tr>
                                    <td><a href="#" className="text-primary fw-bold">1</a> </td>
                                    <td className="fw-bold d-flex align-items-center">
                                        <svg className="icon icon-xxs text-gray-500 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path></svg>
                                        Direct
                                    </td>
                                    <td>
                                        Direct
                                    </td>
                                    <td>
                                       - 
                                    </td>
                                    <td>
                                       --
                                    </td>
                                    <td>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-12 col-xl-2 px-0">
                                                <div className="small fw-bold">51%</div>
                                            </div>
                                            <div className="col-12 col-xl-10 px-0 px-xl-1">
                                                <div className="progress progress-lg mb-0">
                                                    <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="51" aria-valuemin="0" aria-valuemax="100" clipRule="width: 51%;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-success">
                                        <div className="d-flex align-items-center">
                                            <svg className="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>                                   
                                            <span className="fw-bold">2.45%</span>
                                        </div>
                                    </td>
                                </tr>
                            
                             
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
          

              <Modal show={openModal} onHide={handleBulkModalClose} size="lg"  aria-labelledby="contained-modal-title-vcenter" centered>
                  <Modal.Header closeButton>
                 {/* <Modal.Title>Modal heading</Modal.Title> */}
                  </Modal.Header>
                  <Modal.Body>
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
                                              id="birthday" 
                                              type="text" 
                                              required 
                                              />
                                         </div>
                                     </div>
                                     <div class="col-md-6 mb-3">
                                         <label for="gender">sn/no</label>
                                          <input
                                           value = {formdata.sN} 
                                           name = "sN"
                                           onChange = {handleFormStateChange}
                                          class="form-control mb-0" 
                                          id="gender"  
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
                    </Modal.Body>
      <Modal.Footer>

     </Modal.Footer>
   </Modal>
    </div>

  );
}

export default Dashboard;



