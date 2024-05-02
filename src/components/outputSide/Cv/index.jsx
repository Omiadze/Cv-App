import "./index.css";

const index = ({ inputState }) => {
  return (
    <div className="output-container">
      <div className="general-info-content">
        <h1>
          {inputState.firstName} {inputState.username}
        </h1>
        <p>
          <b>Email: </b>
          {inputState.email}
        </p>
        <p>
          <b>Phone Number: </b>
          {inputState.number}
        </p>
      </div>
      <div className="education-info-content">
        <div className="h1">
          <h1>Education</h1>
        </div>
        <h2>Faculty: </h2>
        <p>{inputState.faculty}</p>
        <h2>University: </h2>
        <p>{inputState.university}</p>
        <br></br>

        <p>From: {inputState.startDate}</p>
        <p>To: {inputState.endDate}</p>
        <div className="experience-info-content">
          <div className="h1">
            <h1>Experience</h1>
          </div>
          <h2>Company: </h2>
          <p>{inputState.company}</p>
          <h2>Position: </h2>
          <p>{inputState.role}</p>
          <br></br>

          <p>From: {inputState.startDate}</p>
          <p>To: {inputState.endDate}</p>
        </div>
      </div>
    </div>
  );
};

export default index;
