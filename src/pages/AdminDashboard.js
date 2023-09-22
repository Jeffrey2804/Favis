import React from 'react';
import {useEffect, useState} from "react";
import SingleCar from "../components/singleCar";
import Form from 'react-bootstrap/Form';
import {Table,Modal,Row} from "react-bootstrap";
import dateFormat from 'dateformat';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardHeader,
  MDBIcon,MDBCardLink,MDBListGroupItem,MDBListGroup,MDBCardFooter,MDBRipple,MDBBtnGroup
}  from 'mdb-react-ui-kit';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader
} from "react-bs-datatable";



export default function AdminDashboard() {
    const tableBody=[];
        const [applicationList, setApplicationList] = useState([]);
        
        const [todayApplication, setTodayApplication] = useState();
        const [monthApplication, setMonthApplication] = useState();
        const [weekApplication, setWeekApplication] = useState();
        const [yearApplication, setYearApplication] = useState();



        let newDate = new Date();
        let firstDay = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
        let lastDay = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0);
        const firstDate = dateFormat(firstDay, "yyyy-mm-dd");
        const lastDate = dateFormat(lastDay, "yyyy-mm-dd");



const currentYear = new Date().getFullYear();
const firstDayYear = new Date(currentYear, 0, 1);
const lastDayYear = new Date(currentYear, 11, 31);


        const [dateFrom, setDateFrom] = useState(dateFormat(newDate, "yyyy-mm-dd"));
        const [dateTo, setDateTo] = useState(dateFormat(newDate, "yyyy-mm-dd"));
        const [status, setStatus] = useState();

   
        const firstDayWeek = new Date(
          newDate.setDate(newDate.getDate() - newDate.getDay()),
        );
        const lastDayWeek = new Date(
          newDate.setDate(newDate.getDate() - newDate.getDay() + 6),
        );

       
    const STORY_HEADERS = [
    
      {
        prop: "applicationRef",
        title: <h4 className="text-light">Application ID</h4>,
        isFilterable: true,
      cell: (row) => (
        <>
        
        <a target="_blank" className="mt-5 text-light" href={`view-application/${row._id}`}>{row.applicationRef}</a>
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

const current = new Date();


const date = dateFormat(current, "dddd, mmmm dS, yyyy");

function checkApplication(){

    fetch(`${process.env.REACT_APP_API_URL}/application/today-application`,{
        method: "POST",

        headers:{
            "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
        dateFrom:dateFormat(newDate, "yyyy-mm-dd"), 
        dateTo:dateFormat(newDate, "yyyy-mm-dd"), 
        status: status,
                            
        })
  })
  .then(res => res.json())
  .then(data => {
    

        setTodayApplication(data.length);
                        
  })  

fetch(`${process.env.REACT_APP_API_URL}/application/today-application`,{
        method: "POST",

        headers:{
            "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
        dateFrom:dateFormat(firstDate, "yyyy-mm-dd"), 
        dateTo:dateFormat(lastDate, "yyyy-mm-dd"), 
        status: status,
                            
        })
  })
  .then(res => res.json())
  .then(data => {

        setMonthApplication(data.length);
                        
  })  

  fetch(`${process.env.REACT_APP_API_URL}/application/today-application`,{
        method: "POST",

        headers:{
            "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
        dateFrom:dateFormat(firstDayWeek, "yyyy-mm-dd"), 
        dateTo:dateFormat(lastDayWeek, "yyyy-mm-dd"), 
        status: status,
                            
        })
  })
  .then(res => res.json())
  .then(data => {
        setWeekApplication(data.length);
                        
  })  

  


}


 function searchApplication(){
  fetch(`${process.env.REACT_APP_API_URL}/application/today-application`,{
        method: "POST",

        headers:{
            "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
        dateFrom:dateFrom, 
        dateTo:dateTo, 
        status: status,
                            
        })
  })
  .then(res => res.json())
  .then(data => {
   

                  tableBody.push(data);
                  setApplicationList(data);                       
  })  




 }

