
import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
  const [id] = useState(null);
  const [name, setName] = useState("");
  const [othername] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Sanasi englanninkielinen vastine on: ${(othername)}`);
    console.log(othername);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Hakulomake</p>
      <label>
        Hae suomenkielisellä sanalla:
        <input
          type="text"
          value={name}
          id={"id"}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);

export default MyForm;
