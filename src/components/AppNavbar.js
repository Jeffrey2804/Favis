import '../App.css';
import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBNavbarBrand,
  MDBAccordion, MDBAccordionItem
} from 'mdb-react-ui-kit';



import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Offcanvas, Image, Container } from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserContext from "../UserContext";
export default function App() {

  const [showNavRight, setShowNavRight] = useState(false);
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  const { user } = useContext(UserContext);




  return (
    <>

      
      <MDBNavbar id="menu" expand='lg' sticky light bgColor='light' className="nav-container"  >
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            <img
              src='https://upcdn.io/12a1yVA/raw/For%20Website/TheFavisLogo_HighRes_Black.png'
              height='60'
              alt=''
              loading='lazy'
            />

          </MDBNavbarBrand>





          <MDBNavbarToggler
            type='button'
            data-target='#navbarRightAlignExample'
            aria-controls='navbarRightAlignExample'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavRight(!showNavRight)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>


          <MDBCollapse navbar show={showNavRight}>

            <MDBNavbarNav right fullWidth={false} className='mb-lg-0'>


              <div id="mymenu">
                <nav>
                  <ul className="nav">
                    <li><a href="/">Home</a></li>
                    <li className='servicesPad'><a href="#">Our Services</a>
                      <ul>

                        <li><a href="#">Car Rental</a>
                          <ul>
                            <li ><a href="#" className="isDisabled">RENT DIRECTLY <br />  FROM US</a></li>
                            <li><a href='/turo-profile'>RENT FROM <br /> OUR TURO PROFILE</a></li>

                          </ul>
                        </li>
                        <li><a href='/co-host'>CO-HOSTING</a></li>
                        <li><a href="/parking" >PARKING</a></li>
                        <li><a href="#" className="isDisabled">REPO/RESCUE <br /> PROGRAM</a></li>
                        <li><a href="#" className="isDisabled">PUT YOUR CREDIT <br />  TO USE</a></li>
                      </ul>
                    </li>
                    
                    <li><a href="#contactus">CONTACT US</a></li>
                    <li><a href="/help">Help</a></li>

                    {

                      (user.id !== null)
                        ?
                        (user.userType == "admin")
                          ?
                          <>

                            <li><a href="/dashboard">Dashboard</a></li>
                            <li><a href="/logout">logout</a></li>
                          </>
                          :
                          <>
                            <li><a href="/dashboard">Dashboard</a></li>
                            <li><a href="/logout">logout</a></li>

                          </>


                        :
                        <>
                          <li><a href="/login" className="btn-custom-login">   LOGIN</a></li>

                        </>
                    }




                  </ul>
                </nav>
              </div>









            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

    </>
  );
}