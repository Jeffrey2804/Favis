import { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,MDBContainer,MDBIcon
} from 'mdb-react-ui-kit';
import UserContext from "../UserContext";
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
export default function ApplicationViewAdmin(){
		const { user } = useContext(UserContext);
		const { applicationId } = useParams();
  const [userDetails, setUserDetails] = useState([]);
			
		const [fullname, setFullname] = useState();
		const [email, setEmail] = useState("");
		const [address, setAddress] = useState("");
		const [vehicle, setVehicle] = useState("");
		const [phone, setPhone] = useState("");
		const [phoneCode, setPhoneCode] = useState("");
		const [turoLink, setTuroLink] = useState("");
		const [status, setStatus] = useState("");
		const [applicationRef, setApplicationRef] = useState("");
		const [isAdmin, setIsAdmin] = useState("");
	const [approval, setApproval] = useState(true);


		const approved = () => {
				updateApplication("Approved");
		}
		const notApproved = () => {
			updateApplication("Not Approved");
		}

		const updateApplication=(updateStatus)=>{


					fetch(`${process.env.REACT_APP_API_URL}/application/update-application/${applicationId}`, {
            method: "POST",
            headers:{
            	 "Authorization": `Bearer ${localStorage.getItem('token')}`,
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                status: updateStatus
            })
        })
        .then(res => res.json())
        .then(data => {
        	retrieveUserApplication()
							
					})

		}
		const retrieveUserApplication = () => {
		fetch(`${process.env.REACT_APP_API_URL}/users/profile`,{
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
			setIsAdmin(`${data.userType}`);
		
			fetch(`${process.env.REACT_APP_API_URL}/application/${applicationId}`,{
			headers:{
				Authorization: `Bearer ${localStorage.getItem('token')}`,

			}
			})
			.then(res => res.json())
			.then(application => {
						if(data.userType=="admin"){
							if(application.status=="For Approval"){
									setApproval(false);
							}else{
								setApproval(true);
							}
					

			}else{
				setApproval(true);
			}


				setStatus(application.status);
				setApplicationRef(application.applicationRef)
					fetch(`${process.env.REACT_APP_API_URL}/cars/viewall-application-car/${applicationId}`,{
					headers:{
						Authorization: `Bearer ${localStorage.getItem('token')}`,

					}
			})
			.then(res => res.json())
			.then(result => {
					setVehicle(result.map(carDetails =>{
                return(
                    <tr>
                              <td className="text-center">
                                <div className='d-flex align-items-center flex-column'>
                                  <img
                                    src={carDetails.carImage}
                                    alt=''
                                    style={{ width: '80px', height: '50px' }}
                                   
                                  />
                                  <br/>
                                  <div className='ms-3'>
                                    <p className='fw-bold mb-1'>{carDetails.make}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="text-center">
                                <p className='fw-normal mb-1'>{carDetails.model}</p>
                                <p className='text-muted mb-0'>{carDetails.year}</p>
                              </td>
                              <td className="text-center">
                                <MDBBadge color='success' pill>
                                  {carDetails.status}
                                </MDBBadge>
                              </td>

                             
                            </tr>
                )
            }))

			})





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

		   <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col' className="text-center">Name</th>
          <th scope='col' className="text-center">Title</th>
          <th scope='col' className="text-center">Status</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
        	vehicle
        /*<tr>
          <td className="text-center">
            <div className='d-flex align-items-center flex-column'>
              <img
                src='https://upcdn.io/FW25bYt/raw/uploads/2023/08/03/mini-car-02-4x1t.png'
                alt=''
                style={{ width: '80px', height: '50px' }}
                className='rounded-circle'
              />
              <br/>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
              </div>
            </div>
          </td>
          <td className="text-center">
            <p className='fw-normal mb-1'>Software engineer</p>
            <p className='text-muted mb-0'>IT department</p>
          </td>
          <td className="text-center">
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>

         
        </tr>*/}
     
      </MDBTableBody>
    </MDBTable>

		   <center hidden={approval}>
		            <MDBBtn outline rounded color='success' onClick={approved} className='mb-2'>
		      
		            <MDBIcon far icon="check-circle" className='mb-2'  size='lg' />
		               Approved
		            </MDBBtn>
		            <MDBBtn outline rounded className='mb-2' color='danger' onClick={notApproved}>
		            <MDBIcon far icon="times-circle" className='mx-1' 	  size='lg' />

		              Not Approved
		            </MDBBtn>
		      </center>    
 </MDBContainer>


		</>
	)
}