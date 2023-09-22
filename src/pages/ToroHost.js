import React from 'react';
import { useEffect, useState } from "react";
import SingleCar from "../components/singleCar";

import { Form, Container, Button } from 'react-bootstrap';
import {
  MDBRow, MDBContainer, MDBIcon, MDBCol, MDBBtn
} from 'mdb-react-ui-kit';
import CustomerGallery from "../components/CustomerGallery";
import Feedback from "../components/Feedback";
export default function ToroHost() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/cars/viewall-active-car`)
      .then(res => res.json())
      .then(data => {
        setCars(data.map(car => {
          return (
            <SingleCar key={car._id} exact="true" carProp={car} />
          )
        }))
      })



  }, [])

  return (
    <>
      <div id="car-rental" className="text-center">
        <h2>CAR RENTAL</h2>
      </div>
      <center>
        <MDBRow className="p-lg-5 ms-5 me-lg-5">
          <MDBCol className="bg-carrental" lg="6" xs="12">
            <div className="carrental-container p-lg-5">
              <p className="text-dark"><b>"

                SAVE TIME <br />AND MONEY<br /> ON<br /> COMMUTING!</b><br />

              </p>
              <br /><br />
              <img src='./3.png' className='img-fluid img-logoparking' fluid="true" alt='...' />
            </div>
            <img src='./Landing-Page-Asset-01.png' className='img-fluid img-carrental-one' fluid="true" alt='...' />

          </MDBCol>
          <MDBCol className="bg-greenone carrental-col-right  text-light p-5" lg="6">
            <h1 className="parking-header">CAR <br />
              RENTAL</h1>

            <p className="carrental-paragraphtwo">
              Our direct car rental service is temporarily unavailable, but you can still rent a car through our Turo profile by visiting thefavis.com/Rental and selecting “Rent Through Turo.” It’s quick, easy, and reasonably priced. Thank you for your understanding. For any other queries you may contact our sales representative.

              Call now
            </p><br />
            <MDBBtn className='title-register'><u>RENT NOW!</u></MDBBtn>

          </MDBCol>
        </MDBRow>
      </center>


      <br /> <br /> <br />
      <MDBContainer fluid>

        <Container className="">

          <MDBContainer fluid >
            {/*<h4 className="book-now">Book A Car Now</h4>*/}
            {/*<div className="container-fluid bg-white pt-3 px-lg-5">
         <div className="row mx-n2">
             <div className="col-xl-3 col-lg-4 col-md-6 px-2">
                
                  <Form.Select aria-label="Default select example" className="search-style">
      <option>Where</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
             </div>
             <div className="col-xl-3 col-lg-4 col-md-6 px-2">
                 <div className="date mb-3" id="date" data-target-input="nearest">
                     <input type="text" className="form-control p-4 datetimepicker-input search-style" placeholder="From Date"
                         data-target="#date" data-toggle="datetimepicker" />
                 </div>
             </div>
             <div className="col-xl-3 col-lg-4 col-md-6 px-2">
                 <div className="time mb-3" id="time" data-target-input="nearest">
                     <input type="text" className="form-control p-4 datetimepicker-input search-style" placeholder="To Date"
                         data-target="#time" data-toggle="datetimepicker" />
                 </div>
             </div>
    

             <div className="col-xl-3 col-lg-4 col-md-6 px-2">
                 <button className="btn btn-primary btn-block mb-3 search-style search-style"  type="submit" >Search</button>
             </div>
         </div>
     </div>
*/}
          </MDBContainer>
        </  Container>


        <Container className="car-container">
          <div className="d-inline-flex text-dark text-center justify-content-center turo-listing-text">
            <img src='https://i.postimg.cc/J0Vd0mX1/turo.png' className='img-fluid turo-logo' alt='...' /> <h2 className="text-uppercase text-body m-0">/Car Listing</h2>


          </div>
          <MDBRow className='row-cols-1 row-cols-md-3 row-cols-sm-1 g-3 justify-content-center'>
            {
              cars
            }

          </MDBRow>
          <center>
            <h2 className="text-uppercase text-light pt-xs-2">
              <a
                href="https://turo.com/us/en/drivers/5623072/vehicles"
                className="btn-custom"
              >
                See All Vehicles
              </a></h2>
          </center>
        </Container>

        <CustomerGallery />
        <div className="bg-gray">
          <Feedback />
        </div>

      </MDBContainer>

    </>
  );
}