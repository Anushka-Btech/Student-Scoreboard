import {useState} from "react";

function StudentRow({
student,
updateScore
}){

const [newScore,setNewScore]=useState(
student.score
);

const saveScore=()=>{
updateScore(
student.id,
newScore
)
}

const pass=student.score>=40;

return(
<tr className={pass ? "pass-border":"fail-border"}>

<td>
{student.name}
</td>

<td className="score">
{student.score}
</td>

<td>
<span className={
pass
? "status pass"
: "status fail"
}>
● {pass ? "PASS":"FAIL"}
</span>
</td>

<td>

<div className="update-box">

<input
type="number"
value={newScore}
onChange={(e)=>
setNewScore(
e.target.value
)}
/>

<button
onClick={saveScore}
>
SAVE
</button>

</div>

</td>

</tr>
)
}

export default StudentRow;