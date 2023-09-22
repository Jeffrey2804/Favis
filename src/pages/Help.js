import React, { useState } from 'react';
import GetInTouch from "../components/GetinTouch";
import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography, MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';

export default function Help() {

  const [verticalActive, setVerticalActive] = useState('tab1');

  const handleVerticalClick = (value: string) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };


  return (
    <>
      <div className="contents-title text-center text-light">
        <h1 >Help Center</h1>
        <p >
        </p><p>Got a question?Browse through our guides in the knowledge base or contact us.<br /></p>
        <p></p>
      </div>
      <MDBContainer>

        <section>



          <MDBRow>
            <MDBCol xs='12' lg="3" md="4" sm="12" >
              <MDBTabs className='flex-column text-center'>
                <h1 className="help-greenone">FAQ</h1>
                <MDBTabsItem>
                  <MDBTabsLink className="tab-border" onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                    <h5 className="text-greenone">About The Favis Group's Company</h5>
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink className="tab-border" onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                    <h5 className="text-greenone">About Company Objectives </h5>
                  </MDBTabsLink>
                </MDBTabsItem>
                {/* <MDBTabsItem>
                       <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                          <h5 className="text-greenone">More ways we can help </h5>
                       </MDBTabsLink>
                     </MDBTabsItem>*/}
              </MDBTabs>
            </MDBCol>

            <MDBCol sm='8' lg="9" >
              <MDBTabsContent>
                <MDBTabsPane show={verticalActive === 'tab1'}>

                  <h2 className="mb-3 mt-3">
                    Frequently Asked Questions About <br />The Favis Group's Company History:
                  </h2>



                  <MDBRow>
                    <MDBCol md="6" lg="6" className="mb-4">
                      <div className="accordion_help">
                        <div class="c">
                          <input type="checkbox" id="faq-1" />
                          <h6><label for="faq-1">When was The Favis Group established?</label></h6>
                          <div class="p">
                            <p>The Favis Group was established in July 2015. </p>
                          </div>
                        </div>

                        <div class="c">
                          <input type="checkbox" id="faq-7" />
                          <h6><label for="faq-7">What is The Favis Group's current plan for fleet expansion? </label></h6>
                          <div class="p">
                            <p>The current plan involves expanding the fleet to between 2,000 and 5,000 vehicles, initially covering major cities in Texas such as Houston, Dallas, San Antonio, and Austin. The aim is to establish multiple branches or locations in each city and offer one-way rental options to customers. </p>
                          </div>
                        </div>
                        <div class="c">
                          <input type="checkbox" id="faq-3" />
                          <h6><label for="faq-3">What was the initial venture of The Favis Group? </label></h6>
                          <div class="p">
                            <p>The Favis Group's first venture was a used car dealership.
                            </p>
                          </div>
                        </div>
                        <div class="c">
                          <input type="checkbox" id="faq-4" />
                          <h6><label for="faq-4">How did the COVID-19 pandemic impact The Favis Group's journey? </label></h6>
                          <div class="p">
                            <p>The Favis Group explored other ventures like real estate and trucking, but the journey was impacted by the challenges posed by the COVID-19 pandemic.
                            </p>
                          </div>
                        </div>
                        <div class="c">
                          <input type="checkbox" id="faq-5" />
                          <h6><label for="faq-5">When did The Favis Group discover the high demand for car rentals? </label></h6>
                          <div class="p">
                            <p>In April 2021, The Favis Group discovered the high demand for car rentals through their partnership with  <a href="https://turo.com/us/en/drivers/5623072" target="_blank">Turo.</a>
                            </p>
                          </div>
                        </div>
                        <div class="c">
                          <input type="checkbox" id="faq-6" />
                          <h6><label for="faq-6">How did The Favis Group address the challenges of managing their fleet?  </label></h6>
                          <div class="p">
                            <p>The Favis Group initially faced challenges managing the fleet within their residential neighborhood due to conflicts with homeowner's associations and legal restrictions. However, a supportive friend offered them a warehouse for vehicle storage and shuttle services. They also rented a new location near the airport to establish a more suitable base of operations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" lg="6" className="mb-4">
                      <div className="accordion_help">
                        <div class="c">
                          <input type="checkbox" id="faq-2" />
                          <h6><label for="faq-2">What inspired the creation of The Favis Group? </label></h6>
                          <div class="p">
                            <p>The founder of The Favis Group was inspired by transportation challenges in Worcester, Massachusetts, which led to the idea of creating a dynamic ride-sharing system that would provide convenient travel without the need to own a car. </p>
                          </div>
                        </div>
                        <div class="c">
                          <input type="checkbox" id="faq-8" />
                          <h6><label for="faq-8">What kind of workforce is The Favis Group aiming to build? </label></h6>
                          <div class="p">
                            <p>The Favis Group aims to build a capable workforce, including maintenance and detail cleaning crews, reliable staff for vehicle delivery and pick-up, and a dedicated team to handle administrative tasks, finance, accounting, marketing, sales, and IT requirements. </p>
                          </div>
                        </div>
                        <div class="c">
                          <input type="checkbox" id="faq-9" />
                          <h6><label for="faq-9">What is the target fleet size for The Favis Group by the end of this year and July 2024? </label></h6>
                          <div class="p">
                            <p>The Favis Group aims to grow its fleet to a minimum of 500 vehicles by the end of this year and reach 1,000 vehicles by July 2024.
                            </p>
                          </div>
                        </div>
                        <div class="c">
                          <input type="checkbox" id="faq-10" />
                          <h6><label for="faq-10">What is The Favis Group's ultimate objective with its Mobility Program called HOVi? </label></h6>
                          <div class="p">
                            <p>The Favis Group's ultimate objective is to fully implement a dynamic ride-sharing program called HOVi, which aims to revolutionize public transit by utilizing private vehicles, addressing traffic congestion, and reducing environmental impact.
                            </p>
                          </div>
                        </div>
                        <div class="c">
                          <input type="checkbox" id="faq-11" />
                          <h6><label for="faq-11">What is the significance of HOVi in The Favis Group's vision? </label></h6>
                          <div class="p">
                            <p>HOVi plays a vital role in reducing traffic congestion and making a positive environmental impact, aligning with The Favis Group's commitment to create a sustainable future.
                            </p>
                          </div>
                        </div>
                        <div class="c">
                          <input type="checkbox" id="faq-12" />
                          <h6><label for="faq-12">How can people get involved with The Favis Group's journey to revolutionize transportation? </label></h6>
                          <div class="p">
                            <p>People can join The Favis Group on their journey by utilizing their car rental services, supporting their Mobility Program HOVi, and being part of their vision to make a positive impact on transportation and the environment.
                            </p>
                          </div>
                        </div>
                      </div>
                    </MDBCol>

                  </MDBRow>


                  {/*<MDBRow>
                          <MDBCol md="6" lg="6" className="mb-4">
                                <MDBAccordion borderless >

                                       <MDBAccordionItem className="accordion-details" collapseId={1} headerTitle='When was The Favis Group established?'>
                                        <p className="accordion-details">The Favis Group was established in July 2015. </p>
                                      </MDBAccordionItem>
                                      <MDBAccordionItem collapseId={2} headerTitle='What inspired the creation of The Favis Group? '>
                                        The founder of The Favis Group was inspired by transportation challenges in Worcester, Massachusetts, which led to the idea of creating a dynamic ride-sharing system that would provide convenient travel without the need to own a car. 
                                      </MDBAccordionItem>
                                      <MDBAccordionItem collapseId={3} headerTitle='What was the initial venture of The Favis Group?'>
                                        The Favis Group's first venture was a used car dealership. 
                                      </MDBAccordionItem>
                                       <MDBAccordionItem collapseId={4} headerTitle="How did the COVID-19 pandemic impact The Favis Group's journey?" >
                                        The Favis Group explored other ventures like real estate and trucking, but the journey was impacted by the challenges posed by the COVID-19 pandemic. 
                                      </MDBAccordionItem>
                                       <MDBAccordionItem collapseId={5} headerTitle='When did The Favis Group discover the high demand for car rentals? '>
                                        In April 2021, The Favis Group discovered the high demand for car rentals through their partnership with Turo. 
                                      </MDBAccordionItem>
                                       <MDBAccordionItem collapseId={6} headerTitle='How did The Favis Group address the challenges of managing their fleet? '>
                                        The Favis Group initially faced challenges managing the fleet within their residential neighborhood due to conflicts with homeowner's associations and legal restrictions. However, a supportive friend offered them a warehouse for vehicle storage and shuttle services. They also rented a new location near the airport to establish a more suitable base of operations. 
                                      </MDBAccordionItem>
                                    </MDBAccordion>
                          </MDBCol>
                           <MDBCol md="6" lg="6" className="mb-4">
                                <MDBAccordion borderless initialActive={1}>
                                      <MDBAccordionItem collapseId={1} headerTitle='When was The Favis Group established? '>
                                        The Favis Group was established in July 2015. 
                                      </MDBAccordionItem>
                                      <MDBAccordionItem collapseId={2} headerTitle='What inspired the creation of The Favis Group? '>
                                      
                                      </MDBAccordionItem>
                                      <MDBAccordionItem collapseId={3} headerTitle='Accordion Item #3'>
                                      
                                      </MDBAccordionItem>
                                       <MDBAccordionItem collapseId={4} headerTitle='Accordion Item #3'>
                                      
                                      </MDBAccordionItem>
                                       <MDBAccordionItem collapseId={5} headerTitle='Accordion Item #3'>
                                      
                                      </MDBAccordionItem>
                                       <MDBAccordionItem collapseId={6} headerTitle='Accordion Item #3'>
                                      
                                      </MDBAccordionItem>
                                    </MDBAccordion>
                          </MDBCol>
                          
                        </MDBRow>*/}


                </MDBTabsPane>
                <MDBTabsPane show={verticalActive === 'tab2'}>
                  <MDBTypography
                    tag="h3"
                    className="text-center text-primary fw-bold"
                  >
                    FAQ
                  </MDBTypography>
                  <p className="text-center mb-5">
                    Frequently Asked Questions About Company Objectives:
                  </p>



                  <MDBRow>
                    <MDBCol md="6" lg="6" className="mb-4">
                      <div className="accordion_help">
                        <div class="c">
                          <input type="checkbox" id="faq-13" />
                          <h6><label for="faq-13">What is the main goal of the company?</label></h6>
                          <div class="p">
                            <p>The ultimate goal of the company is to build a community that shares rides, allowing individuals to travel from point A to point B without the need to own a vehicle. The company aims to promote high occupancy in vehicles to address traffic congestion </p>
                          </div>
                        </div>

                        <div class="c">
                          <input type="checkbox" id="faq-14" />
                          <h6><label for="faq-14">How did the company evolve from a used car dealership to a full mobility company? </label></h6>
                          <div class="p">
                            <p>The company initially started as a used car dealership in 2015 but transitioned into a full mobility company after the impact of COVID-19 in 2021. They expanded their services by adding car rental options and are now venturing into vehicle rental management. </p>
                          </div>
                        </div>
                        <div class="c">
                          <input type="checkbox" id="faq-15" />
                          <h6><label for="faq-15">What is the concept behind the vehicle rental management aspect of the business?</label></h6>
                          <div class="p">
                            <p>The company assists individuals in purchasing vehicles to add to their rental fleet or helps those interested in doing business with Turo but are overwhelmed by the rental process. They handle all rental activities on behalf of the vehicle owners in exchange for a commission, similar to property management in real estate.
                            </p>
                          </div>
                        </div>
                        <div class="c">
                          <input type="checkbox" id="faq-16" />
                          <h6><label for="faq-16">How does the company help individuals earn passive income? </label></h6>
                          <div class="p">
                            <p>The company encourages individuals with good credit to utilize their creditworthiness to earn passive income. They assist them in purchasing vehicles to add to their fleet and manage the rentals on their behalf. The company takes care of all expenses associated with car ownership and sends the net profit to the vehicle owners without requiring any effort on their part.
                            </p>
                          </div>
                        </div>
                        <div class="c">
                          <input type="checkbox" id="faq-17" />
                          <h6><label for="faq-17">Can individuals participate in the company's rental venture without owning the vehicle? </label></h6>
                          <div class="p">
                            <p>Yes, individuals can act as guarantors and use their credit to purchase the vehicle on behalf of the company. In return, they receive a monthly fee for the duration of the loan. Once the car loan is paid off, the monthly commission stops.  <a href="https://turo.com/us/en/drivers/5623072" target="_blank">Turo.</a>
                            </p>
                          </div>
                        </div>

                      </div>
                    </MDBCol>
                    <MDBCol md="6" lg="6" className="mb-4">
                      <div className="accordion_help">
                        <div class="c">
                          <input type="checkbox" id="faq-18" />
                          <h6><label for="faq-18">How does the company handle fleet expansion? </label></h6>
                          <div class="p">
                            <p>The company has various sources of fleet expansion. They acquire vehicles through their repo rescue program, where they assist people facing repossession by taking over their car loans and incorporating the vehicles into their rental fleet. They also acquire cars from individuals facing costly repairs they cannot afford and add those vehicles to their fleet.
                            </p>
                          </div>
                        </div>
                        <div class="c">
                          <input type="checkbox" id="faq-19" />
                          <h6><label for="faq-19">Are there plans to provide ride-sharing services in the future? </label></h6>
                          <div class="p">
                            <p>Yes, the company has plans to provide rides to people as part of their ride-sharing program in the near future.</p>
                          </div>
                        </div>
                        <div class="c">
                          <input type="checkbox" id="faq-20" />
                          <h6><label for="faq-20">What is the overall vision of the company?</label></h6>
                          <div class="p">
                            <p>The company aims to become a comprehensive mobility company that implements high occupancy in vehicles, thereby reducing traffic congestion on roads.</p>
                          </div>
                        </div>
                        <div class="c">
                          <input type="checkbox" id="faq-21" />
                          <h6><label for="faq-21">How can individuals learn more about the company's business model?</label></h6>
                          <div class="p">
                            <p>The complete details of the business model will be provided during the interview process, where individuals will have ample time to ask questions and gain a better understanding of the company's operations.
                            </p>
                          </div>
                        </div>

                      </div>
                    </MDBCol>

                  </MDBRow>



                  {/*<MDBRow>
                         <MDBCol md="6" lg="6" className="mb-4">
                               <MDBAccordion borderless >

                                      <MDBAccordionItem className="accordion-details" collapseId={1} headerTitle='When was The Favis Group established?'>
                                       <p className="accordion-details">The Favis Group was established in July 2015. </p>
                                     </MDBAccordionItem>
                                     <MDBAccordionItem collapseId={2} headerTitle='What inspired the creation of The Favis Group? '>
                                       The founder of The Favis Group was inspired by transportation challenges in Worcester, Massachusetts, which led to the idea of creating a dynamic ride-sharing system that would provide convenient travel without the need to own a car. 
                                     </MDBAccordionItem>
                                     <MDBAccordionItem collapseId={3} headerTitle='What was the initial venture of The Favis Group?'>
                                       The Favis Group's first venture was a used car dealership. 
                                     </MDBAccordionItem>
                                      <MDBAccordionItem collapseId={4} headerTitle="How did the COVID-19 pandemic impact The Favis Group's journey?" >
                                       The Favis Group explored other ventures like real estate and trucking, but the journey was impacted by the challenges posed by the COVID-19 pandemic. 
                                     </MDBAccordionItem>
                                      <MDBAccordionItem collapseId={5} headerTitle='When did The Favis Group discover the high demand for car rentals? '>
                                       In April 2021, The Favis Group discovered the high demand for car rentals through their partnership with Turo. 
                                     </MDBAccordionItem>
                                      <MDBAccordionItem collapseId={6} headerTitle='How did The Favis Group address the challenges of managing their fleet? '>
                                       The Favis Group initially faced challenges managing the fleet within their residential neighborhood due to conflicts with homeowner's associations and legal restrictions. However, a supportive friend offered them a warehouse for vehicle storage and shuttle services. They also rented a new location near the airport to establish a more suitable base of operations. 
                                     </MDBAccordionItem>
                                   </MDBAccordion>
                         </MDBCol>
                          <MDBCol md="6" lg="6" className="mb-4">
                               <MDBAccordion borderless initialActive={1}>
                                     <MDBAccordionItem collapseId={1} headerTitle='When was The Favis Group established? '>
                                       The Favis Group was established in July 2015. 
                                     </MDBAccordionItem>
                                     <MDBAccordionItem collapseId={2} headerTitle='What inspired the creation of The Favis Group? '>
                                     
                                     </MDBAccordionItem>
                                     <MDBAccordionItem collapseId={3} headerTitle='Accordion Item #3'>
                                     
                                     </MDBAccordionItem>
                                      <MDBAccordionItem collapseId={4} headerTitle='Accordion Item #3'>
                                     
                                     </MDBAccordionItem>
                                      <MDBAccordionItem collapseId={5} headerTitle='Accordion Item #3'>
                                     
                                     </MDBAccordionItem>
                                      <MDBAccordionItem collapseId={6} headerTitle='Accordion Item #3'>
                                     
                                     </MDBAccordionItem>
                                   </MDBAccordion>
                         </MDBCol>
                         
                       </MDBRow>*/}

                </MDBTabsPane>
                <MDBTabsPane show={verticalActive === 'tab3'}> {/*<GetInTouch/>*/}</MDBTabsPane>
              </MDBTabsContent>

            </MDBCol>
          </MDBRow>



        </section>
        <p className="text-center text-help-down">
          Join us in our mission to revolutionize transportation and reduce traffic congestion through high occupancy vehicle programs and comprehensive mobility solutions.
        </p>
        <h1 className="help-greentwo">Together, we can make a difference.</h1>
      </MDBContainer>
      <div className="contents-title text-center text-light">

        <p ><h1>Still have questions?</h1>
          <GetInTouch />
        </p>
        <p></p>
      </div>
      <center>
        <div className="get-in-touch">

          <br />
        </div>
      </center>
    </>
  );
}