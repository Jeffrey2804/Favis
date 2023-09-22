import React from 'react';
import Col from 'react-bootstrap/Col';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardHeader,
  MDBIcon,MDBCardLink,MDBListGroupItem,MDBListGroup,MDBCardFooter,MDBBtnGroup,
} from 'mdb-react-ui-kit';
import Swal from "sweetalert2";

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useEffect, useState,Link,useContext} from "react";
/*import {showVehicle} from '.pages/AdminVehicle';*/
import UserContext from "../UserContext";
export default function CarSingle({carProp}) {

const {make,trips,transmission,model,year,condition,costRepair,marketValue,status,carImage,userId,_id,price,location,applicationRef} = carProp;
   

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [addDisabled, setAddDisabled] = useState(false);
const [userType, setUserType] = useState("");

const {user} = useContext(UserContext);


function removeVehicle(vehicleId){
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
     fetch(`${process.env.REACT_APP_API_URL}/cars/delete/${vehicleId}`, {
             method: "POST",
             headers:{
               "Content-Type": "application/json",
               "Authorization": `Bearer ${localStorage.getItem('token')}`
             }
           })
           .then(res => res.json())
           .then(data => { 
            if(data){
                Swal.fire(
                  'Deleted!',
                  'Car has been removed.',
                  'success'
                )
                window.location.reload();
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please contact our support'
              })

            }
         
             
              

    })
   
  }
})
    
}
const checkExistApplication=()=>{
  fetch(`${process.env.REACT_APP_API_URL}/application/check-application`, {
             method: "POST",
             headers:{
               "Content-Type": "application/json",
               "Authorization": `Bearer ${localStorage.getItem('token')}`
             }
           })
           .then(res => res.json())
           .then(data => { 

         if(applicationRef!==""){

                   setAddDisabled(true);
             }else{    
                  setAddDisabled(false);  
             
             }
            
              

    })

}



useEffect(()=>{
   

    checkExistApplication();
   
  }, [])

  return (
     <>
   
<MDBCol>


        <MDBCard className="h-100" shadow='0' border='dark' background='white'>
        
      <MDBCardImage  src={carImage} />
      <br/>
     
            <>

      <MDBCardBody>
      <h3>{model}</h3>
      <div className="d-flex bg-light mb-3">

        <div className="p-2"><h6>{make}</h6></div>
        <div className="ms-auto p-2"><span className="badge rounded-pill text-bg-success text-light">{year}</span></div>
      </div>
   
        
        

        <MDBCardText>
            
        </MDBCardText>
         <MDBCardText className="text-center">
          <span className="badge rounded-pill text-bg-info text-light">{status}</span>
        </MDBCardText>
        <MDBListGroup flush="true">
        <MDBListGroupItem>Condition:{condition}</MDBListGroupItem>
        <MDBListGroupItem>Market Value:${marketValue}</MDBListGroupItem>
        <MDBListGroupItem>Est Cost of Repair:${costRepair}</MDBListGroupItem>
      </MDBListGroup>
     
       
        
      </MDBCardBody>
             </>

       
        


    
    

        <MDBCardFooter className="text-center">
          
      
      <MDBBtn color='danger' hidden={addDisabled} onClick={() => removeVehicle(_id)} outline>
        Remove Car
      </MDBBtn>
      {
        (applicationRef=="")
        ?
        <>
        </>
        :
        <>
         <MDBBtn color='success'  target="_blank" href={`view-application/${applicationRef}`} outline>
        View Application
      </MDBBtn>
        </>

      }
     
     
        </MDBCardFooter>
    </MDBCard>
{/*<div className="car__item bg-dark">
      <div className="car__item-top">
        <div className="car__item-tile">
          <h3>{make}</h3>
          <span>
            <i class="ri-heart-line"></i>
          </span>
        </div>
        <p>{make}</p>
      </div>

      <div className="car__img" fluid>
        <img src={carImage} alt="" />
      </div>

      <div className="car__item-bottom">
        <div className="car__bottom-left">
          <p>
            <MDBIcon fas icon="user-alt" /> {make}
          </p>
          <p>
            <MDBIcon fas icon="user-alt" />
            {make}
          </p>
        </div>

        <p className="car__rent"><MDBIcon fas icon="user-alt" />${make}/d</p>
      </div>
    </div>*/}
      </MDBCol>

           
     
     
</>
  );
}