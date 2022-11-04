import React from "react";
import Post from "./post/Post";
function Posti (){
    return(
<div className="Posti">
<input placeholder="enter the post"/>
<button>Add post</button>
<Post message="it's really funny"/>
<Post message="omg"/>
<Post message="this is so bad"/>
<Post message="🙄"/>
<Post message="😮"/>
</div>
    )
}
export default Posti;