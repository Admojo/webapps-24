import { useState } from "react";
import Avatar from "./Avatar";
import type { Student as StudentProps} from "./types";


export default function Student(
    props: StudentProps & {
        onRemoveStudent: (id: string) => void;
    },
) {
    const [showRemove, setShowRemove] = useState(false);
    const {id, name, onRemoveStudent} = props;

    const updateShowState = () => {
        setShowRemove(true);
    };

    return (
        <>
            <div
            onMouseOver={updateShowState}
            onMouseLeave={() => setShowRemove(false)}
        ></div>
            <Avatar name = {name} />
            <h1 className="student-name"> {name} {id}</h1>
            {showRemove ? (
                <button type = "button" onClick={() => onRemoveStudent(id)}> Slett </button>
            ) : null}
        </>
    ) 
}