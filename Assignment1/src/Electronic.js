import React from "react";
import { items } from "./itemList";
function Electronic(props) {
  let edata = items.filter((e) => e.category === "Electronics");
  console.log(edata);

  let mapped = edata.map((e) => e.price);
  let str = mapped.join("");
  var data = str.replace(/\$/g, " ");
  let arr = data.split(" ");
  var sum = arr.reduce((a, b) => a + Number(b), 0);

  return (
    <tbody>
      <tr>
        <th>Electronics</th>
      </tr>

      {(props.valuee || items)?.map((m) => {
        if (m.category === "Electronics") {
          return (
            <tr
              style={m.stocked === true ? { color: "black" } : { color: "red" }}
            >
              <td>{m.name}</td>
              <td>{m.price}</td>
            </tr>
          );
        } else {
          return null;
        }
      })}
      <tr>
        <td>
          <b>${sum}</b>
        </td>
      </tr>
    </tbody>
  );
}

export default Electronic;
