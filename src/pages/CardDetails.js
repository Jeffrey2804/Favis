import React from 'react';
import {useEffect, useState} from "react";
import SingleCar from "../components/singleCar";
import Form from 'react-bootstrap/Form';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,MDBContainer
} from 'mdb-react-ui-kit';
export default function CarDetails() {
 


  return (
    <>
     <div className="container-fluid pt-5">
         <div className="container pt-5 pb-3">
             <h1 className="display-4 text-uppercase mb-5">TOYOTA HIGHLANDER 2019</h1>
             <div className="row align-items-center pb-2">
                 <div className="col-lg-6 mb-4">
                     <img className="img-fluid" src="img/bg-banner.jpg" alt="" />
                 </div>
                 <div className="col-lg-6 mb-4">
                     <h4 className="mb-2">$99.00/Day</h4>
                     <div className="d-flex mb-3">
                         <h6 className="mr-2">Rating:</h6>
                         <div className="d-flex align-items-center justify-content-center mb-1">
                             <small className="fa fa-star text-primary mr-1"></small>
                             <small className="fa fa-star text-primary mr-1"></small>
                             <small className="fa fa-star text-primary mr-1"></small>
                             <small className="fa fa-star text-primary mr-1"></small>
                             <small className="fa fa-star-half-alt text-primary mr-1"></small>
                             <small>(250)</small>
                         </div>
                     </div>
                     <p>Decription Here</p>
                     <div className="d-flex pt-1">
                         <h6>Share on:</h6>
                         <div className="d-inline-flex">
                             <a className="px-2" href=""><i className="fab fa-facebook-f"></i></a>
                             <a className="px-2" href=""><i className="fab fa-twitter"></i></a>
                             <a className="px-2" href=""><i className="fab fa-linkedin-in"></i></a>
                             <a className="px-2" href=""><i className="fab fa-pinterest"></i></a>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="row mt-n3 mt-lg-0 pb-4">
                 <div className="col-md-3 col-6 mb-2">
                     <i className="fa fa-car text-primary mr-2"></i>
                     <span>Model: 2015</span>
                 </div>
                 <div className="col-md-3 col-6 mb-2">
                     <i className="fa fa-cogs text-primary mr-2"></i>
                     <span>Automatic</span>
                 </div>
                 <div className="col-md-3 col-6 mb-2">
                     <i className="fa fa-road text-primary mr-2"></i>
                     <span>20km/liter</span>
                 </div>
                 <div className="col-md-3 col-6 mb-2">
                     <i className="fa fa-eye text-primary mr-2"></i>
                     <span>GPS Navigation</span>
                 </div>
                
             </div>
         </div>
     </div>

     <div className="container-fluid pb-5">
         <div className="container">
             <div className="row">
                 <div className="col-lg-8">
                     <h2 className="mb-4">Personal Detail</h2>
                     <div className="mb-5">
                         <div className="row p-1">
                             <div className="col-6 form-group">
                                 <input type="text" className="form-control p-4" placeholder="First Name" required="required" />
                             </div>
                             <div className="col-6 form-group">
                                 <input type="text" className="form-control p-4" placeholder="Last Name" required="required" />
                             </div>
                         </div>
                         <div className="row p-1">
                             <div className="col-6 form-group">
                                 <input type="email" className="form-control p-4" placeholder="Your Email" required="required"/>
                             </div>
                             <div className="col-6 form-group">
                                 <input type="text" className="form-control p-4" placeholder="Mobile Number" required="required"/>
                             </div>
                         </div>
                     </div>
                     <h2 className="mb-4">Booking Detail</h2>
                     <div className="mb-5">
                         <div className="row p-1">
                             <div className="col-6 form-group">
                                 <Form.Select aria-label="Default select example" className="search-style">
                                       <option>Drop Location</option>
                                       <option value="1">One</option>
                                       <option value="2">Two</option>
                                       <option value="3">Three</option>
                                     </Form.Select>
                             </div>
                             <div className="col-6 form-group">
                                              <Form.Select aria-label="Default select example" className="search-style">
                                   <option>Drop Location</option>
                                   <option value="1">One</option>
                                   <option value="2">Two</option>
                                   <option value="3">Three</option>
                                 </Form.Select>
                             </div>
                         </div>
                         <div className="row p-1">
                             <div className="col-6 form-group">
                                 <div className="date" id="date2" data-target-input="nearest">
                                     <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Pickup Date"
                                         data-target="#date2" data-toggle="datetimepicker" />
                                 </div>
                             </div>
                             <div className="col-6 form-group">
                                 <div className="time" id="time2" data-target-input="nearest">
                                     <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Pickup Time"
                                         data-target="#time2" data-toggle="datetimepicker" />
                                 </div>
                             </div>
                         </div>
                         <div className="row p-1">
                             <div className="col-6 form-group">
                                <Form.Select aria-label="Default select example" className="search-style">
                                   <option>Number of adult</option>
                                   <option value="1">One</option>
                                   <option value="2">Two</option>
                                   <option value="3">Three</option>
                                 </Form.Select>
                             </div>
                             <div className="col-6 form-group">
                                 <Form.Select aria-label="Default select example" className="search-style">
                                   <option>Number of Child</option>
                                   <option value="1">One</option>
                                   <option value="2">Two</option>
                                   <option value="3">Three</option>
                                 </Form.Select>
                             </div>
                         </div>
                         <div className="form-group">
                             <textarea className="form-control py-3 px-4" rows="3" placeholder="Special Request" required="required"></textarea>
                         </div>
                     </div>
                 </div>
                 <div className="col-lg-4">
                     <div className="bg-secondary p-5 mb-5">
                         <h2 className="mb-4">Payment</h2>
                         <div className="form-group">
                             <div className="custom-control custom-radio">
                                 <input type="radio" className="custom-control-input" name="payment" id="paypal" />
                                 <label className="custom-control-label" for="paypal">Paypal</label>
                             </div>
                         </div>
                         <div className="form-group">
                             <div className="custom-control custom-radio">
                                 <input type="radio" className="custom-control-input" name="payment" id="directcheck" />
                                 <label className="custom-control-label" for="directcheck">Direct Check</label>
                             </div>
                         </div>
                         <div className="form-group mb-4">
                             <div className="custom-control custom-radio">
                                 <input type="radio" className="custom-control-input" name="payment" id="banktransfer" />
                                 <label className="custom-control-label" for="banktransfer">Bank Transfer</label>
                             </div>
                         </div>
                         <button className="btn btn-block btn-warning py-3">Book Now</button>
                     </div>
                 </div>
             </div>
         </div>
     </div>


  
    </>
  );
}