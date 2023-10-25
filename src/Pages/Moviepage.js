import React from 'react'
import Moviedetailpage from '../movie-detail/Moviedetailpage'
import Nav from '../Nav'
import Searchpage from './Searchpage';
import { useState } from 'react';
function Moviepage() {

  const [inputSearch, setSinputearch] = useState(" ");
  function value(input) {
    console.log(input.search)
    setSinputearch(input.search)
  }

  return (
    <div>
        {
        inputSearch==" "? <div><Nav  search={value} searchvisible={"true"}/>
        <Moviedetailpage/></div>:<div><Nav search={value} searchvisible={"true"}/>
        <Searchpage search={inputSearch}/></div>
       }
    </div>
  )
}

export default Moviepage