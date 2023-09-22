import React from 'react';
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {Container}  from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography,MDBAccordion,MDBAccordionItem} from "mdb-react-ui-kit";
import { MDBTabs ,MDBTabsItem, MDBTabsLink,  MDBTabsContent,  MDBTabsPane} from 'mdb-react-ui-kit';

export default function AskQuestion() {
  return(
    <>
    <Container>

                          <h1 className="text-center ">
                            Frequently asked questions
                          </h1>
                          <h3 className="mb-5 text-center">The Favis Car Rental's Turo Co-Host <br/>Contract for Vehicle Rental Management Services:
                          </h3>

                         

                          <MDBRow>
                          <MDBCol md="6" lg="6" className="mb-4">
                            <MDBAccordion flush >
      <MDBAccordionItem collapseId={1} headerTitle='What services does The Favis Car Rental provide under this Co-Host agreement?'>
The Favis Car Rental offers rental management services for the vehicles that the Vehicle Owners bring into their rental fleet. 
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='How are the Rental Management Services fees determined?'>
        The Rental Management Services fees are based on the rental income and the number of vehicles the Vehicle Owner has under The Favis' management program. Here are the details: 

If the Vehicle is rented at less than $100 per day, The Favis receives 30% of the rental income. 

If the Vehicle is rented at $100 or more per day, The Favis receives 25% of the rental income. 

If the Vehicle Owner owns 12 or more vehicles under The Favis' management program, The Favis receives 25% of the rental income. 

If the Vehicle Owner owns 12 or more vehicles under The Favis' management program, and some of the vehicles are rented at $100 or more per day, the fee ranges from 20% to 25% of the rental income. 
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle='How does The Favis advertise the vehicles to maximize rental potential?'>
        The Favis advertises the vehicles on the Turo platform to reach a wider audience and increase rental potential. 
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={4} headerTitle='Will The Favis provide marketing materials to the Vehicle Owners?'>
        The Favis will provide marketing materials, including but not limited to flyers and brochures, to assist Vehicle Owners in promoting their rentals.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={5} headerTitle='Who is responsible for vehicle maintenance and cleaning?'>
       The Favis is responsible for ensuring that the Vehicle is clean and well-maintained before each rental. They will perform routine maintenance and inspections to ensure the Vehicle is in good working order. However, major, or minor mechanical, body, or electrical repairs are the responsibility of the Vehicle Owner.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={6} headerTitle='What about insurance coverage during the rental period? '>
       Owner must always maintain the required insurance on their Vehicle. Additionally, Turo provides insurance coverage for the Vehicle during the rental period.
      </MDBAccordionItem>
        
              <MDBAccordionItem collapseId={8} headerTitle='Can the Vehicle be rented outside of the Turo platform during the term of this Agreement?'>
        No, the Vehicle cannot be rented outside of the Turo platform while this agreement is in effect. 
        </MDBAccordionItem>
    </MDBAccordion>

                             </MDBCol>
                             <MDBCol md="6" lg="6" className="mb-4">
                            <MDBAccordion flush >
     <MDBAccordionItem collapseId={11} headerTitle="Can The Favis use the Individual's name and image for advertising and promotional materials">
        The Favis may use the Individual's name and image in advertising and promotional materials related to the rental of the Vehicle, but only with the Individual's prior consent.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={7} headerTitle='How does payment work under this agreement?'>
          The Favis will collect all rental fees and then remit the payment to the Vehicle Owner after deducting the Rental Management Services fees as described in Section 1.2. They will also provide a monthly statement of rental income and fees to the Vehicle Owner.
        </MDBAccordionItem>
      <MDBAccordionItem collapseId={9} headerTitle='What is the duration of this Agreement, and how can it be terminated?'>
        The Agreement is effective from the date first written above and will continue until either party terminates it with thirty (30) days' written notice. Alternatively, either party may terminate the agreement immediately upon written notice in the event of a material breach by the other party.
      </MDBAccordionItem>
        <MDBAccordionItem collapseId={10} headerTitle='What are the representations and warranties made by both parties?'>
        Vehicle Owner represents and warrants that they are the legal owner of the Vehicle and have the right to enter into this Agreement. They shall provide The Favis with necessary documents such as Vehicle registration and proof of insurance. The Favis represents and warrants that they will provide the Rental Management Services in a professional and competent manner.
        </MDBAccordionItem>
       
        <MDBAccordionItem collapseId={12} headerTitle='What is the governing law for this Agreement?'>
        This Agreement shall be governed by and construed in accordance with the laws of the state in which the Vehicle is registered.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={13} headerTitle='How will any disputes be resolved? '>
        Any disputes arising out of or related to this Agreement shall be resolved through arbitration in accordance with the rules of the American Arbitration Association.
               </MDBAccordionItem>
         <MDBAccordionItem collapseId={14} headerTitle="Is there anything else I should know about this agreement?">
          This Agreement constitutes the entire agreement between the parties and supersedes all prior negotiations, understandings, and agreements between them. It cannot be amended or modified except in writing and signed by both parties.
         </MDBAccordionItem>
      
    </MDBAccordion>

                             </MDBCol>
                           </MDBRow>

    </Container>
    </>
  );
}