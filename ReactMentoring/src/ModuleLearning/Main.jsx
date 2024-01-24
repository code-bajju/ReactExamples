import React from 'react';
import Vaishnavi from './Button';

const MainExample = () => {
const handleClick = () =>{
  console.log("button clicked");
};

  return (
    <div>
     <Vaishnavi onClick={handleClick} label="click me"/>
    </div>
  );
};

export default MainExample;
