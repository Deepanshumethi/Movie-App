import React, { useEffect, useState } from 'react'
import Nav from '../Nav.js'
import Home from './Home.js'
import Searchpage from './Searchpage.js';
function Main() {
  const [inputSearch, setSinputearch] = useState("");
  function value(input) {
    console.log(input.search)
    setSinputearch(input.search)
  }
  // console.log(inputSearch);
  return (
    <div id='main'>
      <Nav search={value} />
      {
        inputSearch == "" ? <Home /> : <Searchpage search={inputSearch} />
      }
    </div>
  )
}
export default Main