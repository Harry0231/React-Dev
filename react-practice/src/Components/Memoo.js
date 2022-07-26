import React,{useState,useMemo} from 'react'

const Memoo = () => {

    const[count,setCount] = useState(0);
    const[item,setItem] = useState(10);
//when i click on count multicount is also update and call the function it is valid but when i click on item btn the
//  multicount is not update but the function is automaticallly called so for this we use useMemo

    // function multiCount(){
    //     console.log(multiCount)

    //     return count*5;
    // }

    //using useMemo Hook

    const multiCountMemo = useMemo(function multiCount(){
        console.log(multiCount)

        return count*5;
    },[count])

  return (
    <div>
        <h1>count is- {count}</h1>
        <h1>item is- {item}</h1>
        {/* <h2>multicount is- {multiCount()}</h2>                     in normal function */}
        <h2>multicount is- {multiCountMemo}</h2>


        <button onClick={()=>setCount(count+1)}>count update</button>
        <button onClick={()=>setItem(item*5)}>item update</button>



    
    </div>
  )
}

export default Memoo
