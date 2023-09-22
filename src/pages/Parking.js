import React from 'react';
import { useEffect, useState } from "react";
import SingleCar from "../components/singleCar";
import Swal from "sweetalert2";
import { Card, Form, Container, Row, Col, Button, Image, FloatingLabel } from 'react-bootstrap';
import {
  MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow,
  MDBCol, MDBContainer, MDBIcon, MDBBtn, MDBCardLink, MDBCheckbox, MDBInput, MDBInputGroup
} from 'mdb-react-ui-kit';

import CustomerGallery from "../components/CustomerGallery";
import Feedback from "../components/Feedback";
export default function Parking() {


  useEffect(() => {



  }, [])


  return (
    <>
      <div id="parking" className="text-center">
        <h2>PARKING SERVICES</h2>
      </div>
      <center>
        <MDBRow className="ps-lg-5 pe-lg-5   co-host-banner-box">
          <MDBCol className="bg-brown" lg="6" >
            <div className="parking-container p-lg-5">
              <p className="text-light"><b>"Unlock Peace of Mind:</b><br />

                Park Safely, Travel Confidently - Discover The Favis Advantages Today!</p>
              <img src='./2.png' className='img-fluid img-logoparking' fluid="true" alt='...' />
            </div>
            <img src='./Landing-Page-Asset-03.png' className='img-fluid img-parking-one' fluid="true" alt='...' />

          </MDBCol>
          <MDBCol className="bg-greenthree parking-col-right  text-light p-5" lg="6">
            <h1 className="parking-header">PARKING<br />
              SPACE</h1>

            <p className="parking-paragraphtwo">The Favis Group is proud to offer top-notch parking space services to our customers. Our well-managed parking lot is a significant revenue generator for businesses, and our accessible parking spaces help nearby businesses operate more seamlessly. With our advanced parking control systems, our parking lot has become an essential service for businesses. Experience the convenience and reliability of our parking space services at the Favis Group,
            </p><br />
            <MDBBtn className='title-register'><u>PARK NOW</u></MDBBtn>

          </MDBCol>
        </MDBRow>
      </center>

      <CustomerGallery />
      <div className="bg-gray">
        <Feedback />
      </div>

    </>
  );
}