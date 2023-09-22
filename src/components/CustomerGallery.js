import React from 'react';
import {useEffect, useState} from "react";
import SingleCar from "../components/singleCar";
import Swal from "sweetalert2";
import {Card,Form,Container,Row, Col,Button,Image,FloatingLabel}  from 'react-bootstrap';
import {MDBCard, MDBCardImage, MDBCardBody,MDBCardTitle,MDBCardText,MDBRow,
        MDBCol,MDBContainer,MDBIcon,MDBBtn,MDBCardLink,MDBCheckbox,MDBInput ,MDBInputGroup } from 'mdb-react-ui-kit';


export default function CustomerGallery() {
  

  useEffect(() =>{
    
            
        
    },[])


  return (
    <><div id="customer-gallery" classname="p-2 m-2 bg-greenone justify-content-center">
    <h1 className="text-greenone">Customer Gallery</h1>
    <MDBRow className="text-center ps-5 pe-5 ms-5 me-5">
    <MDBCol lg="3">  <Image src="/7.jpg" fluid className="img-responsive pb-5" alt="" /></MDBCol>
    <MDBCol lg="3">  <Image src="/8.jpg" fluid className="img-responsive pb-5" alt="" /></MDBCol>
    <MDBCol lg="3">  <Image src="/9.jpg" fluid className="img-responsive pb-5" alt="" /></MDBCol>
    <MDBCol lg="3">  <Image src="/10.jpg" fluid className="img-responsive pb-5" alt="" /></MDBCol>
    </MDBRow>
    </div>
    </>
  );
}