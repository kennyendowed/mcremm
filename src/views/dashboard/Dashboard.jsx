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
  const [openModal, setBulkUploadShow] = useState(false);
  const handleBulkModalClose = () => setBulkUploadShow(false);
  const handleBulkShow =() =>{
    setBulkUploadShow(true);
  }
  

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