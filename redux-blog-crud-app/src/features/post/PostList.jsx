import { useSelector,useDispatch } from "react-redux";
import {selectAllPosts,getPostsStatus,getPostsError,fetchPosts} from './postSlice'
import { useEffect } from "react";

import PostExcert from "./PostExcert";

import React from 'react'




const PostList = () => {
  const dispatch = useDispatch()

  const posts = useSelector(selectAllPosts)
  const postsStatus = useSelector(getPostsStatus)
  const postsError = useSelector(getPostsError)

   

  useEffect(()=>{
    if(postsStatus === 'idle'){
      dispatch(fetchPosts())
      
    }
    
  },[postsStatus,dispatch])


  
   let content;
    if(postsStatus === 'loading'){
      content = <p>Loading...</p>
    }else if (postsStatus === 'succeeded'){
      const orderedPost = posts.slice().sort((a,b) => b.postTime.localeCompare(a.postTime))
     
      content = orderedPost.map(post => <PostExcert key={post.id} post={post}/> ) 
    }else if (postsStatus === 'failed'){
      content = <p>{error}</p>
    }
   

  return (
    <>
       <div className="w-full">
        {content}
       </div>
    </>
  )
}

export default PostList