import React, { useEffect, useState, useMemo } from "react";
import { TableHeader, Pagination, Search } from "../../../Components/Utility/DataTable";
import { toast } from 'react-toastify';
import logo from "../../../assets/img/logo.svg";
import ReportDetails from "../../../Components/Pages/ReportDetails";
import LoadingSpinner from "../../../Components/Utility/spinner";
import dashboardService from "../../../core/services/dashboard.service";
 import { Modal, Button } from "react-bootstrap";
 import { PulseLoader } from "react-spinners";
import "./Reports.css";

import {InfinitySpin} from 'react-loader-spinner';

function Reports(props) {
  const date = new Date();
  const futureDate = date.getDate() + 3;
  date.setDate(futureDate);
 const defaultValue = date.toLocaleDateString('en-CA');
  const [isSubmitted , setisSubmitted] =useState(false);
  const [isFetchExisted, setFetchExisted] = useState([]);
  const [isFetchDepartment, setDepartment] = useState([]);
  const [RMsCustomerdata, setRMsCustomerdata] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [statusState, chnageSelectStatus] = useState("");
  const [DepartmentState, chnageSelectDepartMent] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });
  const [showLoader, setisLoader] = useState(false)
  const [show, setShow] = useState(false);
  const [loading , setloading] = useState(false)
  const handleClose = () => setShow(false);
  const [ fromdate, setFromdate ] = useState(defaultValue);
  const [todate, settodate] = useState(defaultValue);


  const ITEMS_PER_PAGE = 20;
  const headers = [
      { name: "No#", field: "id", sortable: false },
      { name: "Sn/No", field: "sN", sortable: true },     
      { name: "Customer Name", field: "companyName", sortable: true },
      { name: "Equipment", field: "equipment", sortable: true },
    //   { name: "Manufacturer", field: "oldRMcODE", sortable: false },
    //   { name: "model/type", field: "newRMcode", sortable: false },
    //   { name: "fleet no", field: "RequestStatus", sortable: true },
    //   { name: "nextInspDate", field: "nextInspDate", sortable: false },
      { name: "inspDate", field: "inspDate", sortable: false },
    //   { name: "Entry Date", field: "", sortable: false }
  ];
  const handleShow = (record) => {
      // getData(record);
      setShow(true);
   setRMsCustomerdata(record);
  }

  const handleChangeStartDate = (newValue) => {
    setFromdate(newValue);
    if (todate < newValue) {
        settodate(newValue);
    }
  };
  const handleChangeEndDate = (newValue) => {
    if (newValue < fromdate) {
        settodate(fromdate);
      return;
    }
    settodate(newValue);
  };

  const enabled =
      statusState.length > 0 &&
      DepartmentState.length > 0;

      const onSubmit = async e => {
        e.preventDefault();
        setisSubmitted(true);
      var arData = {
          department: DepartmentState,
           status :  statusState,
        //    from_date: fromdate,
        //    to_date: todate
        }
        setisLoader(true)
        dashboardService.GetReport(arData).then(
              (response) => {
                console.log(response)
                setisLoader(false)	
                // if(response.data[0].code === 404){
                //   let Msg = () => (
                //     <div>
                //           <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                //           <p> No record </p>
                //       </div>
                //   )
                //   toast.error(Msg, {
                //      position: "top-right",
                //      autoClose: 10000,
                //      hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //      progress: undefined,
                //  });
                //  setFetchExisted([]);
                //  setisSubmitted(false);
                // }
                // else{
                //   setFetchExisted(response.data);
                //   setisSubmitted(false);

                // }
                
              }, 
                  (ex) => {
                    console.log(ex)
                    setisSubmitted(false);
                    setisLoader(false)	
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
                                      <p>??? {ex.response.data.data[0].message} ???</p>
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
                                      <p>??? {ex.response.data.error.message} ???</p>
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


  useEffect(() => {
    setisLoader(true)
    var arData = {
        department: "null",
         status :  "null"
      }

      dashboardService.fetchAllCompany().then(
          (response) => {
                  setDepartment(response.data.data);
                   });

                   dashboardService.GetReport(arData).then(
                    (response) => {
                        // console.log(response)
                   
                        setisLoader(false)	
                        
                        setFetchExisted(response.data);
                        // if(response.data[0].code === 404){
                        //   let Msg = () => (
                        //     <div>
                        //           <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                        //           <p> No record </p>
                        //       </div>
                        //   )
                        //   toast.error(Msg, {
                        //      position: "top-right",
                        //      autoClose: 10000,
                        //      hideProgressBar: false,
                        //     closeOnClick: true,
                        //     pauseOnHover: true,
                        //     draggable: true,
                        //      progress: undefined,
                        //  });
                        //  setFetchExisted([]);
                        //  setisSubmitted(false);
                        // }
                        // else{
                        //   setFetchExisted(response.data);
                        //   setisSubmitted(false);
        
                        // }
                    }, 
                    (ex) => {
                      console.log(ex.response.data.status )
                      setisSubmitted(false);
                      setisLoader(false)	
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
                                        <p>??? {ex.response.data.message} ???</p>
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
                            else if (ex.response.data.code === 404) {
                                let Msg = () => (
                                    <div>
                                        <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                                        <p> {ex.message}  </p>
                                        <p>??? {ex.response.data.message} ???</p>
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
        
                        });
     
  }, []);

  const commentsData2 = useMemo(() => {
      let computedComments = isFetchExisted;
      if (search) {
        console.log(search)
          computedComments = computedComments.filter(comment => 
            comment.sN.toLowerCase().includes(search) ||   comment.sN.toLowerCase().includes(search) || comment.companyName.toLowerCase().includes(search) || comment.equipment.toLowerCase().includes(search) || comment.inspDate.toLowerCase().includes(search)
             );
      }
    //   console.log(computedComments)

      setTotalItems(computedComments.length);

      //Sorting comments
      if (sorting.field) {
          const reversed = sorting.order === "asc" ? 1 : -1;
          computedComments = computedComments.sort(
              (a, b) =>
                  reversed * a[sorting.field].localeCompare(b[sorting.field])
          );
      }

      if (computedComments.length > 0) {
          return computedComments.slice((currentPage - 1) * ITEMS_PER_PAGE, (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE);
      }
      else {
          return computedComments.data;
      }

  }, [isFetchExisted, currentPage, search, sorting]);

  return (
      
          <div className="row my-4">
            
                  <div className="card">
                
                      <div className="card-header">
                             
                             <div className="col">
                              <form onSubmit={onSubmit} className = "row ">
                              <div className="col-lg-2 col-7 ">
                                  <Search
                                       width = "180px"
                                       placeholder="Search"
                                       onSearch={value => {
                                          setSearch(value);
                                          setCurrentPage(1);
                                      }}
                                   />
                            
                                  {/* <input type ="date" className="form-control" />                                                      */}
                              </div>
                              {/* <div className="col-lg-2 h-25">
                                
                               <label className="d-flex flex-column flex-lg-row gap-2">
                                 from:
                                  <input 
                                    type ="date" 
                                    value = {fromdate}  
                                    onChange ={(e) => handleChangeStartDate(e.target.value)}                            
                                    className="form-control" 
                                    />
                               </label>
                              </div> 
                              
                               <div className="col-lg-2 ">
                                  <label className="d-flex flex-column flex-lg-row gap-2">
                                     To:
                                     <input 
                                     type ="date" 
                                     value = {todate}
                                     onChange = {(e)=> handleChangeEndDate(e.target.value)}
                                     className="form-control" 
                                     />
                                </label>
                                </div> */}
                            
                              <div className="col-lg-2 ">
                                 {/* <select 
                                 name="reason"                
                                 onChange={(e)=>chnageSelectDepartMent(e.target.value)}
                                 value={DepartmentState}     
                                  className="form-control" required
                                 >
                                           <option value=' '>---o	Select Department-----</option>
                                                        {isFetchDepartment.map((result,index) => {
                                                   
                                                           return <option key={result.department} value={result.department}> o {result.department} </option> 


                                                             })
                                             }
                   
  
                                </select>      */}
                              </div>
                           
                              <div className="col-lg-2">
                              
                              <button type="submit" className="button mt-4 mt-lg-0  ml-lg-2 mb-0"  > { loading ? <PulseLoader color="#fbbf0e" /> :"Submit"}</button>
                    
                      
                            </div>
                              </form>
                              </div>
                          
                          </div>
                      </div>
                      <div className="card-body px-0 pb-2">
                     <div>
                     {showLoader && (
                        <div className="LoaderStyle">
                            <PulseLoader color="#fbbf0e" />
                        </div>
                                     
                                        )} 
                      <div className="table-responsive">
                            <table className="table table-centered table-nowrap mb-0 rounded">
                            
                                   <TableHeader
                                      headers={headers}
                                      onSorting={(field, order) =>
                                          setSorting({ field, order })
                                      }
                                   />
                     
                                    <tbody>   
                                                           
                                      { commentsData2 ? (   
                                            commentsData2.map((result, index) => {
                                             let No =index + 1;
                                               return <tr key={result.id}>
                                                   <td>{No}</td>
                                                   <td>{result.sN}</td>
                                                   <td>{result.companyName}</td>
                                                   {/* <td>{result.unit}</td> */}
                                                   <td>{result.equipment}</td>
                                                  {/* <td>{new Date(result.nextInspDate).toLocaleString() }</td> */}
                                                   <td>{new Date(result.inspDate).toLocaleString() }</td>
                                                   <td className="text-right">
                                                        <Button variant="primary" onClick={() => handleShow(result)}>
                                                            View More Details
                                                        </Button>
                                                    </td>
                                                 </tr>
                                             }) ) : (
                                                <>
                                               <tr>
                                                <td>No record</td>
                                            </tr>
                                                 </>
                                                

                                             )}   
                                     </tbody>
                                     
                              </table>
                          </div>
                          <div className="col-lg-6 col-5 my-auto text-end">
                                  <Pagination
                                      total={totalItems}
                                      itemsPerPage={ITEMS_PER_PAGE}
                                      currentPage={currentPage}
                                      onPageChange={page => setCurrentPage(page)}
                                  />
                              </div>
                      </div>
                   </div>
                                      
            
              <Modal show={show} onHide={handleClose} size="xl">
                  <Modal.Header closeButton>
                      <Modal.Title> </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <ReportDetails RmsCustomers={RMsCustomerdata} />
                  </Modal.Body>
                  <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
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

export default Reports;
