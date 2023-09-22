import {React,useState,useEffect} from 'react';
import {MDBRow,MDBCol,MDBInput,MDBCheckbox,MDBBtn,MDBIcon,MDBTabs,
  MDBTabsItem,MDBTabsLink,MDBTabsContent,MDBTabsPane,MDBInputGroup
} from 'mdb-react-ui-kit';
import {Container,Form,FloatingLabel}  from 'react-bootstrap';
import Select from 'react-select';
import countryCode from './CountryCodes.json';
import Swal from "sweetalert2";

export default function Register() 
{
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [type, setType] = useState("");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [vehicle, setVehicle] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneCode, setPhoneCode] = useState("");

    const [turoLink, setTuroLink] = useState("");
    const [selectedOptions, setSelectedOptions] = useState({ value:"+1" , label: `United States(+1)` });
    const [optionList, setOptionList] = useState([]);

    const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success btn-submit-ok',
    cancelButton: 'btn btn-danger btn-submit-cancel'
  },
  buttonsStyling: false
})

    function handleSelect(data) {
        setSelectedOptions(data);
    }
    function applicationConfirm(applicationData){
       

    }
    function submitApplication(applicationData){
     
        applicationData.preventDefault();
        
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
                swalWithBootstrapButtons.fire({
                    title: "Duplicate email found",
                    icon: "error",
                    text: "Kindly provide another email to complete the registration."
                })
            }else{
                if(password===confirmPassword){
                     fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
                    method: "POST",
                    headers: {
                         'Content-Type': 'application/json',
                'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        "email": email,
                        "password": password,
                        "type": "CO-HOST",
                        "firstName":firstName,
                        "lastName":lastName,
                        "vehicle":vehicle,
                        "address":address,
                        "turoLink":turoLink,
                        "phone": `(${selectedOptions.value})${phone}`,  
                    })
                })
                .then(res => res.json())
                .then(data =>{
                        if(data){
                             
                        swalWithBootstrapButtons.fire({
                            title: "Register Successful",
                            icon: "success",
                            text: "You're in! Registration successful! Verify your email using the link we sent to finalize your account setup. Welcome to our platform!"
                        });

                        setFirstName("");
                        setLastName("");
                        setEmail("");
                        setAddress("");
                        setVehicle("");
                        setPhone("");
                        setTuroLink("");
                        setPassword("");
                        setConfirmPassword("");
                       
                    }
                    else{
                        swalWithBootstrapButtons.fire({
                            title: "See message Failed",
                            icon: "error",
                            text: "Will get back to you soon"
                        });
                    }
                })

                }else{
                     swalWithBootstrapButtons.fire({
                    title: "Password Not Match",
                    icon: "error",
                    text: "Make sure password and confirm password match"
                })

                }

               



            }


        })

    }


  useEffect(() =>{
   



      setOptionList(countryCode.map(countryCode =>{

                return(
                        { value:countryCode.dial_code , label: `${countryCode.name}(${countryCode.dial_code})` }
                )
            }))

              
        
    },[])


  return (
  	<>
    <div id="register-container" classname="pb-5">
     <MDBRow classname="pb-5">  <MDBCol size='1' md='1' lg ="3"></MDBCol>

        <MDBCol  sm='12' md='10' lg ="6" className="register-container p-5 ">

                      <form onSubmit ={(e) => submitApplication(e)}>
                                  <div className='text-center text-light mb-3'>
                                     <h1>CO-HOSTING Application</h1>
                                   
                                  </div>

            <div className="registration-form ps-5 pe-5">  
             <p className="fw-bolder pt-3">Provide your personal information and create an account to access and  share your vehicle details on our dynamic platform:</p>                
              <Form.Label><b>Personal Information</b></Form.Label>
                	<MDBRow className=''>
                <MDBCol>
                    <Form.Control  className="register-input" type="email" id='email' placeholder='Email' required value={email} onChange={e => setEmail(e.target.value)} />
                  </MDBCol>
                <MDBCol>
                   <Form.Control className='mb-4 register-input' type='text' id='type' value='CO-HOSTING' placeholder='Type' readOnly  onChange={e => setType(e.target.value)}/>
                </MDBCol>
              </MDBRow>
              <MDBRow className=''>
                <MDBCol>
            
                   <Form.Control className='mb-4 register-input' type='password' id='password' placeholder='Password' required value={password} onChange={e => setPassword(e.target.value)}/>
                </MDBCol>
                <MDBCol>
                     <Form.Control className='mb-4 register-input' type='password' id='confirmpassword' placeholder='Confirm Password' required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                </MDBCol>
              </MDBRow>
                                  <MDBRow className='mb-4'>
                  <MDBCol>
                    <Form.Control className="register-input" id='firstName' placeholder='First Name' required value={firstName} onChange={e => setFirstName(e.target.value)}/>
                  </MDBCol>
                  <MDBCol>
                  <Form.Control className="register-input" id='lastName' placeholder='Last Name' required value={lastName} onChange={e => setLastName(e.target.value)}/>
                    
                  </MDBCol>
                </MDBRow>
                  <MDBRow className='mb-4'>
                  
                  <MDBCol>
                        <Form.Control  className="register-input"  id='address' placeholder='Address' required value={address} onChange={e => setAddress(e.target.value)}/>
                    
                  </MDBCol>
                </MDBRow>

              

                       <MDBRow className='mb-2 '>


                <br />
               
             
           

                        <MDBCol size='6'>
                      <MDBInputGroup className='mb-3 '>
                       <Select
           styles={{
               control: (baseStyles, state) => ({
                 ...baseStyles,

                 borderColor: state.isFocused ? '#84B49C' : '#84B49C',
                 borderRadius:20,


               }),
             }}

             className="register-input"
  classNamePrefix="register-input"
           
              options={optionList}
            placeholder="CountryCode"
            value={selectedOptions}
            onChange={handleSelect}
            defaultValue={{ value:'+1' , label: `United States(+1)` }}

          lg={6}
 isSearchable={true}
          />  
                
                </MDBInputGroup>

                         </MDBCol>
                           <MDBCol size='6'>
                                
                              <Form.Control type='number' className=" register-input" id='phone' required placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)}/>
                
                             </MDBCol>
                              </MDBRow>
                                <MDBRow className='mb-4'>
                                
                                <MDBCol>
                                      <Form.Control  type="number" className=" register-input" id='vehiclenum' required placeholder='No. of Vehicle' value={vehicle} onChange={e => setVehicle(e.target.value)}/>
                                  
                                </MDBCol>
                                <MDBCol>
                                      <Form.Control  className='register-input' id='turoprofile' placeholder='Turo Profile Link(Optional)' value={turoLink} onChange={e => setTuroLink(e.target.value)}/>
                                  
                                </MDBCol>
                              </MDBRow>


                              <FloatingLabel  />

                              <a target="_blank" className="mt-5 text-greenone" href='https://onedrive.live.com/?authkey=%21AJwqQK23ww1rpXs&cid=0114D88E95DFA31F&id=114D88E95DFA31F%21302409&parId=114D88E95DFA31F%21301937&o=OneUp'>View Rental Agreement</a>
                                
                                  <MDBBtn type='submit' className='mb-4 btn-submitregister' block>
                                      Register
                                  </MDBBtn>

                                  </div>

                                </form>
        </MDBCol>
        </MDBRow>
       
    </div>

     </>
  );
}