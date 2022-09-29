
import Person from "./Components/Person/Person";

function App() {
  return (
    <div className="App"  class="container col-3 mt-3">
      <div >
        <Person LastName={"Doe,"} FirstName={"Jane"}
        Age={45}
        HairColor={" Black"}/>
      </div>
      <div >
        <Person LastName={"Smith,"} FirstName={"John"}
        Age={88}
        HairColor={" Brown"}/>
      </div>
      <div >
        <Person LastName={"Fillmore,"} FirstName={"Millard"}
        Age={50}
        HairColor={" Brown"}/>
      </div>
      <div >
        <Person LastName={"Smith,"} FirstName={"Maria"}
        Age={62}
        HairColor={" Brown"}/>
      </div>
    </div>
  );
}

export default App;
