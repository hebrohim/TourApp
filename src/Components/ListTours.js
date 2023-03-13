import React,{useState}from "react";
import Tour from "./Tour";


const ListTours = ({ Tours,deleteTours,reloadTours }) => {
  
   if (Tours.length == 0) {
    return <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
 <h1 style={{textAlign:"center"}}>No tours available</h1>
 <button id="refreshBtn" onClick={reloadTours}>Refresh</button>
        </div>
    
   }
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
