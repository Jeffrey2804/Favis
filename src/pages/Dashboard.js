import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import {Row,Container} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import {Navigate} from "react-router-dom";
import {useState, useEffect, useContext} from "react";
import UserContext from "../UserContext";
import ApplicationTable from "../SupportAdmin/ApplicationTable";
import HomeDashboard from "../SupportAdmin/HomeDashboard";
import SupportAdmin from "../SupportAdmin";


import AdminVehicle from "./AdminVehicle";

import {
MDBTabs,MDBTabsItem,MDBTabsLink,MDBIcon,MDBTabsContent,MDBTabsPane,MDBRow,MDBCol} from 'mdb-react-ui-kit';

function Dashboard() {
  const {user} = useContext(UserContext);
  const [iconsActive, setIconsActive] = useState('tab5');
  const [justifyActive, setJustifyActive] = useState('tab1');
  
  const handleIconsClick = (value: string) => {
    if (value === iconsActive) {
            return;
    }
    setIconsActive(value);
  };
  const [verticalActive, setVerticalActive] = useState('tab1');
  const handleVerticalClick = (value: string) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

/*const retrieveUserDetails = (token) => {
    fetch(`${process.env.REACT_APP_API_URL}/users/profile`,{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`,

      }
    })
    .then(res => res.json())
    .then(data => {
      setUser({
        id: data._id,
        userType: data.userType
      })
    })
  }*/

useEffect(() =>{

    if(user.userType=="admin"){
      setIconsActive("tab2");
    }else{
      setIconsActive("tab5");
    }
     
  }, [])
  return (



  	<>
    <MDBRow className="pt-1">
       {/* <MDBCol size='3'>
              <Sidebar>
  <Menu>
      <MenuItem> <MDBIcon fas icon='tachometer-alt' size="lg" className='me-2' />Dashboard </MenuItem>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>

    <MenuItem> Calendar </MenuItem>
  </Menu>
  </Sidebar>

        </MDBCol>*/}
    <MDBCol size='1'>
      </MDBCol>
        <MDBCol size='10' >  <div className="bg-dashboard">

    
    <Container  className="pt-2"  >

        <MDBTabs className='text-center dashboard-tab' expand='lg' style={{ backgroundColor: '#4caf50' }}>
            {/*<MDBTabsItem >
              <MDBTabsLink onClick={() => handleIconsClick('tab1')} active={iconsActive === 'tab1'}>
                <MDBIcon fas icon='tachometer-alt' size="lg" className='me-2' /> Dashboard

              </MDBTabsLink>
            </MDBTabsItem>*/}
        {/*   */}
           {/* <MDBTabsItem>
              <MDBTabsLink onClick={() => handleIconsClick('tab3')} active={iconsActive === 'tab3'}>
                <MDBIcon fas icon='comments' size="lg" className='me-2' /> Chat Support
              </MDBTabsLink>
            </MDBTabsItem>*/}
           {/* <MDBTabsItem>
              <MDBTabsLink onClick={() => handleIconsClick('tab4')} active={iconsActive === 'tab4'}>
                <MDBIcon fas icon='clock' size="lg" className='me-2' /> Rental
              </MDBTabsLink>
            </MDBTabsItem>*/}
            {/*{
              (user.userType=="admin")
              ?*/}
                <>
                   <MDBTabsItem>
              <MDBTabsLink onClick={() => handleIconsClick('tab2')} active={iconsActive === 'tab2'}>
                <MDBIcon fas icon='calendar-alt' size="lg"  /> Application 
              </MDBTabsLink>
            </MDBTabsItem>
                </>
           {/*   :*/}
              <>
               <MDBTabsItem>
              <MDBTabsLink onClick={() => handleIconsClick('tab5')} active={iconsActive === 'tab5'}>
                <MDBIcon fas icon='car-alt' size="lg"  /> Vehicle
              </MDBTabsLink>
            </MDBTabsItem>
              </>
           {/* }*/}



           
         {/*   <MDBTabsItem>
              <MDBTabsLink onClick={() => handleIconsClick('tab6')} active={iconsActive === 'tab6'}>
                <MDBIcon fas icon='user-alt' size="lg" className='me-2' /> Customer
              </MDBTabsLink>
            </MDBTabsItem>*/}
         {/*   <MDBTabsItem>
              <MDBTabsLink onClick={() => handleIconsClick('tab7')} active={iconsActive === 'tab7'}>
                <MDBIcon fas icon='user-tie' size="lg" className='me-2' /> Client
              </MDBTabsLink>
            </MDBTabsItem>*/}
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={iconsActive === 'tab1'}>
            <Container  className="application-container">
              <HomeDashboard/>

            </Container>


            </MDBTabsPane>
            <MDBTabsPane show={iconsActive === 'tab2'}>
               <Container  className="application-container"><ApplicationTable/></Container>
            </MDBTabsPane>
            <MDBTabsPane show={iconsActive === 'tab3'}>
               <Container  className="application-container">
               {/*<SupportAdmin/>*/}
               </Container>
            </MDBTabsPane>
            <MDBTabsPane show={iconsActive === 'tab4'}>
               
            </MDBTabsPane>
            <MDBTabsPane show={iconsActive === 'tab5'}>
              <Container  className="application-container"><AdminVehicle/></Container>
            </MDBTabsPane>
          </MDBTabsContent>
     </Container>
    
 <br/>

    </div>
        </MDBCol>
    </MDBRow>


 {/*<MDBRow>
        <MDBCol size='3'>
          <MDBTabs className='flex-column text-center'>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                Home
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                Profile
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                Messages
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size='9'>
          <MDBTabsContent>
            <MDBTabsPane show={verticalActive === 'tab1'}>Home content</MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab2'}>Profile content</MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab3'}>Messages content</MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
*/}
  
  
 </>  
  );
}

export default Dashboard;