function Students(props){
    console.log(props);
    return(
        <div style={
            {backgroundColor:'lightblue',margin:10}
        }>
            <h1> Name: Hello {props.name}</h1>
            <h2> Email:{props.email}</h2>
            <h3> Address:{props.other.address}</h3>
            <h4>Phone: {props.other.phone}</h4>

        </div>
    )
}export default Students;