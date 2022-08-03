
import './App.css';
import { useState } from 'react';

function App() {
  const list =[
    "Harry",
    "Alice",
    "Bob",
    "jest",
    "himanshu",
    "she",    
    "kukmar"
  ]
  const [search, setSearch]=useState(list)

  
  const handleSearch = (event) => {

    if (event.target.value === "") {
      setSearch(list);
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setSearch(filteredValues);
  };
  return (
    <div className="app">
      <div>
        <input type="text" placeholder="search..." onChange={handleSearch}></input>
      </div>
     {search.map((item,index)=>(
      <div key={index}>{item}</div>

       )  )
    }
    </div>
  );
}

export default App;
