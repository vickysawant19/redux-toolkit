import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectAllPosts } from '../features/post/postSlice'

import PostList from '../features/post/PostList'

import PostAuthor from '../features/post/PostAuthor'
import PostTime from '../features/post/PostTime'
import ReactionBtn from '../features/post/ReactionBtn'

const PostPage = () => {

    const {id} = useParams()
    const posts = useSelector(selectAllPosts)

    const postToShow = posts.find((post)=> (post.id == id))

  


  return (

    <div>
        <div className='hidden'> <PostList/></div>
        <article
        className="bg-blue-200 border-4 hover:bg-blue-300 p-2 transition duration-500 shadow" >
            <h1 className="text-center w-full">
            
        </h1>
        <h3 className="font-semibold text-center uppercase ">{postToShow.title}
        </h3>
        
       
            <p className="text-center">{postToShow.body.substring(0,50)}</p>
           <div className="flex justify-between items-center">
                
                <div className="text-sm italic text-stone-600">
              <PostTime timestamp = {postToShow.postTime} />
              </div>
           
           <div className="text-sm italic">
              <PostAuthor userid = {postToShow.userId}/>
           </div>
           </div>
          
           <div className='flex justify-center'>
             <ReactionBtn post={postToShow} />
           </div>
       </article>
    </div>
  )
}

export default PostPage