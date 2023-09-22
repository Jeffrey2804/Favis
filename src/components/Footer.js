import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Image}   from 'react-bootstrap';
import SupportEngine from '../SupportEngine';
import AskQuestion from '../components/askQuestion';
export default function Footer() {
  return (
    <>
    <br/>
    <br/>
    <AskQuestion />

    <MDBFooter id="contactus" bgColor='light' className='text-center text-lg-start text-muted '>
     {/*<SupportEngine />
*/} 
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div id="social_icon">
          <a href='#social_icon' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='#social_icon' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='#social_icon' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='#social_icon' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase justify-content-center fw-bold mb-4'>
                       <center> <Image src="https://upcdn.io/12a1yVA/raw/For%20Website/TheFavisLogo_HighRes_Black.png" fluid rounded /></center>
              </h6>
              <p>
                Vehicle Rental Management Services
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>What we Offer</h6>
              <p>
                <a href='#!' className='text-reset'>
                	<u>Car Rental</u>
                </a>
              </p>
              <p>
                <a href='/turo-profile' className='text-reset'>
                 	<u>Turo Host</u>
                </a>
              </p>

            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/co-host' className='text-reset'>
                  <u>Co-Host</u>
                </a>
              </p>
              <p>
                <a href='/register' className='text-reset'>
                  <u>Register</u>
                </a>
              </p>

            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                2315 Greens Road, Houston TX, 77032
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@TheFavis.com 
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> 
                281-825-1514
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='#'>
         	The Favis
        </a>
      </div>
    </MDBFooter>
    </>
  );
}