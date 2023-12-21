import React, { useState,useContext } from "react";

import { loginContext } from "./loginContext";

function Login(){
    
    const {setProductname,setProductprize,setQuality,setDescription,setProfile}=useContext(loginContext);
    

    return(
        <div className="col">
            <div className="card">
                
                <h2>Product Details</h2>

                <input type="text" placeholder="Enter Prodct Name"
                onChange={(event)=>{
                    setProductname(event.target.value)
                }
                }/>

                <input type="text" placeholder="Enter Product Price" 
                onChange={(event)=>{
                    setProductprize(event.target.value)
                }} />

                <input type="text" placeholder="Quality" 
                onChange={(event)=>{
                    setQuality(event.target.value)
                }} />

                <input type="text" placeholder="Description" 
                onChange={(event)=>{
                    setDescription(event.target.value)
                }} />

                    <button onClick={()=>{
                        setProfile(true)
                    }}>Submit</button>
            </div>


        </div>
    )
}

export default Login;