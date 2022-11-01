import React, { useEffect, useState,createContext ,useMemo } from "react";
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import logo from "../../assets/img/logo.svg";
import "./Dashboard.css";
import dashboardService from "../../core/services/dashboard.service";
import Skeleton from 'react-loading-skeleton';
import Card from "../../Components/Card/Card";
import { Modal, Button } from "react-bootstrap";
import Reports from "../../Components/Pages/Reports";
import SaveReport  from "../../Components/Pages/SaveReport";




const API_URL2 = process.env.REACT_APP_BaseApi_URL
const ITEMS_PER_PAGE = 10;
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

function Dashboard() {
  const currentData = JSON.parse(window.localStorage.getItem('user'));
  const [isFetchExisted, setFetchExisted] = useState([]);
  
  const [show, setShow] = useState(false);
 
  const [openModal, setBulkUploadShow] = useState(false);
  const [ loading , setLoading] = useState(false)


  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
 
  const location = useLocation();
  const handleBulkModalClose = () => setBulkUploadShow(false);
  const handleBulkShow =() =>{
    setBulkUploadShow(true);
  }
  
    const handleShow = (record) => {
      // getData(record);
      setShow(true);
  
    }

    
//   useEffect(() => {
//       const timing = setTimeout(async () => {
//       dashboardService.fetchExistedUsers().then(
//         (response) => {
//           //  console.log(response.data.data)
//           setFetchExisted(response.data.data);
//         },
//         (ex) => {
//           // console.log(ex );
//           if (ex.code === "ERR_NETWORK") {
//             let Msg = () => (
//               <div>
//                 <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
//                 <p> {ex.message} </p>
//               </div>
//             )
//             toast.error(Msg, {
//               position: "top-right",
//               autoClose: 10000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//             });
//           }
        
//           if(ex.response.data.status ==="FALSE"){
//             let Msg = () => (
//               <div>
//                 <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
//                 <p> {ex.message}  </p>
//                 <p>❌ {ex.response.data.data[0].message} ❌</p>
//               </div>
//             )
//             toast.error(Msg, {
//               position: "top-right",
//               autoClose: 10000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//             });
//           }
//           if (ex.response.data?.error.code === 404) {
//             let Msg = () => (
//               <div>
//                 <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
//                 <p> {ex.message}  </p>
//                 <p>❌ {ex.response.data.error.message} ❌</p>
//               </div>
//             )
//             toast.error(Msg, {
//               position: "top-right",
//               autoClose: 10000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//             });
//           }

//         }
//       );

//     }, 1000)
//     return () => clearTimeout(timing);

//   }, []);



//   useEffect(() => {
//     setLoading(true)
//     var arData = {
//         department: "null",
//          status :  "null"
//       }

//       dashboardService.fetchAllsDeparment().then(
//           (response) => {
//                   setItems(response.data.data);
//                    });

    console.log(file.type);
    // if (file.type !== "application/pdf") {
    //   toast.error("Only pdfs are allowed");
    //   return;
    // }
    // if (file.size > 2000000 ) {

    //   toast.error("Maximum file size is 2MB...");
   

    // } else {

    

    
  };

  useEffect(() => {
    setLoading(true)
    var arData = {
        department: "null",
         status :  "null"
      }

      dashboardService.fetchDocument().then(
          (response) => {
                  setItems(response.data.data);
                   });

                   dashboardService.GetReport(arData).then(
                    (response) => {
                        setLoading(false)	
                        setFetchExisted(response.data);
                    });  
//                    dashboardService.GetReport(arData).then(
//                     (response) => {
//                         setLoading(false)	
//                         setFetchExisted(response.data);
//                     });  
     
//   }, []);

//   const commentsData2 = useMemo(() => {
//       let computedComments = isFetchExisted;
//       if (search) {
//           computedComments = computedComments.filter(comment =>
//               comment.newRMcode.toLowerCase().includes(search) || comment.oldRMcODE.toLowerCase().includes(search) || comment.accountNumber.toLowerCase().includes(search)
//           );
//       }
      

//       setTotalItems(computedComments.length);

//       //Sorting comments
//       if (sorting.field) {
//           const reversed = sorting.order === "asc" ? 1 : -1;
//           computedComments = computedComments.sort(
//               (a, b) =>
//                   reversed * a[sorting.field].localeCompare(b[sorting.field])
//           );
//       }

//       if (computedComments.length > 0) {
//           return computedComments.slice((currentPage - 1) * ITEMS_PER_PAGE, (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE);
//       }
//       else {
//           return computedComments.data;
//       }

//   }, [isFetchExisted, currentPage, search, sorting]);

  for (var pair of formData.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }
  
  try{
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
catch(e){

}

}, []);
//   const clipRule = {
// 	infowidth: {
// 	  width: "17%"
// 	},
// 	warningColor: {
// 		color: 'orange'
// 	},
// 	errorColor: {
// 		color: 'red'
// 	}
//   };
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
                           
                           
                            <tbody >
                                 
                                 { commentsData2 ? (                                      
                                     commentsData2.map((result, index) => {
                                         return <tr key={result.id}>
                                             <td style={{marginLeft:"900px"}}>{index}</td>
                                             <td>{result.bra_code}</td>
                                             <td>{result.cus_num}</td>
                                             <td>{result.accountNumber}</td>
                                             {/* <td>{result.unit}</td> */}
                                             <td>{result.oldRMcODE}</td>
                                             <td>{result.newRMcode}</td>
                                             <td>{result.RequestStatus}</td>
                                             <td>{new Date(result.createdAt).toLocaleString() //undefined ,options
                                             
                                             
                                             }</td>
                                             <td className="text-right">
                                                 <Button variant="variant" onClick={() => handleShow(result,index)}>
                                                     View Customer
                                                 </Button>

                                             </td>
                                         </tr>
                                     })  ) : (
                                     <>
                                     <tr>
                                         <td>No record</td>
                                     </tr>
                                  
                                      </>
                                       )
                                 }


                             </tbody>
                        </table>
                    </div>
                    <Button variant="primary" className="pull-right" onClick={() => handleBulkShow()}>
                        Add Report
                    </Button>
                <Reports />
                </div>
            </div>
            </div>
            <Modal show={openModal} onHide={handleBulkModalClose} size="xl"  aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SaveReport  />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleBulkModalClose}>
                            Close
                        </Button>
                        {/* <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button> */}
                    </Modal.Footer>
                </Modal>

              
    </div>

  )
 

export default Dashboard;



