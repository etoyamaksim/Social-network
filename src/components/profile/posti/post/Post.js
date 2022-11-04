import React from "react";
import ava_min from "../../../../img/elon_mini.jpg";
function Post (props){
    return(
<div className="Post">
    <img src={ava_min}/>
    <p>{props.message}</p>
<input placeholder="enter the post"/>
<button>Add post</button>
</div>
    )
}
export default Post;