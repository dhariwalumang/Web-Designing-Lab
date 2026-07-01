function Student(props) {
  return (
    <div className="student-card">
      <h2>{props.name}</h2>
      <p>{props.course}</p>
      <p>{props.marks}</p>
    </div>
  );
}

export default Student;