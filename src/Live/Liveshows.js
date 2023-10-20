import React from 'react'
import Liveshowcard from './Liveshowcard'
import './Liveshow.css'
import { NavLink } from 'react-router-dom';
function Liveshows() {

  const liveshow = [
    {
      id: 1,
      image: "planet.jpg",
      title:"Planet Earth||Season 1-Island ",
      viewers: "170K",
      channel:"HBO-Logo-square.jpg"
    },
    {
      id: 2,
      image: "planet.jpg",
      title:"Planet Earth||Season 1-Island ",
      viewers: "170K",
      channel:"HBO-Logo-square.jpg"
    },
    {
      id: 3,
      image: "planet.jpg",
      title:"Planet Earth||Season 1-Island ",
      viewers: "170K",
      channel:"HBO-Logo-square.jpg"
    }
  ];
  return (
   <div id='live'>
   <h1 className='liveshowtext'>Live Shows</h1>
     <section className='liveshowlist'>
    {
     liveshow.map((m)=>(
       <NavLink to={'/Allmovielist'} style={{ textDecoration: 'none' }}>
       <Liveshowcard value={m} key={m.id}/>
       </NavLink>
     ))
    }
 </section>
   </div>
  )
}

export default Liveshows