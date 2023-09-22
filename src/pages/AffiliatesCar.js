import React from 'react';
import {useEffect, useState} from "react";
import SingleCar from "../components/singleCar";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,MDBContainer
} from 'mdb-react-ui-kit';
import AppNavbar from "../components/AppNavbar";
export default function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() =>{
     fetch(`${process.env.REACT_APP_API_URL}/cars/viewall-affiliates-car`)
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
<MDBContainer fluid> 
  <AppNavbar />
    <h1 className="display-3 text-uppercase text-center text-dark mb-3">Affiliates Listing</h1>
   <center><img src='./multiple-car.png' className='img-fluid' alt='...' /></center>
  <div className="d-inline-flex text-dark text-center justify-content-center">
            <h6 className="text-uppercase m-0 text-center"><a className="text-dark" href="">Home</a></h6>
            <h6 className="text-body">/</h6>
            <h6 className="text-uppercase text-body m-0">Car Listing</h6>
        </div>
<MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {
      cars
    }
     </MDBRow>
    </MDBContainer>
    </>
  );
}