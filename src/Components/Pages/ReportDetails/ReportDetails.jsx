import "./ReportDetails.css";
import React, { useEffect, useState, useMemo } from "react";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import logo from "../../../assets/img/logo.svg";
import ReassignRequestService from "../../../core/services/dashboard.service";
import LoadingSpinner from "../../Utility/spinner";
import dashboardService from "../../../core/services/dashboard.service";


function ReportDetails({ RmsCustomers,updateSET }) {
  const {createdAt,weight,companyName,capacity,avater,equipment,user_id,sN,ref,organisation_details,inspDate,nextInspDate,fleetNO,manufacturer, location,manufacturedYear,modeType,id} = RmsCustomers;
console.log(RmsCustomers)
const  IMG ="data:image/png;base64,"+avater +"";
const DownloadReport = async (e) => {
  // e.preventDefault();
  // let ref = localStorage.getItem("debitAccount");
  // let accountNumber = localStorage.getItem("accountNumber");
  // let chargeOption = localStorage.getItem("chargeOption");
  // let debitAmountB = localStorage.getItem("debitAmount");
  // let creditAcct = localStorage.getItem("creditAcct");
  // let numPages = localStorage.getItem("numPages");
  // let ref = localStorage.getItem("ref");
  

};

  return (
        <>
  
 <div className="row">
 <div className="col-md-8">
     <div className="card card-body border-0 shadow mb-4">
         <h2 className="h5 mb-4">General information for {equipment} <br/> <span className="mb-1">INSPECTED BY : </span> <span className="text-dark font-weight-bold ms-sm-2">{ref}</span></h2> 
         <div className="d-flex flex-column">
                 <span className="mb-1 text-xs">REF : <span className="text-dark font-weight-bold ms-sm-2">{ref}</span></span>
                  <span className="mb-1 text-xs">SN/ NO: <span className="text-dark ms-sm-2 font-weight-bold">{sN}</span></span>
                  <span className="mb-1 text-xs">COMPANY : <span className="text-dark font-weight-bold ms-sm-2">{companyName}</span></span>
                  <span className="mb-1 text-xs">EQUIPMENT: <span className="text-dark ms-sm-2 font-weight-bold">{equipment}</span></span>
                  <span className="mb-1 text-xs">MODE/TYPE: <span className="text-dark ms-sm-2 font-weight-bold">{modeType}</span></span>
                  <span className="mb-1 text-xs">FLEET NO: <span className="text-dark ms-sm-2 font-weight-bold">{fleetNO}</span></span>
                  <span className="mb-1 text-xs">MANUFACTURER : <span className="text-dark font-weight-bold ms-sm-2">{manufacturer}</span></span>
                  <span className="mb-1 text-xs">LOCATION: <span className="text-dark ms-sm-2 font-weight-bold">{location}</span></span>
                  <span className="mb-1 text-xs">CAPACITY: <span className="text-dark ms-sm-2 font-weight-bold">{capacity}</span></span>
                  <span className="mb-1 text-xs">WEIGHT: <span className="text-dark ms-sm-2 font-weight-bold">{weight}</span></span>
                  <span className="mb-1 text-xs">MANUFACTURED YEAR: <span className="text-dark ms-sm-2 font-weight-bold">{manufacturedYear}</span></span>
                  <span className="mb-1 text-xs">INSP DATE: <span className="text-dark ms-sm-2 font-weight-bold">{inspDate}</span></span>
                  <span className="mb-1 text-xs">NEXT INSP: <span className="text-dark ms-sm-2 font-weight-bold">{nextInspDate}</span></span>
                </div>
     </div>
   
 </div>


 <div className="col-md-4">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <div className="card shadow border-0 text-center p-0">
                                <div className="profile-cover rounded-top" data-background="../assets/img/profile-cover.jpg"></div>
                                <div className="card-body pb-5">
                                <img src={IMG} className=" mx-auto mt-n7 mb-4" />

                                <br/>
                                
                                    <a className="btn btn-sm btn-secondary"  onClick={DownloadReport}>Download Report</a>
                                </div>
                             </div>
                        </div>
                  
                    </div>
                </div>
                </div>

    </>

  );
}

export default ReportDetails;