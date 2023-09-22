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
  MDBIcon,MDBCardLink,MDBListGroupItem,MDBListGroup,MDBCardFooter,MDBRipple,MDBBtnGroup
} from 'mdb-react-ui-kit';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useEffect, useState} from "react";

export default function SingleCar({carProp}) {

const { make,brand, location, description, userId,price,carImage,type,turoLink,gas,transmission,trips} = carProp;
     let carType = "";
	if(userId=="host"){
      carType="Host";
  }else{
      carType="Affliates";
  }

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
     <>


    
      <Col md={6} lg={4} className="mb-3">
<MDBCard className="h-100 p-3 card-book" >
      <MDBCardImage position='top' className='h-50 card-book  bg-img-card' alt='...' src={carImage} />
        <br/>
       
        <h3>{make}</h3>
            <h3><a href="#"></a></h3>

              <MDBBtnGroup shadow='0' aria-label='Basic example'>
      <MDBBtn color='success' rounded outline>
        ${price}/Day
      </MDBBtn>
      <MDBBtn color='success' rounded outline>
        {location}
      </MDBBtn>
    
    </MDBBtnGroup>
      
            <hr/>
        <div className="d-flex justify-content-evenly">

            <div className="px-2">
                <img className="img-fluid change-icon-size" src='/icons/meter.png'  alt="" />
                <span>{trips}</span>
            </div>
            <div className="px-2 border-left border-right">
               <img className="img-fluid change-icon-size" src='/icons/gear-shift.png'  alt="" />
                <span> {transmission}</span>
            </div>
            <div className="px-2">
               <img className="img-fluid change-icon-size" src='/icons/gas.png'  alt="" />
                <span> Gas</span>
            </div>
        </div>
     
      <MDBCardFooter className="text-center">
          <div className="d-grid">
        <Button className="btn-book"  size="lg" target="_blank" href={turoLink}>
            Book Now
        </Button>
        </div>
     
        </MDBCardFooter>
    </MDBCard>

     
       

</Col>
       
     
</>
  );
}