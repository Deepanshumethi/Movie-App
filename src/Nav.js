import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Hamnav from './Hamnav';
function Nav(props) {
  const navigate = useNavigate();
  function handlePage(){
    navigate('/');
  }
  const[currentsearch,setCurrentsearch]=useState("");
  function handleSearchChange() {
    // setCurrentsearch(event.target.value);
   setCurrentsearch( document.getElementsByClassName("search")[0].value);
    let input={search:currentsearch}
  props.search(input)
  }
  
  // if(props.searchvisible=="true"){
  //   document.getElementById("form").style.visibility = "hidden";
  // }

  const[hamber,setHamber]=useState(false)
 

  return (
    <>
    <nav>
   
        <div id='nav' className='logo'>
            <h1 className='hamber'  onClick={()=>{setHamber(!hamber)}}> <i className="fa-solid fa-bars"></i></h1>
            <h1  onClick={handlePage}>Movies<span>App</span></h1>
            <ul className='navlink'>
               <NavLink to={"/"}   style={{ textDecoration: 'none' }}>
               <li >Home</li>
               </NavLink>

              
                {/* <li onClick={() => window.location.replace("/#about")}>Category</li>
                <li onClick={() => window.location.replace("/#live")}>Live <i className="fa-solid fa-circle-dot live"></i></li> */}
            </ul>
        </div>
       
        <div className='searchandsingin'>
         
          <form id='form' onSubmit={handleSearchChange} >
          <input className="search" type='search' placeholder="i'm looking for..." value={currentsearch}></input>
            <i className="fa-solid fa-magnifying-glass icon"></i>
          </form>
         
            
        </div>
    </nav>
    {
      hamber ? <Hamnav/>:" "
    }
    
    </>
  )
}

export default Nav