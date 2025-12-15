import { useState } from "react";
import User from "./User";
function App() {
    
    return(
        <div>
            <h1>Get Input field Values</h1>
            <input type="text" onChange={(e) => console.log(e.target.value)} placeholder="Enter your Name" />

            
        
        </div>
    )

}
export default App;