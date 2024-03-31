import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from '../components/Main'
import { Blogs } from './Blogs'
import { Blog } from './Blog'
import { Layout } from './Layout'
import { Contact } from './Contact'
import { Page404 } from './Page404'

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='blogs/:id' element={<Blog/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='*' element={<Page404 />} />
        </Route>    
      </Routes>
    </BrowserRouter>
  )
}
