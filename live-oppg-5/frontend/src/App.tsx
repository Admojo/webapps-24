import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import Total from "./components/Total";
import type { Student } from "./components/types"
import Filter from "./components/Filter";
import AddStudentForm from "./components/AddStudentForm";
import Student from "./components/Student";

const initialStudent = [
  {id: "1", name: "Line" },
  {id: "2", name: "Alise" },
  {id: "3", name: "Siv" },
  {id: "4", name: "Finn" },
];

function App() {

  const [filter,setFilter] = useState("-");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [students, setStudents ] = useState <Student[]>(initialStudent ?? []);

  const filteredStudents = students.filter((student) =>
    filter !== "-" ? student.name.toLowerCase().includes(filter) : true);

  // const options = Array.from(
  //   new Set(
  //     students.map((student) => student.name.trim().split(" ")[0].toLowerCase())
  //   )
  // );

  useEffect( () => {
    //Her skjer det noe 
    const fetchStudents = async () => {
      try {
        setLoading(true);
        //TODO: No hardkodet url. Move to config/index.ts
        const response = await fetch("http://localhost:3999/api/students");
        // {data: studentList}
        const data = await response.json();
        setStudents(data); // pass på at det ikke er et objekt med en liste inni.. "jeg får ikke ut data fra lista mi.."
      } catch (error) {
        console.error(error);
        setError("Opps, error - feilet ved henting av studenter! - håper du kan norsk");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
    }, []);

  const options = Array.from(
    students
      .reduce((acc, student: Student) => {
        const name = student.name.trim().split(" ")[0];
        if (acc.has(name)) return acc;

        return acc.set(name, {
          ...student,
          value: name.toLowerCase(),
          label: name,
        });
      }, new Map())
      .values()
  );

  const onFilterChange = (filter: string) => {
    setFilter(filter);
  };

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
        <Filter filter={filter} onFilterChange={onFilterChange} options={Object.values(options)} />
        <Grid 
          students={students} 
          //onAddStudent={onAddStudent} 
          onRemoveStudent={onRemoveStudent}> <AddStudentForm onAddStudent={onAddStudent} />
        </Grid>
        <Total total= {students.length} />
      </main>
    </>
  )
}
export default App;