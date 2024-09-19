import Grid from "./components/Grid";
import Student from "./components/Student";

const students = [
  {id: "1", name: "Line" },
  {id: "2", name: "Alise" },
  {id: "3", name: "Siv" },
  {id: "4", name: "Finn" },
];

function App() {

  
  return (
    <>
      <main>
        {/* <h1>Start</h1> */}
        {/* <Student name="mari" id="123"/> */}
        {/* <Student name={name} id={id}></Student> */}
        <Grid students={students}/>
      </main>
    </>
  )
}
export default App;