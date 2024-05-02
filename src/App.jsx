import General from "./components/inputSide/General/Index";
import Education from "./components/inputSide/Education/Index";
import Experience from "./components/inputSide/Experience/Index";
import Cv from "./components/outputSide/Cv";
import "./App.css";
import { useState } from "react";
function App() {
  const [inputState, setInputState] = useState({
    firstName: "",
    surname: "",
    email: "",
    number: "",
    uni: "",
    faculty: "",
    company: "",
    role: "",
    startDate: "",
    endDate: "",
  });
  console.log(inputState);
  return (
    <>
      <h1 className="title">CV Aplication</h1>
      <div className="main-container">
        <div className="input-container">
          <div className="general">
            <General
              generalState={inputState}
              setGeneralState={setInputState}
            />
          </div>
          <div className="education">
            <Education
              educationState={inputState}
              setEducationState={setInputState}
            />
          </div>
          <div className="experience">
            <Experience
              experienceState={inputState}
              setExperienceState={setInputState}
            />
          </div>
        </div>
        <div className="cv">
          <Cv inputState={inputState} />
        </div>
      </div>
    </>
  );
}

export default App;
