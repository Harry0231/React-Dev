// 1. render out each piece of gear from inventory on page

// 2. Add a number on top of the page that is the sum of damage from all pieces of gear that are equipped.

// 3. Add a toggle button to the gear row that will toggle the isWorn property to inverse.

// 4. Add logic to toggle to only allow gear to be equipped if another piece of gear is not equipped in the same slot

import "./App.css";
import React, { useState } from "react";

import { items } from "./ItemList";
// id: number;
// name: string;
// slot: string;
// isWorn: boolean;
// damage: number;
// defense: number;

export default function App() {
  const [show, setShow] = useState(items);
  const abc = show.filter((a) => a.isWorn);
  const k = "slot";

  const final = [...new Map(abc.map((data) => [data[k], data])).values()];

  const showGear = final.map((x) => (
    <div key={x.id}><hr/>
      {x.name}---{x.slot} <hr/>
    </div>
  ));

  console.log(show);

  let Damagesum = final.reduce((a, b) => a + b.damage, 0);

  let Defensesum = final.reduce((a, b) => a + b.defense, 0);


  console.log(Damagesum);

  function handleChange() {
    setShow(
      show.map((val) =>
        val.isWorn ? { ...val, isWorn: false } : { ...val, isWorn: true }
      )
    );
  }

  return (
    <div className="container">
      <h1 className="title">Player Stat Sheet</h1> <hr/>
      <h3>Stats:</h3> 
      <div className="flex-hor">
        <div>
          Damage: <b>{Damagesum} </b>  <hr/>
        </div>
        <div>
          Defense:<b> {Defensesum} </b>  <hr/>
        </div>
      </div>
      <h3>Items:</h3>
      <input type="checkbox" onChange={handleChange} />
      <span>
        <b>TOOGLE</b>
      </span>
      <br />
      <br />
      <div>
        <b>Display Here : </b>
      </div>
      <div>{showGear}</div>
    </div>
  );
}
