import { useState } from "react";
import Student from "./Student";
import type {Student as StudentProp} from "./types";
import AddStudentForm from "./AddStudentForm";


type GridProps = {
    students: StudentProp[];
}

export default function Grid(props: GridProps){

    // const {students} = props; 

    // TODO: Legg til state her og bruk prop-listen som deafult state
    const [students, setStudents] = useState (props.students ?? []);

    const onAddStudent = (student: {name: string}) => {

    }

    return(
        <>
       
        <section>
            <article className="grid">
                {students.map((student) => (
                    <Student key={student.id} name={student.name} id={student.id} />
                ))}
            </article>
            <AddStudentForm onAddStudent= {onAddStudent}/>
        </section>
         
        </>
    )
}