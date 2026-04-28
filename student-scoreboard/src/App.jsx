import { useState } from "react";
import Header from "./components/Header";
import AddStudentForm from "./components/AddStudentForm";
import StudentTable from "./components/StudentTable";

function App() {

const [students,setStudents]=useState([
{
id:1,
name:"Aman",
score:78
},
{
id:2,
name:"Riya",
score:45
},
{
id:3,
name:"Karan",
score:90
},
{
id:4,
name:"Neha",
score:32
}
]);

const addStudent=(name,score)=>{
const newStudent={
id:Date.now(),
name,
score:Number(score)
};

setStudents([...students,newStudent]);
};

const updateScore=(id,newScore)=>{
setStudents(
students.map(student =>
student.id===id
? {...student,score:Number(newScore)}
: student
)
)
}

const passedCount=students.filter(
student=>student.score>=40
).length;

const avgScore=Math.round(
students.reduce(
(total,s)=>total+s.score,0
)/students.length
);

return (
<div className="container">

<Header/>

<AddStudentForm addStudent={addStudent}/>
<div className="boot-msg">
SYSTEM STATUS: ONLINE
</div>

<div className="stats">

<div className="card">
<p>TOTAL</p>
<h2>{students.length}</h2>
</div>

<div className="card">
<p>PASSED</p>
<h2>{passedCount}</h2>
</div>

<div className="card">
<p>AVG SCORE</p>
<h2>{avgScore}</h2>
</div>

</div>

<StudentTable
students={students}
updateScore={updateScore}
/>

<footer>
ACADEMIC TERMINAL · SECURE SESSION
</footer>

</div>
)
}

export default App;