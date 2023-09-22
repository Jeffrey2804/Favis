import React from 'react';
import { useEffect, useState } from "react";


import { Row, Button, Container, Image } from 'react-bootstrap';

import {
  MDBContainer, MDBCardImage, MDBRow, MDBIcon, MDBAccordion, MDBAccordionItem, MDBCol, MDBCardTitle, MDBCardBody
  , MDBCard, MDBCardText, MDBBtn
} from 'mdb-react-ui-kit';
import AppNavbar from "../components/AppNavbar";

import SingleCar from "../components/singleCar";
export default function Home() {
  const [cars, setCars] = useState([]);
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
  }, [])

  return (
    <>




      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-8 col-md-8 intro-text">
                  <h1 className="text-light pb-4">
                    Embark on a journey of
                    <br />convenience and success with us.
                  </h1>

                  <a
                    href="#about"
                    className="btn-custom-home"
                  >
                    Read Our Story
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>



      <div id="about">
        <div className="about-container d-flex flex-column flex-lg-row justify-content-center mt-2">
          <div className="col-lg-5 col-sm-11  justify-content-center ps-5"><center>
            <Image src="/about-us-banner.png" fluid className="img-responsive pb-5" alt="" /></center></div>
          <div className="m-5  col-lg-6 ">
            <h2>Our Story</h2>
            <p>Since our establishment as a used car dealership in 2015, we have evolved into a full mobility company, adapting to the changing needs of our customers. In response to the COVID-19 pandemic in 2021, we expanded our services to include car rentals. Today, we are further expanding into vehicle rental management, offering individuals the opportunity to have their vehicles managed and rented out on their behalf.</p>
            <h2>What makes us your best choice?</h2>

            <div className="list-style row justify-content-center">
              <div className="col-lg-6 col-sm-6 col-md-6">

                <li className="pb-2"><b>Unbeatable Price Match Guarantee:</b> We are highly competitive in the rental market and are willing to match any competitor's prices, ensuring you get the best deal.</li>
                <li className="pb-2"><b>Dreamy Selection:</b> Choose from a diverse lineup of vehicles, ranging from basic to exotic, and experience the thrill of driving your dream car.</li>
                <li className="pb-2"><b>Hassle-Free Experience:</b> Take the hassle out of car rental with our full management services, where our expert team handles everything for you.</li>
                <li className="pb-2"><b>Worry-Free Adventure:</b> Enjoy a hassle-free car rental experience with our comprehensive management services, covering every aspect.</li>

              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                  <li className="pb-2"><b>Maximize Rental Potential:</b> Our dedicated management team works to maximize your vehicle's rental potential, so you can reap the rewards effortlessly.</li>
                  <li className="pb-2"><b>Time Is Your Ally:</b> Our efficient management services keep things running smoothly, allowing you to focus on what matters most to you.</li>
                  <li className="pb-2"><b>Busy Owner-Friendly:</b> For busy car owners, our full car rental management services offer convenience and peace of mind.</li>

                </ul>
              </div>

            </div>

          </div>

        </div>
      </div>


      <div id="services" className="text-center">
        <h2>WHAT WE OFFER:</h2>
        <div className="ps-3 px-3">
          <h5 className>Vehicle Rental Management Services</h5>
          <div className="list-container">

            <MDBRow className="bg-secondary">
              <MDBCol size='12' xs='12' sm="12" md="6" lg="6" className="bg-secondary" center>
                <MDBRow center>
                  <MDBCol center lg='7' md='12' className="bg-secondary">

                    <img src='./Landing-Page-Asset-01.png' className='img-fluid' fluid="true" alt='...' />

                  </MDBCol>
                  <MDBCol size='12' xs='12' lg='5' md='12' className="bg-default align-left">
                    <h1 className="text-uppercase text-light">Car<br /> Rental<br />
                    </h1>
                    <a
                      href="/turo-profile"
                      className="btn-homerent "
                    >
                      <MDBBtn className='btn-list'><u>RENT NOW!</u></MDBBtn>

                    </a>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol center size='12' xs='12' sm="12" md="6" lg="6" className="bg-greenone">
                <p className="text-light">We're thrilled that you're considering renting a car from us. While our direct car rental service is temporarily unavailable, don't worry—we'll be back soon to serve you with a smile! In the meantime, we've got a fantastic solution for you. You can book your dream vehicle directly through our Turo profile. It's quick, easy, and offers reasonable prices that won't break the bank!</p>
              </MDBCol>
            </MDBRow>


          </div>
          <div className="list-container ">

            <MDBRow className="bg-dark">
              <MDBCol center size='12' xs='12' sm="12" md="6" lg="6" className="bg-greentwo">
                <p className="text-light">Our team of experts is here to maximize your rental potential, providing comprehensive management services that cover every aspect. Sit back, relax, and let us handle it all, giving you a hassle-free and worry-free experience. Don't let time constraints hold you back—our efficient management services ensure smooth and seamless rental activities.</p>
              </MDBCol>
              <MDBCol size='12' xs='12' sm="12" md="6" lg="6" center className="bg-dark">
                <MDBRow center>

                  <MDBCol center xs='12' lg='5' md='12' className="">
                    <h1 className="text-uppercase text-light ps-5">TURO CO-HOST<br /></h1>
                    <a
                      href="/turo-profile"
                      className=""
                    >
                      <MDBBtn className='btn-list ' center><u>REGISTER NOW</u></MDBBtn>

                    </a>
                  </MDBCol>
                  <MDBCol center xs='12' lg='7' md='12' className="bg-dark">

                    <img src='./Landing-Page-Asset-02.png' className='img-fluid' fluid="true" alt='...' />

                  </MDBCol>
                </MDBRow>
              </MDBCol>

            </MDBRow>


          </div>
          <div className="list-container">

            <MDBRow className="bg-greenthree ">
              <MDBCol size='12' xs='12' sm="12" md="6" lg="6" className="bg-secondary pt-5 pb-5">
                <MDBRow >
                  <MDBCol center lg='7' md='12' className="bg-secondary">

                    <img src='./Landing-Page-Asset-03.png' className='img-fluid' fluid="true" alt='...' />

                  </MDBCol>
                  <MDBCol center size='12' xs='12' lg='4' md='12' className="bg-default justify-content-center align-items-center justify-content-center">
                    <h1 className="text-uppercase text-light">PARKING<br /> SPACE <br />

                      <a
                        href="/parking"
                        className=""
                      >
                        <MDBBtn className='btn-list align-center'><u>PARK NOW</u></MDBBtn>

                      </a> </h1>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol center size='12' xs='12' sm="12" md="6" lg="6" className="bg-greenthree pt-5 pb-5">
                <h4 className="text-light ps-5">"Unlock Peace of Mind:<br />

                  Park Safely, Travel Confidently -<br /> Discover The Favis Advantages Today!"</h4>
              </MDBCol>
            </MDBRow>


          </div>

        </div>

      </div>






      <div id="testimonials">
        <div className="container">
          <div className="section-title text-center">
            {/*    <h2>Plan your trip now</h2>*/}
          </div>


          <div className="car-list-banner-container p-5 d-flex justify-content-center align-items-center flex-column-reverse  flex-lg-row flex-xxl-row flex-md-column-reverse flex-sm-column ">
            <div className="pb-2 car-list-banner-this"><center><h3>PLAN YOUR<br />TRIP NOW!</h3>
              <br />
              <a
                href="https://turo.com/us/en/drivers/5623072"
                className="btn-profile"
              >
                See Our Profile on TURO
              </a>

            </center>
            </div>
            <div className="align-items-center"><img src='./toyota.png' className='img-fluid img-banner-carlist align-items-end' alt='...' /></div>

          </div>
          <div className="row">

          </div>
        </div>
      </div>
      <div id="team">

        <div className="container">
          <div className="section-title">
            <center><h2 className="text-light">OUR CARS ON TURO</h2></center>
            <p className="text-center text-light">
              We offer a wide selection of high-quality vehicles available for rent through the Turo platform. Whether you're planning a road trip, need a temporary replacement vehicle, or simply want to experience the thrill of driving a luxury car, we've got you covered.
            </p>
          </div>
          <MDBRow className='row-cols-1 row-cols-md-3 row-cols-sm-1 '>
            {
              cars
            }

          </MDBRow><center>
            <a
              href="https://turo.com/us/en/drivers/5623072/vehicles"
              className="btn-custom g-3"
            >
              View All Vehicles
            </a>    </center>

        </div>
      </div>




      <Container>
        <Row >

          <div className="container-fluid ">
            <div className="container ">
              <center> <span className="section-header  text-center"><b>Work Flow</b></span>
                <h2>How We Work</h2></center>
              <MDBRow >
                <MDBCol size='12' lg='3' sm='12' md='12' className=" gap-3">
                  <MDBCardImage className="mb-4" src='https://upcdn.io/12a1yVA/raw/For%20Website/homepage9.png' position='top' alt='...' />
                  <MDBCard className="how-we-work-card">
                    {/*   <MDBCardImage src='/icons/insurancev3.png' position='top' alt='...' />*/}
                    <MDBCardBody >
                      <MDBCardText style={{ height: "220px" }}>
                        As a vehicle owner, it's crucial to maintain your required insurance on your car at all times. Don't worry, though, because during the rental period, Turo has got you covered with additional insurance. This dynamic combination of personal and Turo-provided insurance ensures both you and your renters enjoy a safe and worry-free experience on the road.
                      </MDBCardText>

                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size='12' lg='3' sm='12' md='12' className="mb-3">
                  <MDBCardImage className="mb-4" src='https://upcdn.io/12a1yVA/raw/For%20Website/homepage10.png' position='top' alt='...' />
                  <MDBCard className="how-we-work-card">

                    <MDBCardBody >
                      <MDBCardText style={{ height: "195px" }}>
                        Unleash the Power of Rental Management Fees! Discover how these fees boost earnings, streamline operations, and eliminate rental stress. Turn your passion for car hosting into a high-octane adventure with our energetic guide!
                      </MDBCardText>

                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size='12' lg='3' sm='12' md='12' className="mb-3">
                  <MDBCardImage className="mb-4" src='https://upcdn.io/12a1yVA/raw/For%20Website/homepage11.png' position='top' alt='...' />
                  <MDBCard className="how-we-work-card">

                    <MDBCardBody >
                      <MDBCardText style={{ height: "195px" }}>
                        Unlock Your Car's Full Rental Potential with The Favis! Our cutting-edge advertising strategy maximizes exposure on Turo, attracting more renters and boosting bookings and earnings. Experience rental success like never before with The Favis by your side
                      </MDBCardText>

                    </MDBCardBody>
                  </MDBCard>


                </MDBCol>
                <MDBCol size='12' lg='3' sm='12' md='12' className="mb-3">
                  <MDBCardImage className="mb-4" src='https://upcdn.io/12a1yVA/raw/For%20Website/homepage12.png' position='top' alt='...' />
                  <MDBCard className="how-we-work-card">

                    <MDBCardBody  >
                      <MDBCardText style={{ height: "195px" }}>
                        Experience Effortless Car Rentals with The Favis. Our dedicated team ensures your vehicle is always clean, safe, and well-maintained for every rental. Enjoy peace of mind as your car hits the road with new renters, setting the stage for a successful and satisfying journey."
                      </MDBCardText>

                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </div>
          </div>
        </Row>


      </Container>


    </>
  );
}