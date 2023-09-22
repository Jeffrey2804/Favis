import React from 'react';
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Card, Form, Container, Row, Col, Button, Image, FloatingLabel } from 'react-bootstrap';
import {
  MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow,
  MDBCol, MDBContainer, MDBIcon, MDBBtn, MDBCardLink, MDBCheckbox, MDBInput, MDBInputGroup
} from 'mdb-react-ui-kit';

import countryCodes from "../pages/CountryCodes.json";
import Select from 'react-select';
export default function GetInTouch() {
  const [cars, setCars] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [selectedOptions, setSelectedOptions] = useState(
    { value: "+1", label: `United States(+1)` }
  );
  const [optionList, setOptionList] = useState([]);


  /*  const optionList = [
      { value: "red", label: "Red" },
      { value: "green", label: "Green" },
      { value: "yellow", label: "Yellow" },
      { value: "blue", label: "Blue" },
      { value: "white", label: "White" }
    ];*/


  const templateParams = {
    name: 'James',
    notes: 'Check this out!',
    email: 'macky.escasinas@gmail.com',
    message: 'this is templaate'
  };
  function testEmail() {



  }
  function handleSelect(data) {
    setSelectedOptions(data);



  }
  function applicationConfirm(applicationData) {
    applicationData.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/application/send-application`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "firstname": firstName,
        "lastname": lastName,
        "email": email,
        "address": address,
        "vehicle": vehicle,
        "phone": `(${selectedOptions.value})${phone}`,
        "message": message
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          Swal.fire({
            title: "Send Successful",
            icon: "success",
            text: "Thank you for contacting us. An email confirmation will be sent to the provided email address. We appreciate your interest and look forward to connecting with you soon."
          });

          setFirstName("");
          setLastName("");
          setEmail("");
          setAddress("");
          setVehicle("");
          setPhone("");
          setMessage("");
        } else {
          Swal.fire({
            title: "See message Failed",
            icon: "error",
            text: "Will get back to you soon"
          });

        }



      })

  }
  useEffect(() => {
    setOptionList(countryCodes.map(countryCode => {

      return (
        { value: countryCode.dial_code, label: `${countryCode.name}(${countryCode.dial_code})` }
      )
    }))
  }, [])

  return (
    <>
      <Container className="get-intouch-container ">
        <MDBRow >
          <MDBCol lg="9" className="pt-5 ">

            <MDBRow className='row-cols-1 row-cols-md-3 row-cols-sm-1  justify-content-center'>
              <Col md={9} className="mb-3">
                <div className='text-center mb-3' >
                  <h2>GET IN TOUCH WITH US!</h2>

                </div>
                <Container className="bg-white get-intouch" >
                  <p className="fw-bolder text-dark pt-4">Fill out the form. We will respond to you promptly.</p>
                  <form onSubmit={(e) => applicationConfirm(e)}>



                    <Form.Label ><b>Personal Information</b></Form.Label>
                    <MDBRow className='mb-4 bg-white'>
                      <MDBCol>
                        <Form.Control className="get-intouch-input" id='firstName' placeholder='First Name' required value={firstName} onChange={e => setFirstName(e.target.value)} />
                      </MDBCol>
                      <MDBCol>
                        <Form.Control className="get-intouch-input" id='lastName' placeholder='Last Name' required value={lastName} onChange={e => setLastName(e.target.value)} />

                      </MDBCol>
                    </MDBRow>
                    <MDBRow className='mb-2'>
                      <MDBCol>
                        <Form.Control className="get-intouch-input" type="email" id='email' placeholder='Email' required value={email} onChange={e => setEmail(e.target.value)} />
                      </MDBCol>
                      <MDBCol>
                        <Form.Control className="get-intouch-input" id='address' placeholder='Address' required value={address} onChange={e => setAddress(e.target.value)} />

                      </MDBCol>
                    </MDBRow>

                    <MDBRow className='mb-4'>
                      <MDBCol>


                      </MDBCol>

                    </MDBRow>

                    <MDBRow className='mb-4'>


                      <br />




                      <MDBCol size='6'>
                        <MDBInputGroup className='mb-3'>
                          <Select

                            className="text-dark"
                            options={optionList}
                            placeholder="CountryCode"
                            value={selectedOptions}
                            onChange={handleSelect}
                            lg={6}
                            isSearchable={true}
                          />

                        </MDBInputGroup>

                      </MDBCol>
                      <MDBCol size='6'>


                        <Form.Control className="get-intouch-input" type='tel' id='phone' required placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)} />

                      </MDBCol>
                    </MDBRow>
                    <FloatingLabel />

                    <Form.Control
                      as="textarea"
                      placeholder="Your message here"
                      style={{ height: '100px' }}
                      id='message' label='Message' required value={message} onChange={e => setMessage(e.target.value)}
                    />


                    <br />




                    <MDBBtn type='submit' className='mb-4 btn-submitregister' block>
                      Send Message
                    </MDBBtn>



                  </form>
                </Container>


              </Col>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="3">
            <h1 className="get-in-header">
              <b className='get-in-text'>WE <br />WANT <br />TO <br />HEAR <br />FROM YOU!
              </b>
            </h1>
          </MDBCol>
        </MDBRow>
      </Container>

    </>
  );
}