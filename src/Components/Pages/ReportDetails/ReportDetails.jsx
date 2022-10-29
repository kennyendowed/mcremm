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
useEffect(()=>{


}, []);

  return (
        <>
  
 <div className="row">
 <div className="col-md-8">
     <div className="card card-body border-0 shadow mb-4">
         <h2 className="h5 mb-4">General information</h2>
       
     </div>
   
 </div>


 <div className="col-md-4">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <div className="card shadow border-0 text-center p-0">
                                <div className="profile-cover rounded-top" data-background="../assets/img/profile-cover.jpg"></div>
                                <div className="card-body pb-5">
                                <img src={IMG} className=" mx-auto mt-n7 mb-4" />

                                    <h4 className="h3">Neil Sims</h4>
                                    <h5 className="fw-normal">Senior Software Engineer</h5>
                                    <p className="text-gray mb-4">New York, USA</p>
                                  
                                    <a className="btn btn-sm btn-secondary" href="#">Download Report</a>
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