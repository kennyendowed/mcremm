import './HodDashboard.css'
import { toast } from 'react-toastify';
import logo from "../../../../assets/img/logo.svg";
import dashboardService from "../../../../core/services/dashboard.service";
import React, {  useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import LoadingSpinner from "../../../../Components/Utility/spinner";
import NotFound from "../../../../Components/Pages/ErrorScreen/404";
import download from "downloadjs";
import { Modal, Button } from "react-bootstrap";
import "./HodDashboard.css";
import {Buffer} from 'buffer';
const utils = require("../../../../core/utils/helpers/utils");

function HodDashboard() {
    const { register, handleSubmit, formState: { errors, isSubmitting, isDirty, isValid } } = useForm({ mode: "onChange" });
    const [RMsCustomerdata, setRMsCustomerdata] = useState([])
    const [modaldata, setmodaldata] = useState([]);
    const [show, setShow] = useState(false);
    const [isButtonSubmitted , setisSubmitted] =useState(false);
    const handleClose = () => setShow(false);
    const [openModal, setBulkUploadShow] = useState(false);
    const handleBulkModalClose = () => setBulkUploadShow(false);
    


    useEffect(() => {
      const fetchData = async() => {
        const record = JSON.parse(localStorage.getItem("record"));
        const {ivKey,secretKey }=  JSON.parse(localStorage.getItem("user"));
       
        if(!record) {
          return
        }
      
        let c = await utils.dencrypt(
          Buffer.from(secretKey, "base64"),
          Buffer.from(ivKey, "base64"),
          record
        );
       const decryptedData = JSON.parse(c);
// console.log(decryptedData)
        setRMsCustomerdata(decryptedData);
      //  await onSubmit(record)
      }
      fetchData()
    }, []);

    const onSubmit = async (record) => {
      const {ivKey,secretKey }=  JSON.parse(localStorage.getItem("user"));
     
        setisSubmitted(true);
        try {
          // var arData ={
          //   accountNumber:record
          
          // localStorage.setItem("record", JSON.stringify(record))
          // }
          // return new Promise( (resolve) => {
          //   setTimeout(() => {
          //     resolve();
              dashboardService.GetAccountInfo(record).then(
                (response) => {
                  localStorage.setItem("record",JSON.stringify( response.data))
                  utils.dencrypt(
                    Buffer.from(secretKey, "base64"),
                    Buffer.from(ivKey, "base64"),
                    response.data
                  ).then((result) => {
                    const decryptedData = JSON.parse(result);
                    setRMsCustomerdata(decryptedData);
                  })
                  .catch((error) => {
                    return null;
                  });
                  setisSubmitted(false);
                     },
                (ex) => {
                  
                  setRMsCustomerdata(ex.response.data);
                  if (typeof ex.response.data.data != 'string') {
                    for (let err in ex.response.data.data) {
                   
                      let Msg = () => (
                        <div>
                          <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                          <p> {ex.response.data.data[0].message} </p>
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
                      // this._globals.toastAlert( ex.response.data.error.data[0].message, 'error');
                    }
                  }
                  setisSubmitted(false);
    
                  // console.log(ex.response.data.data[0].message);
                }
              );
          //   }, 2000);
          // });
        } catch (err) {
     
        }
    
      };
    const handleBulkShow =() =>{
      setBulkUploadShow(true);
    }
    
      const handleShow = (record) => {
        // getData(record);
        setShow(true);
    
        setmodaldata(record);
    
      }
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
   //   console.log(RMsCustomerdata[0])        
//  console.log(RMsCustomerdata[0]?.customerInfo?.AccountName)
    return (
        <>

       
        </>
        );

}

export default HodDashboard;