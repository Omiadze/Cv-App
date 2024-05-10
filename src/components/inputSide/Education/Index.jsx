import CreateInput from "../CreateInput";
import Submit from "../Submit";
import { useState } from "react";
import "./index.css";
const Index = ({
  educationState,
  setEducationState,
  dateState,
  setDateState,
}) => {
  const [visible, setVisible] = useState(false);
  const onChange = (e) => {
    const propertyName = e.target.id;
    educationState[propertyName] = e.target.value;
    dateState[propertyName] = e.target.value;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setEducationState({ ...educationState });
    setDateState({ ...dateState });
  };

  const onDeleteClick = () => {
    setEducationState({
      uni: "",
      faculty: "",
    });
    setDateState({
      startDateForEdu: "",
      endDateForEdu: "",
      startDateForExp: "",
      endDateForExp: "",
    });
  };

  if (!visible) {
    return (
      <div>
        <button
          className="edu-btn"
          onClick={() => {
            setVisible(true);
          }}
        >
          Education
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <form action="">
          <button
            className="edu-btn"
            onClick={() => {
              setVisible(false);
            }}
          >
            Education
          </button>
          <CreateInput
            name="University:"
            type="text"
            id="university"
            onChange={onChange}
          />
          <CreateInput
            name="Faculty:"
            type="text"
            id="faculty"
            onChange={onChange}
          />
          <CreateInput
            name="Start Date:"
            type="date"
            id="startDateForEdu"
            onChange={onChange}
          />
          <CreateInput
            name="End Date:"
            type="date"
            id="endDateForEdu"
            onChange={onChange}
          />
          <button
            className="delete-btn"
            onClick={() => {
              setVisible(false);
              onDeleteClick();
            }}
          >
            Delete
          </button>
          <Submit submit="submit" onSubmit={onSubmit} />
        </form>
      </div>
    );
  }
};

export default Index;
