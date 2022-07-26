// 1. Populate Category wise items on the screen.

// 2. Item not in the stock needs to be highlighted with red color.

// 3. Add a checkbox with the name "Only show products in stock"

// a. Show in-stock product when it is checked and vice versa

// 4. Add the input box above checkbox with the placeholder "Search...",

// a. when the user types any item name (partially or full), filtered data should be updated in real-time in the table.

// b. Show total search items on top.

// 5. Add the total price at the bottom of the table, It should be updated in real-time.
import "./App.css";
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

  const handleClick = () => {
    setShowdata(true);

    {
      let dataa = valuee?.filter((x) => {
        if (x.stocked === true) {
          return x;
        }
      });
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
    <div className="App" align="center">
      <input type="text" placeholder="Search..." onChange={handleChange} />
      <br></br>
      <input type="checkbox" onClick={handleClick} />
      Only Stock Products
      <table border={1} align="center">
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>

        <Categorys valuee={valuee} />
        <Electronic valuee={valuee} />
        <td>
          <b>Total</b>
        </td>

        <td>${total} </td>
        <tr>
          <td>
            <b>Total show product</b>
          </td>
        </tr>
        <b>{totalcount}</b>
      </table>
    </div>
  );
}
export default App;
