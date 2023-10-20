import React from 'react';
import './Category.css'
function CategoryCard(props) {
  return (
    <section className='categorycard'>
      <img src={props.value.image} alt={props.value.name} />
      <div className='category-detail'>
        <h2>{props.value.name}</h2>
        <h2 className='num'>{props.value.total}</h2>
       
      </div>
    </section>
  );
}

export default CategoryCard;






