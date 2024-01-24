import React from "react";

const Vaishnavi = ({ onClick, label }) => {
  return (
    <>
     
      <button onClick={onClick}>{label}</button>
    </>
  );
};

export default Vaishnavi;
