
function Func(){
    let data= "hello my world"
    function apple (){
        data="harry-potter"
        alert(data)
        
    }
    return(
        <div>
            <h1>
                {data}
            </h1>
            <button onClick={apple}>click me</button>
        </div>
    )

}export default Func;