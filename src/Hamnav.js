import React from 'react'

function Hamnav() {
  return (
    <div>
    <ul className='navlinkhamber'>
            <li onClick={() => window.location.replace("/")}>Home</li>
            <li onClick={() => window.location.replace("/#about")}>Category</li>
            <li onClick={() => window.location.replace("/#live")}>Live <i class="fa-solid fa-circle-dot live"></i></li>
        </ul>
    </div>
  )
}

export default Hamnav