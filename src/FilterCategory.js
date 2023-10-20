import React from 'react'

function FilterCategory() {
  return (
    <div className='filterbox'>
      <div className='categories'>
        <div className='category1'>
          <select id="Movie-type" name="Movie-type" form="Movie-type">
            <option value="all">All Category</option>
            <option value="action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Horror">Horror</option>
            <option value="Horror">Horror</option>
          </select>
        </div>
        <div className='category2'>
          <select id="Years" name="Years" form="Years">
            <option value="all-year">All The Years</option>
            <option value="action">present-2020</option>
            <option value="Adventure">2000-2020</option>
            <option value="Horror">1980-2000</option>
            <option value="Horror">1950-2000</option>
          </select>
        </div>
      </div>

      <div className='filter-buttons'>
        <div className='back'></div>
        <button autoFocus>Featured</button>
        <button>Popular</button>
        <button>Newest</button>
      </div>
    </div>
  )
}

export default FilterCategory