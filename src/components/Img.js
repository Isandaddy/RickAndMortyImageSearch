import React from "react";

const Img = props => {
  return (
    <li>
      <img src={props.url} alt="RickAndMorty" />
      <p>{props.name}</p>
    </li>
  );
};

export default Img;
