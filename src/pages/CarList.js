import React from 'react';
import {useEffect, useState} from "react";
import SingleCar from "../components/singleCar";

import {Card,Form,Container,Row, Col,Button}  from 'react-bootstrap';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,MDBContainer,MDBIcon
} from 'mdb-react-ui-kit';
export default function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() =>{
     fetch(`${process.env.REACT_APP_API_URL}/cars/viewall-active-car`)
        .then(res => res.json())
        .then(data => {
            setCars(data.map(car =>{
                return(
                    <SingleCar key={car._id} carProp={car} />
                )
            }))
        })


        

              
        
    },[])


  return (
    <>
    <div className="car-list-banner-container d-flex justify-content-center align-items-center flex-column-reverse flex-lg-row flex-xxl-row flex-md-column ">
        <div className="p-2 car-list-banner  "><center><h3>Plan you trip now</h3>
            <h1>Save big with our car rental</h1>
            <Button variant="warning" size="lg" className="m-2 ">Book Now <MDBIcon far icon="check-circle" /></Button>
        </center>
       </div>
        <div className="p-2"><img src='./Car-High-Quality.png'  className='img-fluid img-banner-carlist' alt='...' /></div>

      </div>
<MDBContainer fluid> 

<Container className="search-container">

    <MDBContainer fluid id="" >
      <h4 className="book-now">Rent A Car Now</h4>
     <div className="container-fluid bg-white pt-3 px-lg-5">
         <div className="row mx-n2">
             <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                
                  <Form.Select aria-label="Default select example" className="search-style">
      <option>Pickup Location</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
             </div>
             <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                
                 <Form.Select aria-label="Default select example" className="search-style">
      <option>Drop Location</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
             </div>
             <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                 <div className="date mb-3" id="date" data-target-input="nearest">
                     <input type="text" className="form-control p-4 datetimepicker-input search-style" placeholder="Pickup Date"
                         data-target="#date" data-toggle="datetimepicker" />
                 </div>
             </div>
             <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                 <div className="time mb-3" id="time" data-target-input="nearest">
                     <input type="text" className="form-control p-4 datetimepicker-input search-style" placeholder="Pickup Time"
                         data-target="#time" data-toggle="datetimepicker" />
                 </div>
             </div>
             <div className="col-xl-2 col-lg-4 col-md-6 px-2">
               
                  <Form.Select aria-label="Default select example" className="search-style">
      <option>Select A Car</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
             </div>

             <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                 <button className="btn btn-primary btn-block mb-3 search-style search-style"  type="submit" >Search</button>
             </div>
         </div>
     </div>

   </MDBContainer>
</  Container>
   
 
<Container className="car-container">
 <div className="d-inline-flex text-dark text-center justify-content-center">
            <h6 className="text-uppercase m-0 text-center"><a className="text-dark" href="">Home</a></h6>
            <h6 className="text-body">/</h6>
            <h6 className="text-uppercase text-body m-0">Car Listing</h6>
        </div>
<MDBRow className='row-cols-1 row-cols-md-3 row-cols-sm-1 g-3 justify-content-center'>
        {
      cars
    }
     </MDBRow>
</Container>


    </MDBContainer>
    </>
  );
}