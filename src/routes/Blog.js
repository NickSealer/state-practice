import React from 'react';
import image from '../logo.svg';
import { NavLink } from 'react-router-dom';

export const Blog = (props) => {
  console.log(props);

  return (
    <div className='py-3'>
      <NavLink to="/blogs" className='btn btn-light'>Back</NavLink>
      <div className="card" style={{width: '18rem', marginTop: 50}}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  )
}
