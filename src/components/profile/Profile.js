import React from "react";
import Cola from "../../img/elon.jpg";
import "./profile.css";
import Coca_Cola from "../../img/elon_mini.jpg";
import Posti from "./posti/Posti";
function Profile(props){
    return(
        <div className="Profile">
                 <div className="A"><img src={Cola}/></div>
                 <p>Lorem</p> 
                 <div className="Post">
                 <input placeholder="enter the post"/>   
                 <button>Add post</button>
                <div className="Post"><img src={Coca_Cola}/>
                    <span>{props.name}</span>
                    <p>Some text</p>
                </div>
                <Posti message={props.message}/>
                </div>                          
        </div>                      
    )
}
export default Profile;