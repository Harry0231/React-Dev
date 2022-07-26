import React, { useState } from "react";

import { Table } from "react-bootstrap";
import ReactDeleteRow from "react-delete-row";
import "./Table.css";

function TableNew(props) {
  const [sortorder, setsortOrder] = useState(true);

  const [dataa, setDataa] = useState([]);

  const onUpdate = (dataaa) => {
    props.myupdate(dataaa);
  };

  const handleSort = (dataaa) => {
    console.log(dataaa);
    setsortOrder(true);
    if (sortorder) {
      setsortOrder(false);
      setDataa(dataaa.sort((a, b) => (a.id < b.id ? 1 : -1)));
    } else {
      setDataa(dataaa.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
    console.log(dataa);
  };

  return (
    <div>
      <h1>Data Table</h1>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sr Number.</th>
              <th onClick={() => handleSort(props.mydata)}>ID</th>
              <th onClick={() => handleSort(props.mydata)}>TASK</th>
              <th>DESCRITION</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {props.mydata?.map((dataaa, i) => (
              <ReactDeleteRow
                key={i}
                data={dataaa}
                deleteElement={
                  <button className="button button3">Delete</button>
                }
                onDelete={(dataaa) => {
                  return window.confirm(`Are you sure "${dataaa.task}" data? `);
                }}
              >
                {console.log(i)}
                <td>{i + 1}</td>
                <td>{dataaa.id}</td>
                <td>{dataaa.task}</td>
                <td>{dataaa.description}</td>
                <td>
                  <button
                    className="button button1"
                    onClick={() => onUpdate(dataaa)}
                  >
                    UPDATE
                  </button>
                </td>
              </ReactDeleteRow>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default TableNew;
