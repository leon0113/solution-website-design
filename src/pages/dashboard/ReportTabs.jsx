
import React from 'react'


import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ReportCompaignTable from './ReportCompaignTable';
import "./reportCompaign.css"


export default function ReportTabs() {
 

  return (
    <>


      <div >
        
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className='m-0'>
        
            <Col sm={8} className='sidebar-area shadow-end' style={{paddingTop:'30px' ,background:'none'}}>
             
            
              <Nav variant="" className="flex-row">
               
       <div className='d-flex'>
       <Nav.Item className='pe-5'>
                  <Nav.Link className='d-flex' style={{ margin: '0.2rem' }} eventKey="first">
             
                
                  
              
            <h2 className='compaign' style={{fontWeight:'500', color:'#5E5873' ,fontSize:'20px'}}>
                Compaign Level
            </h2>
         
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className='pe-5'>
                  <Nav.Link className='fs-6 d-flex' style={{ margin: '0.2rem' }} eventKey="second">
             
            <h2 className='compaign' style={{fontWeight:'500', color:'#5E5873' ,fontSize:'20px'}}>
                Adset Level
            </h2>

                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className=''>
                  <Nav.Link className='fs-6 d-flex' style={{ margin: '0.2rem' }} eventKey="third">
        
            <h2 className='compaign' style={{fontWeight:'500', color:'#5E5873' ,fontSize:'20px'}}>
                Ad Level
            </h2>
                  </Nav.Link>
                </Nav.Item>

             

               

       </div>

             


              </Nav>
            </Col>

            <hr className='' style={{border:'1px solid #5E5873'}}/>


            <Col sm={12} className='sidebar-screens'style={{backgroundColor:'#F8F8F8',paddingTop:'30px'}}>
          
              
          <Tab.Content  >


            <Tab.Pane style={{ color: "black" }} eventKey="first">
          <ReportCompaignTable />
            </Tab.Pane>
            <Tab.Pane style={{ color: "black", border: "none" }} eventKey="second">
           <ReportCompaignTable />
              <div className='mb-5'>
              </div>
            </Tab.Pane>

            <Tab.Pane style={{ color: "black", border: "none" }} eventKey="third">
            <ReportCompaignTable />
              <div className='mb-5'>
              </div>
            </Tab.Pane>
        

        





          </Tab.Content>
        </Col>
           
          </div>
        </Tab.Container>
      </div>





    </>
  )
}

























