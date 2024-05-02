import "./index.css";

const index = ({ submit, onSubmit }) => {
  return (
    <button className="button" onClick={onSubmit}>
      {submit}
    </button>
  );
};

export default index;
