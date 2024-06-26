import CreateInput from "../CreateInput";
import Submit from "../Submit";
import { useState } from "react";
import "./index.css";

const Index = ({
  experienceState,
  setExperienceState,
  dateState,
  setDateState,
}) => {
  const [visible, setVisible] = useState(false);
  const onChange = (e) => {
    const propertyName = e.target.id;

    experienceState[propertyName] = e.target.value;
    dateState[propertyName] = e.target.value;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setExperienceState({ ...experienceState });
    setDateState({ ...dateState });
  };
  const onDeleteClick = () => {
    setExperienceState({
      company: "",
      role: "",
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
          className="exp-btn"
          onClick={() => {
            setVisible(true);
          }}
        >
          Experience
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <form action="">
          <button
            className="exp-btn"
            onClick={() => {
              setVisible(false);
            }}
          >
            Experience
          </button>
          <CreateInput
            name="Company:"
            type="text"
            id="company"
            onChange={onChange}
          />
          <CreateInput name="Role:" type="text" id="role" onChange={onChange} />
          <CreateInput
            name="Start Date:"
            type="date"
            id="startDateForExp"
            onChange={onChange}
          />
          <CreateInput
            name="End Date:"
            type="date"
            id="endDateForExp"
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
