import React from "react";

const KeyRendering = () => {
  const students = [
    {id : 1 , name:'Ritika'},
    {id : 2 , name:'Vaishnavi'},
    {id : 3 , name:'Urvashi'},
  ]
return ( 
    <ul>
        {students.map((item)=>(
            <li key={item.id}>{item.name}</li>)
        )}
    </ul>

);
}
export default KeyRendering;
