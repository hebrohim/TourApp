import React from "react";
const ListTours = ({ Tours }) => {
  return (
    <div className="wrapper">
      {Tours.map((tour) => {
        let { id, name, info, image, price } = tour;
        // console.log(name)
        return (
                    
          <div key={id} className="card">
   
            <img src={image} alt="name" id="tourImage" />
            <span id="price">${price}</span>
            <div className="container">
              <h4 id="tourName">
                <b>{name}</b>
              </h4>
              <p id="info">{info}</p> 
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListTours;
