import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Hamnav from './Hamnav';
function Nav(props) {
  const navigate = useNavigate();
  function handlePage(){
    navigate('/');
  }
  const[currentsearch,setCurrentsearch]=useState("");
  function handleSearchChange(event) {
    setCurrentsearch(event.target.value);
    let input={search:currentsearch}
  props.search(input)
  }
  

  const[hamber,setHamber]=useState(false)
 

  return (
    <>
    <nav>
   
        <div id='nav' className='logo'>
            <h1 className='hamber'  onClick={()=>{setHamber(!hamber)}}> <i className="fa-solid fa-bars"></i></h1>
            <h1  onClick={handlePage}>Movies<span>App</span></h1>
            <ul className='navlink'>
                <li onClick={() => window.location.replace("/")}>Home</li>
                <li onClick={() => window.location.replace("/#about")}>Category</li>
                <li onClick={() => window.location.replace("/#live")}>Live <i className="fa-solid fa-circle-dot live"></i></li>
            </ul>
        </div>
       
        <div className='searchandsingin'>
          <form>
          <input className="search" type='search' placeholder="i'm looking for..." onChange={handleSearchChange} value={currentsearch}></input>
            <i className="fa-solid fa-magnifying-glass icon"></i>
          </form>
            {/* <h2>sing in <i class="fa-solid fa-arrow-right-to-bracket"></i></h2> */}
        </div>
    </nav>
    {
      hamber ? <Hamnav/>:" "
    }
    
    </>
  )
}

export default Nav