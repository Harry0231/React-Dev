import { useState } from "react";
import Data from '../DATA.json'

const SearchTable = () => {
    const [searchTerm, setsearchTerm] = useState("");
    
 
    return (

        <div className='container'>
            <input type="text"
                placeholder='search..'
                className='form-control'
                style={{ marginTop: 50, marginBottom: 20, width: "100%" }}
                onChange={(e) => {
                    setsearchTerm(e.target.value);
                }}
            />

            <table className='table table-bordered'>

                <thead className='thead-dark'>
                    <tr>
                        <th> Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody> 
                    {Data
                    
                    
                    .filter((val) =>     {
                        if (searchTerm === "") {
                            return val;
                        } else if (
                            val.name.toLocaleUpperCase().includes(searchTerm.toLocaleUpperCase()) ||
                            val.address.city.toLocaleUpperCase().includes(searchTerm.toLocaleUpperCase())

                        ) {
                            return val
                        }
                    })
                    .map(m => (
                        <tr>
                            <td>{m.name}</td>
                            <td>{m.age}</td>
                            <td>COUNTRY- {m.address.country}, STATE- {m.address.state}, CITY- {m.address.city}, PINCODE- {m.address.pinCode} </td>

                        </tr>
                     ))
                    }
              

                    

                </tbody>
             
            </table>
        </div>

    );
}

export default SearchTable;