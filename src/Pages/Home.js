import React from 'react'
import Poster from '../Poster.js'
import FilterCategory from '../FilterCategory.js'
import MovieCards from '../MovieCards.js'
import Category from '../category/Category.js'
import Liveshows from '../Live/Liveshows.js'
function Home() {
  return (
    <div>
         <Poster/>
        <FilterCategory/>
        <MovieCards/>
        <Category/>
        <Liveshows/>
    </div>
  )
}

export default Home