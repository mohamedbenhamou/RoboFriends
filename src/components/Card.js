import React from "react";

const Card = (props) => {
  return (
    <div className="tc bg-light-green pa3 ma3 grow br3 dib bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${props.email}?200x200`} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};
export default Card;
