import React, { Component } from 'react';

export default class NumberSum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        name: "DAVID CARLSON",
        age: 30,
        address: {
          country: "Westeros",
          state: "The Crownlands",
          city: "london",
          pinCode: 500015
        }
      },
      {
        name: "JOHN CENA",
        age: 35,
        address: {
          country: "Westeros",
          state: "The Crownlands",
          city: " canada",
          pinCode: 500014
        }
      },

      {
        name: "MIKE SHERIDAN",
        age: 25,
        address: {
        country: "Westeros",
        state: "The Crownlands",
        city:" russia",
        pinCode: 500014
        }
        },
        {
        name: "Stark CARTE",
        age: 500,
        address: {
        country: "Westeros",
        state: "The Crownlands",
        city: "delhi",
        pinCode: 500013
        }
        }
      ]
    }

    
  }
  render() {
    const tableBody = this.state.data.map((item =>
      <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>COUNTRY- {item.address.country}, STATE- {item.address.state}, CITY- {item.address.city}, PINCODE- {item.address.pinCode} </td>

                        </tr>
    ));
    const total = (this.state.data.reduce((total, currentItem) => total = total + currentItem.age, 0));
    return (

                
  
      <table className='table table-bordered'>

                <thead className='thead-dark'>
                    <tr>
                        <th> Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
        <tbody>{tableBody}
        </tbody>
        <tfoot className='thead-dark'>
          <tr >
          Total:
          {total}
        </tr>
        </tfoot>
      </table>
      );
     
     
  }
}