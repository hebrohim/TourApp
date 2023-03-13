import React,{useState}from "react";
import Tour from "./Tour";


const ListTours = ({ Tours }) => {
    

  return (
    <div className="wrapper">
      {Tours.map((tour) => {
        
      return <Tour tour = {tour} key = {tour.id}/>
        // console.log(name)
       
      })}
    </div>
  );
};

export default ListTours;
