import { useState } from "react";
import { Button, Row } from "react-bootstrap";

import TableNew from "./Table";

function Form() {
  const [dataa, setDataa] = useState([]);
  const [error, setError] = useState({});
  const [isUpdate, setUpdate] = useState("");

  const [empty, setEmpty] = useState("");

  const [State, setState] = useState({
    id: "",
    task: "",
    description: ""
  });

  // const handleChange = (e) => {
  //   if (isUpdate) {
  //     console.log("true");
  //   } else {
  //     console.log("false");
  //     setState({ ...State, id: e.target.value });
  //   }
  // };

  const updatedData = (updatedata) => {
    setState(updatedata);
    setUpdate(true);
  };

  const formValidation = (field) => {
    const checkErrrr = {};
    if (!field.task) {
      checkErrrr.task = "Required";
    }
    if (!field.id) {
      checkErrrr.id = "Required";
    }
    return checkErrrr;
  };
  const handleCreate = () => {
    const postdata = {
      id: State.id,
      task: State.task,
      description: State.description
    };

    if (State.id === "" || State.task === "") {
      console.log("true");
      setError(formValidation(State));
    } else if (!State.task || !State.id) {
      setError(formValidation(State));
    } else if (!isUpdate) {
      console.log("false");
      const updatedData = [...dataa];
      // const id = updatedData.length + 1;

      console.log(postdata);
      updatedData.push(postdata);
      setDataa(updatedData);
      setError("");
      setState("");
      console.log(dataa);
    }
  };

  const handleSave = () => {
    const editdata = {
      id: State.id,
      task: State.task,
      description: State.description
    };
    const editedData = [...dataa];
    const index = dataa.findIndex((data) => data.id === State.id);
    editedData[index] = editdata;
    setDataa(editedData);
    setState("");
    setError("");
  };

  return (
    <>
      <div>
        <h1>TODO-FORM</h1>
        <form onSubmit={handleCreate}>
          <>
            <Row>
              <label>ID</label>
              <input
                className="form-control"
                type="text"
                name="id"
                value={State.id || empty}
                onChange={(e) => setState({ ...State, id: e.target.value })}
                placeholder="id"
              ></input>
              <p style={{ color: "red" }}>{error.id}</p>
            </Row>
            <br></br>
            <Row>
              <label>TITLE</label>
              <input
                type="text"
                className="form-control"
                name="task"
                value={State.task || empty}
                onChange={(e) => setState({ ...State, task: e.target.value })}
                placeholder=" Title "
              ></input>
              <p style={{ color: "red" }}>{error.task}</p>
            </Row>
            <br></br>

            <Row>
              <label>DESCRITION</label>
              <input
                name="description"
                className="form-control"
                type="text"
                value={State.description || empty}
                onChange={(e) =>
                  setState({ ...State, description: e.target.value })
                }
                placeholder=" description "
              ></input>
              <p style={{ color: "red" }}>{error.description}</p>
            </Row>
            <br></br>
          </>
          <Button onClick={() => handleCreate()} className="button button1">
            CREATE
          </Button>
          <Button onClick={() => handleSave()} className="button button2">
            SAVE
          </Button>
        </form>
        <br></br>
        <div>
          <TableNew mydata={dataa} myupdate={updatedData} mysave={dataa} />
        </div>
      </div>
    </>
  );
}
export default Form;
