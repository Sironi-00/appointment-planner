import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = (props) => {
  return (
    <div>
      {props.array.map((item, index) => {
        const {name, ...rest} = item;
        return <Tile key={index} name={name} description={rest} />; 
      })}
    </div>
  );
};
