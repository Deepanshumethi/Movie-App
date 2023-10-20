import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { Link, useNavigate } from 'react-router-dom';

function MovieCards() {
    const [data, setData] = useState({ results: [] }); // Initialize data with an empty array
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=e2c06fdf2dd6bd6bd9c7d10ebb064ed5&page=1")
            .then((result) => result.json())
            .then((resp) => {
                setData(resp);
            });
    }, []);

// console.log(data);
    return (
        <>
            <div className='moviecards'>
                {data.results.map((value) => (
                    <MovieCard moviedata={value}/>
                ))}
            </div>
            <Link to={"/Allmovielist"} style={{ textDecoration: 'none' }}>
            <div className='seemorebtn'>
                <button>See More</button>
            </div>
            </Link>
        </>
    );
}

export default MovieCards;
