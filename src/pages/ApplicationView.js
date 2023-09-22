import { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,MDBContainer
} from 'mdb-react-ui-kit';
import UserContext from "../UserContext";

export default function ApplicationView({applicationProp}){
		const { user } = useContext(UserContext);
		const {_id} = applicationProp;

			
		const [fullname, setFullname] = useState();
		const [email, setEmail] = useState("");
		const [address, setAddress] = useState("");
		const [vehicle, setVehicle] = useState("");
		const [phone, setPhone] = useState("");
		const [phoneCode, setPhoneCode] = useState("");
		const [turoLink, setTuroLink] = useState("");
		const [status, setStatus] = useState("");
		const [applicationRef, setApplicationRef] = useState("");


		const retrieveUserApplication = () => {
		fetch(`${process.env.REACT_APP_API_URL}/users/full-profile`,{
			headers:{
				Authorization: `Bearer ${localStorage.getItem('token')}`,

			}
		})
		.then(res => res.json())
		.then(data => {
			setFullname(`${data.firstName} ${data.lastName}`);
			setEmail(`${data.email}`);
			setAddress(`${data.address}`);
			setPhone(`${data.phone}`);
			setTuroLink(`${data.turoLink}`);

			fetch(`${process.env.REACT_APP_API_URL}/application/${_id}`,{
			headers:{
				Authorization: `Bearer ${localStorage.getItem('token')}`,

			}
			})
			.then(res => res.json())
			.then(data => {
				setStatus(data.status);
				setApplicationRef(data.applicationRef)



			})


		})
	}

	useEffect(() =>{
		retrieveUserApplication()


		
	}, [])

	return (
		<>
		 <MDBContainer>
		 <h4 className="text-center pt-5">Application Form for Favis Turo Co-Host Program</h4>
		

		      <div className="d-flex flex-column flex-sm-row pb-2">
        <div ><h5> Application ID:</h5></div>
        <div ><h5> {applicationRef}</h5></div>

      </div>
		
		<form>
		     <MDBRow className='mb-4'>
		       <MDBCol sm='12' lg='6' md='4' className="pb-4 pb-lg-1">
		         <MDBInput  label='Full Name' readOnly value={fullname} />
		       </MDBCol>
		       <MDBCol sm='12' lg='6' md='4'>
		         <MDBInput  label='Email' readOnly value={email}/>
		       </MDBCol>
		     </MDBRow>

		     <MDBInput wrapperClass='mb-4'  label='Address' value={address} readOnly/>
		     <MDBInput wrapperClass='mb-4'  label='Phone' value={phone} readOnly/>
		     <MDBInput wrapperClass='mb-4' type='email'  label='Turo Profile(Optional)' readOnly value={turoLink} />
		     <MDBInput wrapperClass='mb-4'   label='Status' readOnly value={status} />
		   </form>

 </MDBContainer>

		</>
	)
}