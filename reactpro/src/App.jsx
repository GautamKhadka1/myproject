import Hello from "./components/Hello";
import Fruits from "./components/Fruits";

const ID = [1,2,3];
const person ={
    name: "Gautam",
    message: "Hello Mr.",
    id: [1,2,3]
};
function App() {
  return (
    <div classsname="App">
      <Hello object={person}/>
      <Fruits/>




    </div>
  );
}
export default App;
