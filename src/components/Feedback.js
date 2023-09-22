import React from 'react';
import {useEffect, useState} from "react";
import SingleCar from "../components/singleCar";
import Swal from "sweetalert2";
import {Card,Form,Container,Row, Col,Button,Image,FloatingLabel}  from 'react-bootstrap';
import {MDBCard, MDBCardImage, MDBCardBody,MDBCardTitle,MDBCardText,MDBRow,
        MDBCol,MDBContainer,MDBIcon,MDBBtn,MDBCardLink,MDBCheckbox,MDBInput ,MDBInputGroup } from 'mdb-react-ui-kit';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import feedbackData from "../pages/feedbackData.json";
export default function Feedback() {
  const [cardList, setCardList] = useState([]);


  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};







  useEffect(() =>{
    
            setCardList(feedbackData.map(feedback =>{

                return(
                       <>
                          <div className="ps-3 pe-3 "><div className="feedback-card text-center p-4">
                          <img src={feedback.imagesLink} className="feedback-img" alt="Fissure in Sandstone"/>

                          <div className='d-flex justify-content-center'>
                            <div className=""><img src="https://upcdn.io/12a1yVA/raw/For%20Website/icons8-star-48.png" className="feedback-star"/></div>
                            <div className=""><img src="https://upcdn.io/12a1yVA/raw/For%20Website/icons8-star-48.png" className="feedback-star"/></div>
                            <div className=""><img src="https://upcdn.io/12a1yVA/raw/For%20Website/icons8-star-48.png" className="feedback-star"/></div>
                            <div className=""><img src="https://upcdn.io/12a1yVA/raw/For%20Website/icons8-star-48.png" className="feedback-star"/></div>
                            <div className=""><img src="https://upcdn.io/12a1yVA/raw/For%20Website/icons8-star-48.png" className="feedback-star"/></div>
                          </div>

                         
                          <div className="card-body">
                            <h5 className="card-title card-name">{feedback.name}</h5>
                            <p className="card-text">{feedback.text}</p>

                          </div>
                        </div></div>

                       </>
                )
            }))
        
    },[])


  return (
    <>
    <div id="customer-gallery" classname="bg-greenone justify-content-center">
    <h1 className="text-greenone">Customer Feedback</h1></div>
    <Carousel className="pb-5 pt-5" responsive={responsive}>
      {
        cardList
      }
 

  
</Carousel>
  
    </>
  );
}