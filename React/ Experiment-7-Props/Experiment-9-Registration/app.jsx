import { useState } from "react";

function App(){

    const[name,setName]=useState("");

    return(

        <div>

            <h2>Registration Form</h2>

            <input
                placeholder="Enter Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />

            <h3>{name}</h3>

        </div>

    );

}

export default App;