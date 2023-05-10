import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      <p className='tile-title'>Name: {props.name}</p>
      {
        Object.keys(props.description).map((key, index) => {
          return <p key={index} className='tile'>{key}: {props.description[key]}</p>
        })
      }
    </div>
  );
};
