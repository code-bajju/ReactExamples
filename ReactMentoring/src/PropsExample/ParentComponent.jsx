import React from "react";
import ChildParent from "./ChildParent";

const ParentComponent = () => {
    const ritika = "Hello I am parent COMPONENT";
    return ( <>
    <div>
        <ChildParent message={ritika}/>
    </div>
    </> );
}
 
export default ParentComponent;