import React from 'react'
import Allmovie from '../Allmoviepage/Allmovie'
import Nav from '../Nav'
import { useState } from 'react';
import Searchpage from './Searchpage';
function Allmoviepage() {
  const [inputSearch, setSinputearch] = useState(" ");
  function value(input) {
    console.log(input.search)
    setSinputearch(input.search)
  }
  return (
    <div>
       {
        inputSearch==" "? <div><Nav  search={value} />
        <Allmovie/></div>: <div><Nav search={value} />
        <Searchpage search={inputSearch}/></div>
       }
    </div>
  )
}

export default Allmoviepage