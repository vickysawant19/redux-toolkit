import { useDispatch } from "react-redux";

import { reactionAdded } from "./postSlice";

const reactionEmoji =  {
    thumbsup: "👍",
    wow:'😲',
    heart:'😍'
}

import React from 'react'

const ReactionBtn = ({ post }) => {
    const dispatch =useDispatch()
  return (
    <div>
        {Object.keys(reactionEmoji).map((reaction)=>(
             <button 
             className=" bg-gray-100 shadow transform hover:scale-125 duration-300 px-2 rounded-full m-2"
             key={reaction}
            onClick={() => dispatch(reactionAdded({ postId:post.id , reaction:reaction }))}
           >
             {reactionEmoji[reaction]} {post.reactions[reaction]}
           </button>

        ))}
       
    </div>
  )
}

export default ReactionBtn