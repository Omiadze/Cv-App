import General from "./components/inputSide/General/Index";
import Education from "./components/inputSide/Education/Index";
import Experience from "./components/inputSide/Experience/Index";
import Cv from "./components/outputSide/Cv";
import "./App.css";
import { useState } from "react";

function App() {
  const [generalState, setGeneralState] = useState({
    firstName: "",
    surname: "",
    email: "",
    number: "",
  });
  const [educationState, setEducationState] = useState({
    uni: "",
    faculty: "",
  });
  const [experienceState, setExperienceState] = useState({
    company: "",
    role: "",
  });
  const [dateState, setDateState] = useState({
    startDateForEdu: "",
    endDateForEdu: "",
    startDateForExp: "",
    endDateForExp: "",
  });

  return (
    <>
      <h1 className="title">CV Aplication</h1>
      <div className="main-container">
        <div className="input-container">
          <div className="general">
            <General
              generalState={generalState}
              setGeneralState={setGeneralState}
            />
          </div>
          <div className="education">
            <Education
              educationState={educationState}
              setEducationState={setEducationState}
              dateState={dateState}
              setDateState={setDateState}
            />
          </div>
          <div className="experience">
            <Experience
              experienceState={experienceState}
              setExperienceState={setExperienceState}
              dateState={dateState}
              setDateState={setDateState}
            />
          </div>
        </div>
        <div className="cv">
          <Cv
            generalState={generalState}
            educationState={educationState}
            experienceState={experienceState}
            dateState={dateState}
          />
        </div>
      </div>
    </>
  );
}

export default App;
