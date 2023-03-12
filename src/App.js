
import { useState, useEffect } from "react";
import axios from "axios";
import ListTours from "./Components/ListTours";
const baseURL = " https://course-api.com/react-tours-project";
function App() {
  const [Tours, setTours] = useState([]);


  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    axios.get(baseURL).then((response) => {
      setLoading(false)
      setTours(response.data);
    });
  }, []);

  return (
    <div className="App">
        <h2 id="ourTourText">Our Tours</h2>
    <div id = "underline"></div>
    {
     Loading?<h1>Loading ...</h1>:<ListTours Tours={Tours} />
    }
    </div>
  );
}

export default App;
