import React from 'react';
import { useEffect, useState } from "react";
import SingleCar from "../components/singleCar";
import Swal from "sweetalert2";
import { Card, Form, Container, Row, Col, Button, Image, FloatingLabel } from 'react-bootstrap';
import {
  MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow,
  MDBCol, MDBContainer, MDBIcon, MDBBtn, MDBCardLink, MDBTableBody, MDBCheckbox, MDBInput, MDBInputGroup, MDBTable, MDBTableHead
} from 'mdb-react-ui-kit';

import Select from 'react-select';
import CustomerGallery from "../components/CustomerGallery";
import Feedback from "../components/Feedback";
import GetinTouch from "../components/GetinTouch";
import countryCode from './CountryCodes.json';
export default function ToroHost() {
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
    fetch(`${process.env.REACT_APP_API_URL}/application/notify-user`, {
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
    fetch(`${process.env.REACT_APP_API_URL}/cars/viewall-active-car`)
      .then(res => res.json())
      .then(data => {
        setCars(data.map(car => {
          return (
            <SingleCar key={car._id} carProp={car} />
          )
        }))
      })




    setOptionList(countryCode.map(countryCode => {

      return (
        { value: countryCode.dial_code, label: `${countryCode.name}(${countryCode.dial_code})` }
      )
    }))



  }, [])


  return (
    <>
      <div id="services" className="text-center">
        <h2>OUR SERVICES</h2>
      </div>
      <Container id="co-host-container">
        <MDBRow className="text-light pt-5">
          <MDBCol lg='6' sm='12' md="" className="bg-greentwo pb-5 title-cohost">
            <h1 className='turo-cohost-title' >TURO<br /> CO-HOST</h1>
            <p>Our team of experts is here to maximize your rental potential, providing comprehensive management services that cover every aspect. Sit back, relax, and let us handle it all, giving you a hassle-free and worry-free experience. Don't let time constraints hold you back—our efficient management services ensure smooth and seamless rental activities.</p>

            <a
              href="/turo-profile"
              className="t-5"
            >
              <MDBBtn className='title-register'><u>REGISTER NOW</u></MDBBtn>

            </a>
          </MDBCol>
          <MDBCol center size='6' className="bg-dark co-host-blackBox">
            <div id="co-host-container-right">
              <h1 className='co-host-message'>"

              SAVE TIME, EFFORT, AND MAXIMIZE EARNINGS BY DELEGATING RESPONSIBILITIES TO US.</h1>
              <img src='./2.png' className='img-fluid img-logocohost' fluid="true" alt='...' />

            </div> <img src='./Landing-Page-Asset-02.png' className='img-fluid img-cohost' fluid="true" alt='...' />
          </MDBCol>

        </MDBRow>
      </Container>




      <div className="bg-black pt-5">


        <div className="text-center co-host-services">
          <h2>CO-HOSTING SERVICES</h2>
        </div>

        <MDBContainer className="table-bg p-5">
          <MDBTable responsive >
            <MDBTableHead>
              <tr>
                <th center className="text-light text-center tablebg-gray">FEATURES / SERVICES</th>
                <th className="text-light text-center tablebg-greenone">PARK & PROSPER <br />  TIER</th>
                <th className="text-light text-center tablebg-greentwo ">LABOR<br /> COVERAGE TIER</th>
                <th className="text-light text-center tablebg-greenthree ">SEAMLESS <br /> CO-HOSTING TIER</th>
                <th className="text-light text-center tablebg-greenfour">PLATINUM <br />TIER</th>

              </tr>
            </MDBTableHead>
            <MDBTableBody>

              <tr>
                <th className="bg-light text-center tbody-width">
                  Access to parking facility for vehicle storage.</th>
                <td className="bodybg-greenone text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greentwo text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenthree text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center tbody-width">
                  Unlimited pick-up and drop-off of registered vehicle at the facility.</th>
                <td className="bodybg-greenone text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greentwo text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenthree text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center tbody-width">
                  Garage insurance coverage.</th>
                <td className="bodybg-greenone text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greentwo text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenthree text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center">
                  Guest self-check-ins, and check-outs.</th>
                <td className="bodybg-greenone text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greentwo text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenthree text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center">
                  Interior and exterior detailing, odor removal.</th>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-greentwo text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenthree text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center">
                  Preventative maintenance.</th>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-greentwo text-center text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenthree text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center">
                  Tire Rotation</th>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-greentwo text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenthree text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center">
                  Control all fluid levels and top up when needed.</th>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-greentwo text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenthree text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center">
                  Full assistance to guest check-ins, and check-outs.</th>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-greentwo text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenthree text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center">
                  Flexible delivery fees based on location.</th>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-greentwo text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenthree text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center">
                  Communication management with Turo on host's behalf.</th>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-greentwo text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenthree text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center">
                  Communication management with third party insurance to resolve claims on host's behalf.</th>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-greenthree text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center">
                  Comprehensive management services for Total vehicle rental management.</th>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-greenthree text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center">
                  Rental Management Services Fees based on rental income.</th>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center">
                  Advertising and Promotion on Turo platform.</th>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center">
                  Advertising and Promotion on social media.</th>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center">
                  The Favis collects rental fees, provides monthly statements.</th>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center">
                  Agreement termination with 30 days' notice.</th>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light ">
                  Beyond preventive maintenance.
                  <li>Responsibility for timely oil changes by The Favis</li>
                  <li>Coolant flushing</li>
                  <li>Vehicle Tune ups</li>
                  <li>Transmission oil change</li>
                  <li>Other minor repairs include securing lose parts and light bulb changes.</li>
                </th>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-greenfour text-center" align="center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light">
                  Comprehensive tire services:
                  <li>Tire Rotation & Balance</li>
                  <li>Tires Installation</li>
                  <li>Wheels Alignments</li>
                </th>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center">
                  Annual State Inspection

                </th>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
              <tr>
                <th className="bg-light text-center">
                  Vehicle recovery after being towed or impounded at Turo expenses
                </th>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-gray text-center"></td>
                <td className="bodybg-greenfour text-center"><img src="https://upcdn.io/12a1yVA/raw/For%20Website/1.png" alt="" className="img-check" /></td>
              </tr>
            </MDBTableBody>
          </MDBTable>
          <div>
            <h3 className="text-light">Note: You can personalize your chosen subscription tier by adding extra services that you need, instead of having to upgrade to a higher tier.</h3>
          </div>
        </MDBContainer >
      </div>
      <div className="text-center co-host-services pt-5">
        <h2>CO-HOSTING APPROACH</h2>
      </div>
      <MDBContainer>
        <h3 >When a Turo host and co-host decide to collaborate, they have the flexibility to agree on various compensation models for the co-host's services. Here are the possible options they can consider:</h3>



        <div className="justify-content-center co-host-images">
          <div className="p-2"><img src='https://upcdn.io/12a1yVA/raw/For%20Website/2.png' className='cohost-img-icon' alt=''
          /></div>
          <div className="p-2"><img src='https://upcdn.io/12a1yVA/raw/For%20Website/3.png' className='cohost-img-icon' alt=''
          /></div>
          <div className="p-2"><img src='https://upcdn.io/12a1yVA/raw/For%20Website/4.png' className='cohost-img-icon' alt=''
          /></div>
          <div className="p-2"><img src='https://upcdn.io/12a1yVA/raw/For%20Website/5.png' className='cohost-img-icon' alt=''
          /></div>
        </div>
        <div className="justify-content-center co-host-images">
          <div class="p-2"><img src='https://upcdn.io/12a1yVA/raw/For%20Website/6.png' className='cohost-img-icon' alt=''
          /></div>
          <div className="p-2"><img src='https://upcdn.io/12a1yVA/raw/For%20Website/7.png' className='cohost-img-icon' alt=''
          /></div>
          <div className="p-2"><img src='https://upcdn.io/12a1yVA/raw/For%20Website/8.png' className='cohost-img-icon' alt=''
          /></div>
        </div>

        <p className="h2-black pb-2">It's crucial for the host and co-host to have a clear and documented agreement about the chosen compensation model, ensuring both parties understand the terms and are satisfied with the arrangement. Additionally, they should consider local regulations and tax implications when deciding on the compensation structure.</p>
        <h2 className="h2-black"><b>Regarding our approach to co-hosting services,<br />

          we will offer potential clients five tiers of services:</b></h2>

        <div className="text-center">
          <img src='https://upcdn.io/12a1yVA/raw/For%20Website/offer1.jpeg' className='co-host-img-icon'
          />
          <img src='https://upcdn.io/12a1yVA/raw/For%20Website/offer2.jpeg' className='co-host-img-icon'
          />
          <img src='https://upcdn.io/12a1yVA/raw/For%20Website/offer3.jpeg' className='co-host-img-icon'
          />
          <img src='https://upcdn.io/12a1yVA/raw/For%20Website/offer4.jpeg' className='co-host-img-icon'
          />
          <img src='https://upcdn.io/12a1yVA/raw/For%20Website/offer5.jpeg' className='co-host-img-icon'
          />
        </div>

      </MDBContainer>
      <CustomerGallery />
      <div className="bg-gray">
        <Feedback />
      </div>

      <MDBContainer >



        {/*
<Container className="rental-management-container">

    <MDBContainer fluid id="" >
      <center><h2>The Favis Car Rental <br/> Vehicle Rental Management Services</h2>
        <div className="section-title">
          <h2>TURO CO-Host</h2>
          <p>
            We provide a tier-based pricing system with rates between 20% and 30%. Additionally, we offer discounts to owners who manage multiple vehicles. Our service fees are calculated based on the revenue your car generates through rentals. 30% of the rental proceeds is charged as a fee for rentals less than $100 per day. 25% of the rental income is charged as a fee for rentals costing $100 or more per day. The cost stays at 25% if you have 12 or more vehicles under management. For owners of 12 or more vehicles, some of which are rented for $100 or more per day, the price might range between 20% and 25%. 
          </p>
        </div>
         
        </center>
   </MDBContainer>
</ Container>  */}
        {/* <div id="portfolio" className="text-center  mt-5">
      <div className="container">
        <div className="row">
        <h3> What we do?</h3>
          <div className="portfolio-items">

          <Container>
      <Row className="justify-content-md-evenly">
        <Col xs lg="4">
          <h5>ADVERTISING AND PROMOTION</h5>

             <div className="container-2">
              <img src="./advertisement.jpg" alt="" className="image-2" />
              <div className="overlay-2">
                <div className="text-2">THE FAVIS SHALL ADVERTISE THE VEHICLE ON THE TURO PLATFORM TO MAXIMIZE RENTAL POTENTIAL</div>
              </div>
            </div>
        </Col>
        <Col lg="4">
             <h5>VEHICLE MAINTENANCE AND CLEANING</h5>
               
             <div className="container-2">
              <img src="./maintainpart.jpeg" alt="" className="image-2" />
              <div className="overlay-2">
                <div className="text-2">THE FAVIS SHALL ENSURE THAT THE VEHICLE IS CLEAN AND WELL-MAINTAINED BEFORE EACH RENTAL.</div>
              </div>
            </div>
        </Col>
        <Col xs lg="4">
         <h5>INSURANCE</h5>
               <div className="container-2">
              <img src="./insurance.jpg" alt="" className="image-2" />
              <div className="overlay-2">
                <div className="text-2">HE VEHICLE OWNER SHALL MAINTAIN THE REQUIRED INSURANCE ON THEIR VEHICLE AT ALL TIMES, WHILE TURO PROVIDES INSURANCE COVERAGE FOR THE VEHICLE DURING THE RENTAL PERIOD.</div>
              </div>
            </div>       
        </Col>
      </Row>
    </Container>
           
  
          </div>
        </div>
      </div>
    </div>*/}





      </MDBContainer>

      <div className="text-light bg-greenthree pt-5 pb-5">

        <GetinTouch />

      </div>

    </>
  );
}