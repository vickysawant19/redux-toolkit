import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import { fetchUsers } from './features/users/userSlice.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import PostPage from './components/PostPage.jsx'
import AddPost from './features/post/AddPost.jsx'
import PostList from './features/post/PostList.jsx'



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='/addpost' element={<AddPost/>}/>
    <Route path='/showpost' element={<PostList/>}/>
    <Route path='/showpost/:id' element={<PostPage/>}/>
  </Route>
  
))

store.dispatch(fetchUsers())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store= {store}>
       <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
