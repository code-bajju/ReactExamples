import React from "react";

const ChildParent = (props) => {
    return ( <>
    <div>
        <ul><li>{props.message}</li></ul>
        <p>{props.message}</p>
    </div>
    </> );
}
 
export default ChildParent;