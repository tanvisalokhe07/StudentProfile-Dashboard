function StudentCard(props){
    return(
        <div>
    {props.student.map((s)=>{
        return(
        <div>
        <h3>{s.Name}-{s.Age}-{s.Course}-{s.City}</h3>
        </div>
        );
    }
    )}
    </div>
);  
    }

export default StudentCard;