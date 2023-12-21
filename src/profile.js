import React, { useContext } from "react";
import { loginContext } from "./loginContext";

function Profile(){

    const {productname,productprize,quality,description}=useContext(loginContext)

    return(
        <div>
            <div className="col-dtl">
                <div className="card-dtl">
                    <div className="pro-img">
                        <img src="./img/hamam.jpg"/>
                    </div>
                    <div className="product-detail">
                        <p>Product Name:  {productname}</p>
                        <p>Product Prize:  {productprize}</p>
                        <p>Quality:  {quality}</p>
                        <p>Description:  {description}</p>
                    </div>
                </div>
            </div>
            

        </div>
    )
}
export default Profile;