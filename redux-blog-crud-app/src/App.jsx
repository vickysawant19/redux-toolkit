import PostList from './features/post/PostList'
import AddPost from './features/post/AddPost'
import { useDispatch } from 'react-redux'
import { fetchUsers } from './features/users/userSlice'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'


function App() {
    // const dispatch = useDispatch()
    // useEffect(()=>{
    //   dispatch(fetchUsers())

    // },[])
  
  return (
    <>
      <div className='max-w-screen-lg  mx-auto bg-blue-100 min-h-screen'>
        <Header/>

        <Outlet/>
     
        <Footer/>
      </div>
    </>
  )
}

export default App
