import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from '../MovieCard';
import './Allmovie.css'

function Allmovie() {
    const [page, setPage] = useState(1)
    const [data, setData] = useState({ results: [] }); 
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e2c06fdf2dd6bd6bd9c7d10ebb064ed5&page=${page}`)
            .then((result) => result.json())
            .then((resp) => {
                setData(resp);
            });
        window.scrollTo(0, 0);
    }, [page]);
   

    return (
        <>
            <div className='allmovies'>
                {data.results.map((value) => (
                   <MovieCard moviedata={value} key={value.id} />
                ))}
            </div>

            <div className='pagebuttons'>
                <button onClick={() => { setPage(1) }}>1</button>
                <button onClick={() => { setPage(2) }}>2</button>
                <button onClick={() => { setPage(3) }}>3</button>
                <button onClick={() => { setPage(4) }}>4</button>
                <button onClick={() => { setPage(5) }}>5</button>
            </div>
        </>
    )
}

export default Allmovie