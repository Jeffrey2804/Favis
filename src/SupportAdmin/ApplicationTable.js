import React,{ useState, useEffect ,useContext} from "react";
import {Table, Button,Modal,Form,Row,Col} from "react-bootstrap";
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader
} from "react-bs-datatable";
import UserContext from "../UserContext";
import ApplicationView from "../pages/ApplicationView";
 	export default function ApplicationTable() {
		const tableBody=[];
		const [applicationList, setApplicationList] = useState([]);
		const [show, setShow] = useState(false);
	  	const handleClose = () => setShow(false);
	  	const handleShow = () => setShow(true);

	  	const [applicatioId, setApplicationId] = useState();
	  	const [fullname, setFullname] = useState();
	  	const [email, setEmail] = useState();
	  	const [address, setAddress] = useState();
	  	 const [phone, setPhone] = useState();
	  	 const [applicationView, setApplicationView] = useState();

 			 const {user} = useContext(UserContext);


		const STORY_HEADERS = [
	
	  {
	    prop: "applicationRef",
	    title: "Application ID",
	    isFilterable: true,
      cell: (row) => (
        <>
        
        <a target="_blank" className="mt-5" href={`view-application/${row._id}`}>{row.applicationRef}</a>
        </>
      )

	  },
	  {
	    prop: "firstName",
	    title: "Full Name",
	    cell: (row) => (
        <>
        
       {row.firstName} {row.lastName }
        </>
      )

	  },
	   {
	    prop: "createOn",
	    title: "Date"
	  }

	];
const showAllApplication = (userType) => {
				fetch(`${process.env.REACT_APP_API_URL}/application/all-application`,{
					headers:{
						"Authorization": `Bearer ${localStorage.getItem("token")}`
					}
				})
				.then(res => res.json())
				.then(data => {
					console.log(data);
								tableBody.push(data);
								setApplicationList(data);						
				})	
	
		 }
	useEffect(()=>{
		showAllApplication()

	}, [])

return (
    <>

   <div className="mt-5 mb-3">

				<h1>Application</h1>
		
				
			</div>
			
		
         			    <DatatableWrapper
         	      body={applicationList}
         	      headers={STORY_HEADERS}
         	      paginationOptionsProps={{
         	        initialState: {
         	          rowsPerPage: 10,
         	          options: [5, 10, 15, 20]
         	        }
         	      }}
         	    >

         	      <Row className="mb-4 p-2">
         	        <Col
         	          xs={12}
         	          lg={4}
         	          className="d-flex flex-col justify-content-end align-items-end"
         	        >
         	          <Filter />
         	        </Col>
         	        <Col
         	          xs={12}
         	          sm={6}
         	          lg={4}
         	          className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
         	        >
         	          <PaginationOptions />
         	        </Col>
         	        <Col
         	          xs={12}
         	          sm={6}
         	          lg={4}
         	          className="d-flex flex-col justify-content-end align-items-end"
         	        >
         	          <Pagination />
         	        </Col>
         	      </Row>
         	      <Table>
         	        <TableHeader />
         	        <TableBody />
         	     
         	      </Table>

         	    </DatatableWrapper>

        
       
     

		    

   
    </>
    )
}