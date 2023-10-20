import React from 'react'
import CategoryCard from './CategoryCard'
import './Category.css'
import { NavLink } from 'react-router-dom';
function Category() {

  
    const categories = [
      {
        id: 1,
        image: "category1.jpg",
        name: "action",
        total: 100,
      },
      {
        id: 2,
        image: "category2.jpg",
        name: "comedy",
        total: 50,
      },
      {
        id: 3,
        image: "category1.jpg",
        name: "thriller",
        total: 80,
      },
      {
        id: 4,
        image: "category2.jpg",
        name: "adventure",
        total: 100,
      },
      {
        id: 5,
        image: "category1.jpg",
        name: "animated",
        total: 50,
      },
      {
        id: 6,
        image: "category2.jpg",
        name: "crime",
        total: 20,
      },
      {
        id: 7,
        image:"category1.jpg",
        name: "sci-fi",
        total: 80,
      },
      {
        id: 8,
        image:"category2.jpg",
        name: "horror",
        total: 80,
      },
    ];
  

  
  
  

  return (
    <div id='about' style={{marginTop:"50px"}}>
        <h1 style={{color:"white"}}>Category</h1>
        <div className='categoriesbox'>
        {
          categories.map((category) => (
         <NavLink to={'/Allmovielist'} style={{ textDecoration: 'none' }}>
         <CategoryCard value={category} key={category.id} />
         </NavLink>
        ))
        }
        </div>
    </div>
  )
}

export default Category