const showAllApplication = (userType) => {
                fetch(`${process.env.REACT_APP_API_URL}/application/all-application`,{
                    headers:{
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
                .then(res => res.json())
                .then(data => {

                                tableBody.push(data);
                                setApplicationList(data);                       
                })  
    
         }
    useEffect(()=>{
        checkApplication();


    }, [])


  return (
    <>
   <div id="container-admin">
   <Container className="pt-5">
   <div className="d-flex flex-row justify-content-between mb-3">
        <div className="p-2">
            <h2 className="text-light"><b>Administrator Dashboard</b></h2>
            <h4 className="text-green">OVERVIEW</h4>
        </div>
        <div className="p-2">

            <h2 className="text-light"><b><img src='https://upcdn.io/12a1yVA/raw/For%20Website/icons8-calendar-48.png'  className='img-fluid' fluid="true" alt='...' />{date}</b></h2>
        </div>

      </div>
   
    <MDBRow className='row-cols-1 row-cols-md-3 row-cols-sm-1 ps-5 pe-5 '>
        <Col md={6} lg={3}>
<MDBCard className="h-100 p-4 card-report" >
    <MDBRow>
     <Col>
      <h4 className="text-center card-admintext p-2"><b>Today's Application</b></h4>
       </Col>
    </MDBRow>
    <MDBRow >
     <Col lg={6} className="text-center pt-2">
        <MDBIcon far icon="calendar-alt" size='4x' />
     </Col>
     <Col lg={6}>
     <h2 className="text-center count-number">{todayApplication}</h2>
     </Col>
    </MDBRow>
 
</MDBCard>
</Col>


        <Col md={6} lg={3}>
<MDBCard className="h-100 p-4 card-report" >
    <MDBRow>
     <Col>
      <h4 className="text-center card-admintext p-2"><b>Week's Application</b></h4>
       </Col>
    </MDBRow>
    <MDBRow >
     <Col lg={6} className="text-center pt-2">
        <MDBIcon far icon="calendar-alt" size='4x' />
     </Col>
     <Col lg={6}>
     <h2 className="text-center count-number">{weekApplication}</h2>
     </Col>
    </MDBRow>
 
</MDBCard>
</Col>

        <Col md={6} lg={3}>
<MDBCard className="h-100 p-4 card-report" >
    <MDBRow>
     <Col>
      <h4 className="text-center card-admintext p-2"><b>Month's Application</b></h4>
       </Col>
    </MDBRow>
    <MDBRow >
     <Col lg={6} className="text-center pt-2">
        <MDBIcon far icon="calendar-alt" size='4x' />
     </Col>
     <Col lg={6}>
     <h2 className="text-center count-number">{monthApplication}</h2>
     </Col>
    </MDBRow>
 
</MDBCard>
</Col>

  <Col md={6} lg={3}>
<MDBCard className="h-100 p-4 card-report" >
    <MDBRow>
     <Col>
      <h4 className="text-center card-admintext p-2"><b>Year's Application</b></h4>
       </Col>
    </MDBRow>
    <MDBRow >
     <Col lg={6} className="text-center pt-2">
        <MDBIcon far icon="calendar-alt" size='4x' />
     </Col>
     <Col lg={6}>
     <h2 className="text-center count-number">100</h2>
     </Col>
    </MDBRow>
 
</MDBCard>
</Col>

     

     </MDBRow>


     <div cl>


        <MDBRow className="m-5">
                <MDBCol>
                    <Form.Label className="text-light">Date From:</Form.Label>
                    <Form.Control  className="register-input" value={dateFrom} onChange={e => setDateFrom(e.target.value)} data-date-format="YYYY-MM-DD" type="date" id='email' placeholder='FROM'/>
                  </MDBCol>
                <MDBCol>
                <Form.Label className="text-light">Date  To:</Form.Label>
                   <Form.Control className='mb-4 register-input' value={dateTo} onChange={e => setDateTo(e.target.value)}  type='date' id='type' data-date-format="YYYY-MM-DD" />
                </MDBCol>
                <MDBCol>
                    <Form.Label className="text-light">Status</Form.Label>
                  <Form.Select aria-label="Default select example" className='mb-4 register-input' value={status} onChange={e => setStatus(e.target.value)} >
                       <option>All</option>
                       <option value="1">Approved</option>
                       <option value="2">Not Appproved</option>
                     </Form.Select>
                </MDBCol>
                <MDBCol>
                <Form.Label>&nbsp;  </Form.Label>
  
                    <MDBBtn type='submit' className='mb-4 btn-submitregister' block onClick={() => searchApplication()}>
                                  Search
                              </MDBBtn>



                </MDBCol>
              </MDBRow>
        
     </div>

     <MDBRow className="p-5">

        <Col>
             <div >

                <h3 className="text-light">Application</h3>
        
                
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
                       <Filter className="filter-search" />
                    </Col>
                    <Col
                      xs={12}
                      sm={6}
                      lg={4}
                      className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
                    >
                      {/*<PaginationOptions />*/}
                    </Col>
                    <Col
                      xs={12}
                      sm={6}
                      lg={4}
                      className="d-flex flex-col justify-content-end align-items-end"
                    >
                      <Pagination className="bg-greenthree"/>
                    </Col>
                  </Row>
                  <Table >
                    <TableHeader />
                    <TableBody />
                 
                  </Table>

                </DatatableWrapper>
        </Col>
     </MDBRow>
       </Container>
  </div>
    </>
  );
}