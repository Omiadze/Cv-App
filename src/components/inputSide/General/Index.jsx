import CreateInput from "../CreateInput";
import Submit from "../Submit";

function Index({ generalState, setGeneralState }) {
  const onChange = (e) => {
    const propertyName = e.target.id;
    generalState[propertyName] = e.target.value;
    setGeneralState({ ...generalState });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(generalState);
    setGeneralState({ ...generalState });
  };

  return (
    <div>
      <h1>General</h1>
      <form>
        <CreateInput
          name="First Name"
          type="text"
          id="firstName"
          placeholder=""
          onChange={onChange}
        />

        <CreateInput
          name="Surname"
          type="text"
          id="username"
          placeholder=""
          onChange={onChange}
        />

        <CreateInput
          name="Email"
          type="email"
          id="email"
          placeholder="email@.com"
          onChange={onChange}
        />

        <CreateInput
          name="Phone Number"
          type="tel"
          id="number"
          placeholder="(+995)551717791"
          onChange={onChange}
        />
        <Submit submit="submit" onSubmit={onSubmit} />
      </form>
    </div>
  );
}

export default Index;
