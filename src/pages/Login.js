import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


import Modal from 'react-bootstrap/Modal';

import Container from 'react-bootstrap/Card';

import {Row,Col} from 'react-bootstrap';
import {useState, useEffect, useContext} from "react";
import UserContext from "../UserContext";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,MDBContainer
} from 'mdb-react-ui-kit';
function Login() {
	const {user, setUser} = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [emailShow, setEmailShow] = useState(true);
	const [passwordShow, setPasswordShow] = useState(true);

	const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	function loginUser(loginData){
		loginData.preventDefault();
		fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
			method: "POST",
			headers: {
				 'Content-Type': 'application/json',
        'Accept': 'application/json'

			

			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(res => res.json())
		.then(data =>{


			if(typeof data.access !== "undefined"){
	

				
				retrieveUserDetails(data.access);
			}
			else{

				if(data.status){
					swalWithBootstrapButtons.fire({
					icon: "error",
					text: "Your email is not yet verified, please check your inbox."
				});
				}else{

					if(data.status==false){
								swalWithBootstrapButtons.fire({
								title: "Authetication Failed",
								icon: "error",
								text: "Check your login details and try again."
							});

					}else{
						swalWithBootstrapButtons.fire({
						  icon: 'error',
						  title: 'Oops...',
						  text: 'This email is not yet registered. Do you want to register now? ',
						  footer: '<a href="/register">Register now</a>'
						})

					}

					
				}
				
			}

		})
			setEmail("");
			setPassword("");
	}
	const retrieveUserDetails = async (token) => {
		fetch(`${process.env.REACT_APP_API_URL}/users/profile`,{
			headers:{
				Authorization: `Bearer ${token}`,

			}
		})
		.then(res => res.json())
		.then(data => {
			if(data.isReset){
				changePassword(token)
			
			}else{
						localStorage.setItem("token", token);

						swalWithBootstrapButtons.fire({
					title: "Login Successful",
					icon: "success",
					text: "Welcome to The Favis Car Rental Vehicle Rental Management Services!"
				});
				setUser({
				id: data._id,
				userType: data.userType
			})
			}
		})
	}
	const changePassword=(async (token)=>{

		const { value: formValues } = await swalWithBootstrapButtons.fire({
				  title: 'You requested a password reset. Please change it now. ',
				  html:
				    '<div class="p-3"><input id="temporaryPassword" type="password" class="form-control mb-1 reset-input" placeholder="Temporary Password">' +
				    '<br/><input id="password" class="form-control mb-1  reset-input" type="password" placeholder="Password">'+
				    '<br/><input id="confirmPassword" class="form-control mb-1 reset-input" type="password"  placeholder="Confirm Password"></div>',
				  focusConfirm: false,
				  preConfirm: () => {
				    return [
				      document.getElementById('temporaryPassword').value,
				      document.getElementById('password').value,
				      document.getElementById('confirmPassword').value,

				    ]
				  }
				})

				if (formValues) {

						exeChangePassword(formValues,token)
				 
				}

	})
	const exeChangePassword=(form,token)=>{

			
							if(form[1]===form[2]){
								fetch(`${process.env.REACT_APP_API_URL}/users/change-password`, {
						            method: "POST",
						            headers:{
						              "Content-Type": "application/json",
						              "Authorization": `Bearer ${token}`
						            },
						            body: JSON.stringify(form)
						        })
						        .then(res => res.json())
						        .then(data => {

						        	if(data){
						        				swalWithBootstrapButtons.fire({
						        			title: "Change Successful",
						        			icon: "success",
						        			text: "Welcome to The Favis Car Rental Vehicle Rental Management Services!"
						        		});
						        	}else{
						        		swalWithBootstrapButtons.fire({
						        		  title: 'Error!',
						        		  text: "Temporary Password incorrect",
						        		  icon: 'error',
						        		  showCancelButton: true,
						        		  confirmButtonColor: '#3085d6',
						        		  cancelButtonColor: '#d33',
						        		  confirmButtonText: 'Try again?'
						        		}).then((result) => {
						        		  if (result.isConfirmed) {
						        		    changePassword(token);
						        		  }
						        		})

						        	}
						        

						        })

							}else{
								swalWithBootstrapButtons.fire({
								  title: 'Error!',
								  text: "Password and Confirm Password Not Match!",
								  icon: 'error',
								  showCancelButton: true,
								  confirmButtonColor: '#3085d6',
								  cancelButtonColor: '#d33',
								  confirmButtonText: 'Try again?'
								}).then((result) => {
								  if (result.isConfirmed) {
								    changePassword(token);
								  }
								})
							}								
	}

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success btn-submit-ok',
    cancelButton: 'btn btn-danger btn-submit-cancel'
  },
  buttonsStyling: false
})

	const resetPassword=(async ()=>{
			const { value: email } = await swalWithBootstrapButtons.fire({
			  title: 'Input email address',
			  input: 'email',
			  inputLabel: 'Your email address',
			  inputPlaceholder: 'Enter your email address',
			   showCancelButton: true,
			})

			if (email) {
					fetch(`${process.env.REACT_APP_API_URL}/users/checkEmail`, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email: email
            })
        })
        .then(res => res.json())
        .then(data => {
        	if(data){
        			fetch(`${process.env.REACT_APP_API_URL}/users/reset-password`, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email: email
            })
        })
        .then(res => res.json())
        .then(resetData => {
        			if(resetData){
        					swalWithBootstrapButtons.fire({
        					  icon: 'info',
        					  html:
        					    'Please check your email for the temporary password we have sent you  ' ,
        					  showCloseButton: false,
        					  showCancelButton: false,
        					  focusConfirm: false,
        					  confirmButtonText:
        					    'Ok',
        					})
        			}else{
        					swalWithBootstrapButtons.fire({
        					  icon: 'error',
        					  title: 'Oops...',
        					  text: 'Error Generating temporary Password',
        					  footer: '<a href="/#contactus">Contact us?</a>'
        					})
        			}

        	  })	



        	

        	}else{
        		swalWithBootstrapButtons.fire({
        		  icon: 'error',
        		  title: 'Oops...',
        		  text: 'This email is not yet registered. Do you want to register now? ',
        		  footer: '<a href="/register">Register now</a>'
        		})
        	}
        			
          })	

			  /*Swal.fire(`Entered email: ${email}`)*/
			}
	})

	useEffect(() =>{
		
	}, [])


  return (
  		(user.id !== null)
		?
				<Navigate to="/dashboard"/>
		
		:
		<><center>
<div id="login-container" className="text-center justify-content-center pt-5" center>
 <MDBRow center className="text-center row-login">
     	<div className='d-flex flex-row text-center justify-content-center pt-5 pb-2' center>
                	<div className="p-2"><img src='./2.png'  className='img-fluid img-logologin' fluid="true" alt='...' /></div>
                  <div className="p-2"><h1 className="text-light login-welcome">Welcome!</h1></div>

                
                </div>
        <MDBCol sm='10' lg='4' md="6" className="form-container p-xs-5 ps-4 px-4 pt-5">
          <form onSubmit ={(e) => loginUser(e)}>
                


                 <Form.Control type="text" required className='login-input' placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
                <div className="mb-4"><span  className="text-danger mb-5" hidden={emailShow}>
                                                  {"Email must be filled"}
                                               
                                                </span></div>


                 <Form.Control type="password" className='login-input' required placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

                <div className="mb-2"><span className="text-danger" hidden={passwordShow}>
                                                  {"Password must be filled"}
                                                </span></div>
                <MDBRow className='reset-forgot'>
                  <MDBCol className='d-flex justify-content-center'>
                    <MDBCheckbox id='form7Example3' label='Remember me'  />
                  </MDBCol>
                  <MDBCol>
                    <a onClick={() => resetPassword()}   className="text-greenone" href="#resetPassword">Forgot password?</a>
                  </MDBCol>
                </MDBRow>

                <MDBBtn type='submit' className='btn-submitlogin' block >
                 <img src='https://upcdn.io/12a1yVA/raw/For%20Website/icons8-lock-50.png'   height="30"  alt='...' />
                 Log In
                </MDBBtn>

                <div className='text-center'>
                  <p>
                    Not a member? <a href='/register' className="text-greenone">Sign up now!</a>
                  </p>
                </div>
              </form>
        </MDBCol>
      </MDBRow>
</div>
</center>

{/*<Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>*/}


		</>
  );
}

export default Login;