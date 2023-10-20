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
        inputSearch==" "? <div><Nav  search={value} />
        <Moviedetailpage/></div>: <div><Nav search={value} />
        <Searchpage search={inputSearch}/></div>
       }
    </div>
  )
}

export default Moviepage