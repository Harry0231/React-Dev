import React from 'react'
import Props2 from '../Components/Props2'



const PropsExample = (props) => {
//method call re-render 1 way
    // React.useEffect(()=>{
    //   props.ChangeNameProps();
    // })
    const ChangeName =()=>{
        props.ChangeNameProps()

    }
// const PropsExample = ({title}) => {

  return (
   <>
   <h1> PROPS-EXAMPLE</h1>
   {/* 1st example */}
   <h2> {props.title} { props.name}</h2> 


   {/* <h4>{props.NewObjName.objage}</h4>
   <h6>{props.newNameArr[0]}</h6>  */}
   {/* <p>{props.Age}</p> */}
   
   {/* 2nd way */}
   {/* <h2> {title}</h2>   */}

   {/* method call in button 2nd way */}
   <button onClick={ChangeName}>click</button>
   <Props2 {...props}/>
  

   
   </>
  )
}

export default PropsExample
