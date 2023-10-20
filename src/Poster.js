import React from 'react'
import { NavLink } from 'react-router-dom'

function Poster() {
  return (
    
       <NavLink to={'/Allmovielist'}>
         <div className='poster'>
            <img src='poster.jpeg'/>
            <div className='poster-details'>
            <div className='poster-features'>
                <ul>
                    <li><i className="fa-solid fa-film"></i>Action/Thriller</li>
                    <li><i className="fa-solid fa-calendar"></i>2019</li>
                    <li><i className="fa-solid fa-clock"></i>2h 33m</li>
                    <li>4k</li>
                </ul>
            </div>
            <div className='poster-title'>
                <h1>John Wick: Chapter 3 - platinum</h1>
            </div>
            </div>
        </div>
       </NavLink>
    
  )
}

export default Poster