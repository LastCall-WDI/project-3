import React from "react";

function BarInfo(props) {
  let restaurantStatus;
  let statusStyle = {
    color: '#FF3B44',
  }

  if(props.status === false){
    restaurantStatus = 'Open Right Now';
    statusStyle.color = '#41FFC0';

  } else {
    restaurantStatus = 'This Place is Closed'
  }

  return(
      <div>
        <h2>{props.name}</h2>
        <div className="bar-info">
          <ul>
            <li style={statusStyle} >{restaurantStatus}</li>
            <li>Rating: {props.rating}</li>
            <li>Phone: {props.phone_number}</li>
            <li>Price: {props.price_range}</li>
          </ul>
        </div>
      </div>
  );
}

export default BarInfo;
