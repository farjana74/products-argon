import React from 'react';
import { Badge, Card, CardHeader, DropdownItem, DropdownMenu, DropdownToggle, Media, Progress, Row, Table, UncontrolledDropdown, UncontrolledTooltip } from 'reactstrap';

const Details = ({users}) => {
    const{company,name}=users
    return (
       
            
 
                   <tbody>
                  <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                           
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              {users.company}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      
                      <td>$2,500 USD</td>
                      
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          pending
                        </Badge>
                      </td>
                      <td>
                      <Media>
                            <span className="mb-0 text-sm">
                              {users.company}
                            </span>
                          </Media>
                      </td>
                      <td>
                       
                      </td>
                      <td className="text-right">
                       
                      </td>
                    </tr> 
                    </tbody> 
               
      
    );
};

export default Details;