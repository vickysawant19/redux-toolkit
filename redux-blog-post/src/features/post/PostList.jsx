import { useSelector,useDispatch } from "react-redux";
import {selectAllPosts} from './postSlice'

import React from 'react'
import { nanoid } from "@reduxjs/toolkit";
import { selectAllUser } from "../users/userSlice";
import PostAuthor from "./PostAuthor";

import PostTime from "./PostTime";
import ReactionBtn from "./ReactionBtn";


const PostList = () => {

  const posts = useSelector(selectAllPosts)
   
  const  sortedPosts = posts.slice().sort((a,b) => b.postTime.localeCompare(a.postTime))
  

    

    const renderPost = sortedPosts.map(post=>(
        
        <article
        className="bg-blue-200 hover:bg-blue-300 mb-2 p-2 transition duration-500 shadow" key={post.id ? post.id : nanoid()}>
         
            <h3 className="font-semibold ">{post.title}</h3>
            <p className="">{post.content?.substring(0,50)}</p>
           <div className="flex justify-between">
                <div className="text-sm italic">
              <PostAuthor userid = {post.userId}/>
                </div>
                <div className="text-sm italic text-stone-600">
              <PostTime timestamp={post.postTime} />
              </div>
           </div>
           <div>
            <ReactionBtn post={post} />
           </div>
       </article>
))
  return (
    <>
       
       <div className="w-full">
       {renderPost}
       </div>
    
    </>
  )
}

export default PostList