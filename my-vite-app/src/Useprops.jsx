function Student(props) {
  return (
    <div>
      <h3>Student Name: {props.name}</h3>
      <p>Roll Number: {props.roll}</p>
    </div>
  );
}

function Useprops() {
  return (
    <div>
        
      <h2>Student Details</h2>

      <Student name="Ali" roll="1" />
      <Student name="Sara" roll="2" />
      <Student name="John" roll="3" />

    </div>
  );
}

export default Useprops;