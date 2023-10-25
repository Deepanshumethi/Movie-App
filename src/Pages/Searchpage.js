import React from 'react'
import { useState,useEffect } from 'react';
import MovieCard from '../MovieCard';
import Nav from '../Nav';
function Searchpage(props) {

        const [search,setSearch]=useState("");
        useEffect(()=>{
            setSearch(props.search);
        },[props.search])
// console.log(typeof)
    const [data, setData] = useState({ results: [] }); // Initialize data with an empty array
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=e2c06fdf2dd6bd6bd9c7d10ebb064ed5&query=${search}&page=1`)
            .then((result) => result.json())
            .then((resp) => {
                setData(resp);
            });
    }, [search]);
  return (
    <>
        {/* <Nav/> */}
        <div className='moviecards'>
    {data.results.map((value) => (
        <MovieCard moviedata={value}/>
    ))}
</div>
    </>
  )
}

export default Searchpage