import React,{useState}from "react";
import Tour from "./Tour";


const ListTours = ({ Tours,deleteTours }) => {
    

  return (
    <div className="wrapper">
      {Tours.map((tour) => {
        
      return <Tour tour = {tour} key = {tour.id} deleteTours = {deleteTours}/>
        // console.log(name)
       
      })}
    </div>
  );
};

export default ListTours;
