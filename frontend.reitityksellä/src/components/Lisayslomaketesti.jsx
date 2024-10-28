import { useState } from "react";
import ReactDOM from "react-dom/client";
import Lisayslomaketesti from "./Lisayslomaketesti";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const othername = event.target.othername;
    setInputs((values) => ({ ...values, [name]: othername }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Lisää suomenkielinen sana:
        <p>Hakulomake</p>
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Lisää sanan englanninkielinen vastine:
        <input
          type="text"
          name="othername"
          value={inputs.othername || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);

export default Lisayslomaketesti;

