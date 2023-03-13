import React ,{useState} from 'react'

const Tour = ({tour}) => {
    let { id, name, info, image, price } = tour;
    const [readMore, setreadMore] = useState(true)

  return (
    
       <div key={id} className="card">
   
            <img src={image} alt="name" id="tourImage" />
            <span id="price">${price}</span>
            <div className="container">
              <h4 id="tourName">
                <b>{name}</b>
              </h4>
              <span id="info">{readMore?info:`${info.substring(0,270)}`}</span>
              <p onClick={()=>{setreadMore(!readMore)}} style={{color:"#10b981"}}>{readMore? "Read less ...": "Read more ..."}</p> 
            </div>
          </div>
  )
}

export default Tour