import Avatar from "./Avatar";
import type { Student as StudentProps} from "./types";


export default function Student(props: StudentProps) {
    
    const {id, name} = props;
    return (
        <>
            <Avatar name = {name} />
            <h1 className="student-name"> {name} {id}</h1>
        </>
    ) 
}