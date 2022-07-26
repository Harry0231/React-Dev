

import "./styles.css";
import { items } from "./itemList";
import { useState } from "react";
import Categorys from "./Category";
import Electronic from "./Electronic";
function App() {
  const [showdata, setShowdata] = useState(false);
  const [valuee, setValuee] = useState(items);
  const [totalcount, setTotalcount] = useState(null);

  const [total, setTotal] = useState();
  const [searchData, setSearchData] = useState(true);
  
  const dataa = valuee ?.filter((x) => {
    if (x.stocked === true) {
      return x;
    }
  });

  const handleClick = () => {
    setShowdata(true);

    {
    
      if (showdata) {
        setValuee(items);
        setShowdata(false);
      } else {
        setValuee(dataa);
      }
    }
  };

  function handleChange(event) {
    {
      var resultdata = items?.filter((r) => {
        if (r.name.toLowerCase().includes(event.target.value)) {
          return r;
        }
      });
      setSearchData(true);
      if (resultdata) {
        setValuee(resultdata);
      } else {
        setValuee(items);
      }
      const totaldata = resultdata?.filter((r) => r.name).length;
      setTotalcount(totaldata);
    }
    let mapped = (resultdata || valuee).map((e) => e.price);
    let str = mapped.join("");
    var data = str.replace(/\$/g, " ");
    let arr = data.split(" ");
    var sum = arr.reduce((a, b) => a + Number(b), 0);
    setTotal(sum);
    // console.log(sum);
  }
  // let total1 = valuee.map((e) => e.price);

  // let str = total1.join("");

  // var pri = str.replace(/\$/g, " ");

  // let arr = pri.split(" ");

  // console.log(typeof arr[0]);

  // let sum = arr.reduce((a, b) => a + Number(b), 0);
  // setTotal(sum);
  // console.log(sum);

  // console.log(valuee);

  // let total= items.reduce((total,currentitem)=>total=total +currentitem.price)

  return (
    <div align="center">
      <input type="text" placeholder="Search..." onChange={handleChange} />
      <br></br>
      <input type="checkbox" onClick={handleClick} />
      Only Stock Products
      <table border={1} align="center">
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>

        <Categorys valuee={valuee} val={dataa} />
        <Electronic valuee={valuee} />
        <td>
          <b>Total</b>
        </td>
        <td>${total}</td>
      </table>
    </div>
  );
}
export default App;
