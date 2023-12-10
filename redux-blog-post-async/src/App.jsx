import PostList from './features/post/PostList'
import AddPost from './features/post/AddPost'
import { useDispatch } from 'react-redux'
import { fetchUsers } from './features/users/userSlice'
import { useEffect } from 'react'


function App() {
    // const dispatch = useDispatch()
    // useEffect(()=>{
    //   dispatch(fetchUsers())

    // },[])
  
  return (
    <>
      <div className='max-w-screen-lg  mx-auto bg-blue-100 min-h-screen'>
        <header>
          <h1 className='uppercase bg-blue-500 text-center p-2 text-2xl'> redux Blog Post manange </h1>
        </header>
        <section className='flex flex-col justify-center items-center m-4 w-auto max-w-screen-sm mx-auto'>
      <h1 className='text-2xl font-semibold'>Add New post</h1>
        <AddPost/>
      </section>
      
      <section className='flex flex-col justify-center items-center max-w-screen-sm mx-auto'>
        <h1 className='text-2xl font-semibold'>Posts</h1>
        <PostList/>
       
      </section>
     
      </div>
    </>
  )
}

export default App
