import React, { useState, useEffect, useContext } from "react";
import { Table, Button, Modal, Form, Row, Col } from "react-bootstrap";

import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";
import { UploadButton } from "react-uploader";
import {
  MDBNavbar, MDBContainer, MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter, MDBFile
} from 'mdb-react-ui-kit';
import {
  MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow,
  MDBCol, MDBIcon, MDBCardLink, MDBCheckbox, MDBInput, MDBInputGroup, MDBBadge
} from 'mdb-react-ui-kit';
import CarSingle from "../components/carSingle";
import Swal from "sweetalert2";
import Axios from "axios";
import Select from 'react-select';
import UserContext from "../UserContext";
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader
} from "react-bs-datatable";


export default function AdminVehicle() {


  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success btn-submit-ok',
      cancelButton: 'btn btn-danger btn-submit-cancel'
    },
    buttonsStyling: false
  })

  const todaysDate = new Date()
  const currentYear = todaysDate.getFullYear();
  const uploader = Uploader({ apiKey: `${process.env.REACT_APP_UPLOAD_API_KEY}` }); // Your real API key.
  const uploaderOptions = {
    multi: false,
    showFinishButton: false,
    styles: {
      colors: {
        primary: "#168b74"
      }
    }
  }

  const [carsList, setCarList] = useState([]);
  const { user } = useContext(UserContext);
  const tableBody = [];
  const [vehicleList, setVehicleList] = useState([]);
  const [selectMakeList, setSelectMakeList] = useState({ value: "", label: `Select Make` });
  const [makeList, setMakeList] = useState([]);
  const [selectModelList, setSelectModelList] = useState({ value: '', label: `Select Model` });
  const [modelList, setModelList] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectConditionList, setSelectConditionList] = useState({ value: '', label: `Select Condition` });
  const [conditionList, setConditionList] = useState([]);

  const filePath = [];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showSubmitApplication, setShowSubmitApplication] = useState(false);


  const [showOthers, setShowOthers] = useState(true);
  const [modelShow, setModelShow] = useState(true);
  const [makeShow, setMakeShow] = useState(true);
  const [conditionShow, setConditionShow] = useState(true);
  const [imageShow, setImageShow] = useState(true);
  const [addDisabled, setAddDisabled] = useState(false);
  const [vehicleId, setVehicleId] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [others, setOthers] = useState("");
  const [condition, setCondition] = useState("");
  const [finalCondition, setFinalCondition] = useState("");
  const [costRepair, setRepair] = useState("");
  const [marketValue, setMarketValue] = useState("");
  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);
  const [file, setFile] = useState();
  const [userDetails, setUserDetails] = useState([]);
  const [userType, setUserType] = useState(user.userType);

  const MyApp = () => (
    <UploadButton uploader={uploader}
      options={{ multi: false }}
      onComplete={files => setFile(files.map(x => x.fileUrl).join("\n"))}>
      {({ onClick }) =>
        <MDBBtn className="btn-submit-upload" onClick={onClick}>
          Upload a picture
        </MDBBtn>
      }
    </UploadButton>
  )

  const getProfile = () => {

    fetch(`${process.env.REACT_APP_API_URL}/users/profile`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setUserDetails(data);


      })
  }


  const STORY_HEADERS = [{
    prop: "File", title: "File",
    cell: (row) => (
      <>
        <img className="img-fluid car-img" src={row.carImage} alt="" />
      </>
    )
  },
  { prop: "make", title: "Make", isFilterable: true },
  { prop: "model", title: "Model", },
  { prop: "year", title: "Year" },
  { prop: "condition", title: "Condition" },
  { prop: "costRepair", title: "EST Cost of Repair", isSortable: true },
  { prop: "marketValue", title: "Market Value" },
  {
    prop: "status", title: "Status",
    cell: (row) => (
      <>
        <span className="badge rounded-pill text-bg-success text-light">{row.status}</span>
      </>
    )
  },
  {
    prop: "status", title: "Action",
    cell: (row) => (
      <>
        <MDBBtn onClick={() => removeVehicle(row._id)} color='danger' tag='a' floating>
          <MDBIcon fas icon='times' />
        </MDBBtn>
      </>
    )
  }
  ];



  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }


  function handleMake(data) {
    setSelectModelList({ value: '', label: `Select Model` });
    setSelectMakeList(data);
    getModelApi(data.value);
    setIsDisabled(true);

  }
  function handleModel(data) {
    setSelectModelList(data);
  }
  function handleCondition(data) {
    setSelectConditionList(data);
    setFinalCondition(data.value);
    if (data.value == "Others") {
      setShowOthers(false);
    } else {
      setShowOthers(true);
    }
  }
  function removeVehicle(vehicleId) {
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${process.env.REACT_APP_API_URL}/cars/delete/${vehicleId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        })
          .then(res => res.json())
          .then(data => {
            swalWithBootstrapButtons.fire(
              'Deleted!',
              'Car has been removed.',
              'success'
            )
            showVehicle();




          })

      }
    })

  }

  function carSubmit(carData) {

    carData.preventDefault();
    if ((file == "undefined" || file == "" || file == undefined) || selectMakeList.value == "" || selectModelList.value == "" || selectConditionList.value == "") {
      if ((file == "undefined" || file == "" || file == undefined)) {
        setImageShow(false);
      } else {
        setImageShow(true);
      }
      if (selectMakeList.value == "") {
        setMakeShow(false);

      } else {
        setMakeShow(true)
      }
      if (selectModelList.value == "") {
        setModelShow(false);
      } else {
        setModelShow(true);
      }
      if (selectConditionList.value == "") {
        setConditionShow(false);
      } else {
        setConditionShow(true);
      }
    } else {
      setConditionShow(true);
      setMakeShow(true)
      setImageShow(true);
      setModelShow(true);

      if (selectConditionList.value == "Others") {
        if (others == "") {
          setConditionShow(false);
        } else {
          setConditionShow(true);
          setFinalCondition(others);

          finalSubmittion();

        }


      } else {
        setFinalCondition(selectConditionList.value);
        finalSubmittion();
      }


    }
  }

  function finalSubmittion() {
    swalWithBootstrapButtons.fire({
      title: 'Do you agree to the Turo co-hosting terms and conditions? ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`${process.env.REACT_APP_API_URL}/cars/add-car`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            make: `${selectMakeList.value}`,
            year: year,
            model: `${selectModelList.value}`,
            condition: finalCondition,
            costRepair: costRepair,
            marketValue: marketValue,
            carImage: file,
            type: "CO-HOST",
          })
        })
          .then(res => res.json())
          .then(data => {
            if (data) {
              showVehicle();

              swalWithBootstrapButtons.fire({
                title: "Successfully added new vehicle information.",
                icon: "success",
                text: ""
              });
              setMakeList({ value: "", label: `Select Make` });
              setModelList({ value: "", label: `Select Model` });
              setYear("");
              setCondition({ value: "", label: `Select Condition` });
              setRepair("");
              setMarketValue("");
              setFile("");

              toggleShow();
              setShowSubmitApplication(false);

            }
            else {
              swalWithBootstrapButtons.fire({
                title: "Add Vehicle Failed",
                icon: "error",
                text: "Will get back to you soon"
              });
            }
          })
      }
    })
  }




  function submitAddVehicle() {
    document.getElementById("submitVehicle").click()
  }


  const getConditionApi = () => {

    fetch(`${process.env.REACT_APP_API_URL}/parameters/view-type`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => res.json())
      .then(data => {
        setConditionList(data.map(carData => {

          return (
            { value: carData.name, label: `${carData.name}` }
          )
        }))



      })



  }





  const makeApi = {
    method: 'GET',
    url: 'https://car-api2.p.rapidapi.com/api/makes',
    headers: {
      'X-RapidAPI-Key': '6334ea0ebamshe49dcffcca3b16dp1afdbdjsnb416b80d3422',
      'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
    }
  };



  const getMakeApi = (async () => {

    try {
      const response = await Axios.request(makeApi);
      setMakeList(response.data.data.map(carData => {

        return (
          { value: carData.name, label: `${carData.name}` }
        )
      }))


    } catch (error) {

    }

  })



  const getModelApi = (make) => {

    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/vehicletype/car?format=json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => res.json())
      .then(data => {

        setModelList(data.Results.map(carData => {

          return (
            { value: carData.Model_Name, label: `${carData.Model_Name}` }
          )
        }))

        setIsDisabled(false);

      })
  }









  const addNewCar = () => {
    toggleShow();
    getMakeApi();
    getConditionApi();




  }



  const showVehicle = () => {
    fetch(`${process.env.REACT_APP_API_URL}/cars/view-co-host-car`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data == undefined) {
          setShowSubmitApplication(true);
        } else {
          setCarList(

            data.map(car => {
              return (
                <CarSingle key={car._id} carProp={car} />
              )
            }))

        }

        /*tableBody.push(data);
   setVehicleList(data);*/


      })


  }
  const checkExistApplication = () => {
    fetch(`${process.env.REACT_APP_API_URL}/application/check-application`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {

        if (data.length) {
          setAddDisabled(true);

        } else {
          setAddDisabled(false);

        }



      })

  }



  const checkApplication = () => {

    fetch(`${process.env.REACT_APP_API_URL}/application/check-application`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {

        if (data.length) {
          swalWithBootstrapButtons.fire({
            title: "You Already have An application",
            icon: "error",
            text: "Will get back to you soon"
          });
        } else {
          submitApplication();
        }



      })

  }
  const submitApplication = () => {
    swalWithBootstrapButtons.fire({
      text: `Ensure you review all your vehicle details carefully before hitting "Submit," as modifications won't be possible after submission.`,

      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Back'

    }).then((result) => {

      if (result.isConfirmed) {
        fetch(`${process.env.REACT_APP_API_URL}/application/create-application`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        })
          .then(res => res.json())
          .then(data => {
            swalWithBootstrapButtons.fire('Application Submitted!', '', 'success')
            window.location.reload();



          })
      } else if (result.isDenied) {
        swalWithBootstrapButtons.fire('Changes are not saved', '', 'info')
      }
    })

  }






  useEffect(() => {

    showVehicle();
    checkExistApplication();



    getProfile();

  }, [])

  return (

    <>

      <div className="vehicleList">
        <div className="mt-5 mb-3">

          <h2>Vehicle List</h2>


        </div>





        {
          (user.userType == "admin")
            ?
            <>
            </>
            :
            <>
              <MDBBtn outline rounded color='success' className="mb-3" onClick={addNewCar}>
                <img className="img-fluid icon-size" src='/icons/add-car.png' alt="" />
                Add New
              </MDBBtn>
            </>
        }

        <MDBContainer>
          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>

            {
              carsList
            }
          </MDBRow>




        </MDBContainer>

        {/*<DatatableWrapper
      body={vehicleList}
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
        <TableBody  />
     
      </Table>

    </DatatableWrapper>
    <br/>
*/}
        <br /><br />
        {
          (user.userType == "admin")
            ?
            <>
            </>
            :
            <>
              <MDBContainer hidden={showSubmitApplication}>
                <a
                  href="#" onClick={checkApplication}
                  className="btn-custom btn-submit-ok"
                >
                  Submit Application
                </a>
              </MDBContainer>
            </>
        }

      </div>
      <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal} >
        <MDBModalDialog centered size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Vehicle Details</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={(e) => carSubmit(e)}>

                <Form.Label><b>Vehicle Information</b></Form.Label>
                <MDBRow className='mb-4'>
                  <MDBCol>
                    <Select

                      className="btn-select-validate"
                      options={makeList}
                      placeholder="Make"
                      value={selectMakeList}
                      onChange={handleMake}
                      required={true}
                      defaultValue={{ value: '', label: `Select Make` }}
                      //  required
                      lg={6}
                      isSearchable={true}
                    />  <span className="text-danger" hidden={makeShow}>
                      {"Make is required"}
                    </span>





                  </MDBCol>
                  <MDBCol>

                    <Select
                      isDisabled={isDisabled}
                      required={true}
                      options={modelList}
                      placeholder="Model"
                      value={selectModelList}
                      onChange={handleModel}
                      defaultValue={{ value: '', label: `Select Model` }}

                      lg={6}
                      isSearchable={true}
                    />

                    <span className="text-danger" hidden={modelShow}>
                      {"Model is required"}
                    </span>

                  </MDBCol>
                </MDBRow>
                <MDBRow className='mb-4'>
                  <MDBCol>
                    <MDBInput type="number" placeholder="YYYY" min="1990" max="2023" id='Year' label='Year' required value={year} onChange={e => setYear(e.target.value)} />
                  </MDBCol>
                  <MDBCol>

                    <Select

                      required
                      options={conditionList}
                      placeholder="Condition"
                      value={selectConditionList}
                      onChange={handleCondition}
                      defaultValue={{ value: '', label: `Select Condition` }}

                      lg={6}
                      isSearchable={true}
                    />
                    <div hidden={showOthers} className="pt-1">
                      <MDBInput type="text" id='others' label='Please Specify' value={others} onChange={e => setOthers(e.target.value)} />
                    </div>
                    <span className="text-danger" hidden={conditionShow}>
                      {"Condition is required"}
                    </span>
                  </MDBCol>
                </MDBRow>
                <MDBRow className='mb-2'>
                  <MDBCol>
                    <MDBInput type="number" id='repairCodt' label='Estimated Cost of Repair $' required value={costRepair} onChange={e => setRepair(e.target.value)} />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput type="number" id='Condition' label='Current Market Value $' required value={marketValue} onChange={e => setMarketValue(e.target.value)} />

                  </MDBCol>
                </MDBRow>

                <MDBRow className='mb-2'>
                  <MDBCol>
                    {
                      MyApp()
                    }
                    <br />
                    <span className="text-danger" hidden={imageShow}>
                      {"Image is required"}
                    </span>
                  </MDBCol>


                </MDBRow>
                <div className="p-2">
                  <img src={file} className='img-fluid' /></div>


                {/*
                        <a target="_blank" className="mt-5" href='https://onedrive.live.com/?authkey=%21AJwqQK23ww1rpXs&cid=0114D88E95DFA31F&id=114D88E95DFA31F%21302409&parId=114D88E95DFA31F%21301937&o=OneUp'>Read Turo Co-Hosting Agreement</a>
          */}                  <MDBCheckbox
                  wrapperClass='d-flex mb-4'
                  id='form5Example3'
                  label='I have read and agree to the terms'
                  required
                />


                <MDBBtn type='submit' id="submitVehicle" hidden={true} className='mb-4' block>
                  Submit Application
                </MDBBtn>
              </form>












            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='danger' className="btn-submit-cancel" onClick={toggleShow}>
                Cancel
              </MDBBtn>
              <MDBBtn className="btn-submit-ok" onClick={() => submitAddVehicle()}>ADD</MDBBtn>
              {/*              <MDBBtn onClick={() => testPath()}>test</MDBBtn>*/}

            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

    </>
  )
}