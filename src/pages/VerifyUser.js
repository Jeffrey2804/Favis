import {useContext,useEffect,useState} from "react";
import UserContext from "../UserContext";
import {Navigate,useParams} from "react-router-dom";
import {Alert,Container} from 'react-bootstrap';
export default function VerifyUser() {

const { verificationId } = useParams();
const [showSuccess, setShowSuccess] = useState(true);
const [showDanger, setShowDanger] = useState(true);
const verifyUser=()=>{
	fetch(`${process.env.REACT_APP_API_URL}/users/verify`, {
	    method: "POST",
	    headers: {
	         'Content-Type': 'application/json',
	'Accept': 'application/json'
	    },
	    body: JSON.stringify({
	        "userId":verificationId,  
	    })
	})
	.then(res => res.json())
	.then(data =>{

		if(data){
				setShowSuccess(false);
				setShowDanger(true);

		}else{
			
				setShowDanger(false);
				setShowSuccess(true);

		}
		 
	 
	        
	       

	}) 
}
	useEffect(()=>{
		verifyUser()
		
	})
	return(
	
		<>
		<Container className="p-5">
		<Alert variant="success" hidden={showSuccess}>
      <Alert.Heading>Your Email now is verified</Alert.Heading>
      <p>
        You can use your credential to login
      </p>
      <hr />
   
    </Alert>

    <Alert variant="success" hidden={showDanger}>
        <Alert.Heading>Email Already Verify</Alert.Heading>
        <p>
         You can use your credential to login
        </p>
      </Alert>

    </Container>
		</>

	)
}