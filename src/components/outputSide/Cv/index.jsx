import "./index.css";
import Email from "../../Svg/Email";
import Phone from "../../Svg/Phone";
import Education from "../../Svg/Education";
import Experience from "../../Svg/Experience";

const index = ({
  generalState,
  educationState,
  experienceState,
  dateState,
}) => {
  return (
    <div className="output-container">
      <div className="general-info-content">
        <h1>
          {generalState.firstName} {generalState.username}
        </h1>
        <p className="general-p">
          <Email />
          <b>Email: </b>
          {generalState.email}
        </p>
        <p className="general-p">
          <Phone />
          <b>Phone Number: </b>
          {generalState.number}
        </p>
      </div>

      <div className="education-info-content">
        <div className="h1">
          <Education />
          <h1>Education</h1>
        </div>
        <h2>Faculty: </h2>
        <p>{educationState.faculty}</p>
        <h2>University: </h2>
        <p>{educationState.university}</p>
        <br></br>
        <p>From: {dateState.startDateForEdu}</p>
        <p>To: {dateState.endDateForEdu}</p>

        <div className="experience-info-content">
          <div className="h1">
            <Experience />
            <h1>Experience</h1>
          </div>
          <h2>Company: </h2>
          <p>{experienceState.company}</p>
          <h2>Position: </h2>
          <p>{experienceState.role}</p>
          <br></br>
          <p>From: {dateState.startDateForExp}</p>
          <p>To: {dateState.endDateForExp}</p>
        </div>
      </div>
    </div>
  );
};

export default index;
