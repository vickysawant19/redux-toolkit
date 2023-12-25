

import { useSelector } from "react-redux";
import { selectAllUser } from "../users/userSlice";

import React from 'react'

const PostAuthor = ({userid}) => {
    const users = useSelector(selectAllUser)


    const author = users.find((user)=>user.id === Number(userid));
    
    
  return (
    <span className=" text-gray-500">
        Posted by: {author ? author.name : 'Unknown Author'}
        </span>
  )
}

export default PostAuthor