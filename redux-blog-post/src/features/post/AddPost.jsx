
import { useDispatch ,useSelector} from 'react-redux'

import React, { useState ,useEffect } from 'react'

import { selectAllUser } from '../users/userSlice'
import { postAdded } from './postSlice'

const AddPost = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [userId, setUserId] = useState('')
    const [canSave, setCanSave] = useState(false);

    
    useEffect(() => {
      setCanSave(Boolean(title) && Boolean(content) && Boolean(userId));
    }, [title, content, userId]);
  

   const dispatch = useDispatch()

   const users = useSelector(selectAllUser)

   

   const onAuthorChange = (e) => {
 
    setUserId(e.target.value)
   }
  




     const onSavePostClick = (e) => {
        e.preventDefault()
        if(title && content){
            dispatch(
                postAdded(title,content,userId)  )
            setTitle("")
            setContent("")
        }
     }

     const useroptions =[<option key="default" value="">Select a User</option>,
     ...users.map((user)=>
     ( <option 
        className='text-xl rounded bg-blue-200' 
        key={user.id} value={user.id}>{user.name}</option>))] 

    



  return (
    <>
    <div className='bg-blue-300 p-2 w-full mx-2'>
        <form 
        className='flex flex-col'>
            <label 
            className='font-semibold my-2'
            htmlFor="title">Title </label>
            <input 
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            name='title'
            id='title'
            className=" outline-none p-2"
            type="text" />
            <label 
            className='font-semibold my-2'
            htmlFor="title">Posted By </label>

            <div className='my-2 w-full'>
            <select 
            value={userId}
            onChange={onAuthorChange}
                className='w-full p-2'
               >
                    {useroptions}
       
           </select>
            </div>
            <label 
            className='font-semibold my-2'
            htmlFor="content">Content</label>
            <textarea 
            onChange={(e)=>setContent(e.target.value)}
            value={content}
            id='content'
            name='content'
            className=" outline-none p-2"
            type="text" />

            <button 
            type='button'
            disabled={!canSave}
            onClick={onSavePostClick}
            className='disabled:bg-blue-50 disabled:hover:cursor-not-allowed text-xl font-semibold border mt-4 w-32 p-2 bg-blue-800 hover:bg-blue-950 hover:text-white transition duration-300'>Submit</button>


        </form>
    </div>
    
    </>
  )
}

export default AddPost