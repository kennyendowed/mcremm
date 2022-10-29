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

          <div className="card border-0 shadow mb-4">
                <div className="card-body">
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

  );
}

export default Dashboard;



