import React, { useEffect, useState,createContext ,useMemo } from "react";
import { useRecordStatusContext } from "../../core/modules";
import "./Dashboard.css";
import Card from "../../Components/Card/Card";
import { Modal, Button } from "react-bootstrap";
import Reports from "../../Components/Pages/Reports";
import SaveReport  from "../../Components/Pages/SaveReport";

function Dashboard() {   
const { isFetchExisted,fetchResult} = useRecordStatusContext();
  const [openModal, setBulkUploadShow] = useState(false);
  const handleBulkModalClose = () => setBulkUploadShow(false);
  const handleBulkShow =() =>{
    setBulkUploadShow(true);
  }
  useEffect(() => {
    const timing = setTimeout(async () => {
   
      await fetchResult()
  
  }, 1000)
  return () => clearTimeout(timing);

}, []);


  return (
    <div>
     	   <div className="row">
            
                 <Card
                    name = "Client"
                    price ={isFetchExisted['Allcompany']?.count}
                    icon = "ni ni-paper-diploma"
                  />
                  <Card
                    name = "Due Date Insp"
                    price ={isFetchExisted['AllDUEDate']?.count}
                 />             

          <div className="card border-0 shadow mb-4">
                <div className="card-body">
                <Button variant="primary" className="pull-right" onClick={() => handleBulkShow()}>
                        Add Report
                </Button>
                <Reports/>
                </div>
            </div>
            </div>
            <Modal show={openModal} onHide={handleBulkModalClose} size="xl"  aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SaveReport />
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