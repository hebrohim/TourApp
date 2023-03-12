
import { useState, useEffect } from "react";
import axios from "axios";
import ListTours from "./Components/ListTours";

const baseURL = " https://course-api.com/react-tours-project";
function App() {
  const [Tours, setTours] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTours(response.data);
    });
  }, []);

  return (
    <div className="App">
        <h2 id="ourTourText">Our Tours</h2>
    <div id = "underline"></div>
      <ListTours Tours={Tours} />
    </div>
  );
}

export default App;
