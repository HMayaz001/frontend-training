import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("grapefruit");
  const [value1, setValue1] = useState("grapefruit");

  const handleChange = (event, type) => {
    if (type === "value") setValue(event.target.value);
    else setValue1(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("Your favorite flavor is: " + value);
    event.preventDefault();
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={value} onChange={(e) => handleChange(e, "value")}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>

        <label>
          Pick your favorite flavor 1:
          <select value={value1} onChange={(e) => handleChange(e, "value1")}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
