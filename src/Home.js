import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import {
    Badge,
    Card,
    CardHeader,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
  } from "reactstrap";
import Details from './Details';
  // core components

const Home = () => {
    const[user,setUser]=useState([])
    useEffect(()=>{
        fetch('https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba')
        .then(res=>res.json())
        .then(data=>setUser(data.clients))
    },[])
    
    return (
       
        // reactstrap components

<>

        {/* Page content */}
        <Container className="mt--7" fluid>
            <h2>Company Details</h2>
        <Row className="mt-5">
            <div className="col">
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="text-white mb-0">Card tables</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Company</th>
                      <th scope="col">Budget</th>
                      <th scope="col">Status</th>
                      <th scope="col">Name</th>
                     
                      <th scope="col" />
                    </tr>
                  </thead>
         
          {
              user.map(users=><Details
              users={users}
              ></Details>)
          }
           </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  };
  
  
    


export default Home;