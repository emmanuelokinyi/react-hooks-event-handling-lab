import React from "react";


function Keypad (onChange){
    function handleChange() {
        console.log(`Entering password...`);
      }
    return (
        <div>
     <input onChange={handleChange} type="password" placeholder="Enter password" />
        </div>
    )
}

export default Keypad;