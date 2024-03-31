import React from 'react'
import { NavLink } from 'react-router-dom'

export const Blogs = () => {
  const blogs = [
    {"id": 1, "title": "Blog One", "desc": "Lorem ipsum dolor", "viewed": true},
    {"id": 2, "title": "Blog Two", "desc": "Lorem ipsum dolor", "viewed": false},
    {"id": 3, "title": "Blog Three", "desc": "Lorem ipsum dolor", "viewed": false},
  ]

  return (
    <div className='py-3'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Viewed</th>
          </tr>
        </thead>
        <tbody>
          {
            blogs.map((blog, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{blog.id}</th>
                  <td><NavLink to={'/blogs/' + blog.id }>{blog.title}</NavLink></td>
                  <td>{blog.desc}</td>
                  <td>{blog.viewed ? 'YES' : 'NO'}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>

  )
}
