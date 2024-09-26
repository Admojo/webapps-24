import { useState } from "react";
import Grid from "./components/Grid";
import Total from "./components/Total";
import type { Student } from "./components/types"

const initialStudent = [
  {id: "1", name: "Line" },
  {id: "2", name: "Alise" },
  {id: "3", name: "Siv" },
  {id: "4", name: "Finn" },
];

function App() {
  const [students, setStudents ] = useState <Student[]>(initialStudent ?? [])

  const onAddStudent = (student: {name: string}) => {
    setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student }]);
}

const onRemoveStudent = (id: string) => {
  setStudents((prev) => prev.filter((student) => student.id !== id));
};
  
  return (
    <>
      <main>
        {/* <h1>Start</h1> */}
        {/* <Student name="mari" id="123"/> */}
        {/* <Student name={name} id={id}></Student> */}
        <Grid students={students} onAddStudent={onAddStudent} onRemoveStudent={onRemoveStudent}/>
        <Total total= {students.length} />
      </main>
    </>
  )
}
export default App;