
import { useState, useEffect } from "react";
import axios from "axios";
import ListTours from "./Components/ListTours";

const baseURL = " https://course-api.com/react-tours-project";

const App = () => {
  const [Tours, setTours] = useState([]);
  //function that deletes Tour
const deleteTours = (id) =>{
  let newTours = Tours.filter((tour)=>tour.id !== id);
  setTours(newTours)
 
}

//set loading
  const [Loading, setLoading] = useState(true)
  //function that fetches data from database
  const fetchData = () => {
    setLoading(true)
    axios.get(baseURL).then((response) => {
      setTours(response.data);
      setLoading(false)
    });
  }

  useEffect(fetchData, []);
  //Reload new Tours 
  const reloadTours = () =>{
    fetchData()
  }
  return (
    <div className="App">
        <h2 id="ourTourText">Our Tours</h2>
    <div id = "underline"></div>
    {
     Loading?<h1>Loading ...</h1>:<ListTours Tours={Tours} deleteTours = {deleteTours} reloadTours = {reloadTours} />
    }
    </div>
  );
}

export default App;
