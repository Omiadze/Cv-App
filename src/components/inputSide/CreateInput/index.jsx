import "./index.css";
const index = ({ name, type, placeholder = "", onChange, id, value }) => {
  return (
    <div>
      <label className="labels">
        {name}
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          required
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default index;
