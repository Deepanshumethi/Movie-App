import React from 'react'
import './Moviedetailpage.css'
import MovieCard from '../MovieCard';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTop from '../ScrolltoTop';
const Moviedetailpage = () => {
  const location = useLocation()
  const moviedata = location.state;
  // console.log(moviedata);


  const [data, setData] = useState({ results: [] }); // Initialize data with an empty array
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=e2c06fdf2dd6bd6bd9c7d10ebb064ed5&page=1")
            .then((result) => result.json())
            .then((resp) => {
                setData(resp);
            });
    }, []);
// console.log(data)

    useEffect(()=>{
      window.scrollTo(0, 0)

    },[moviedata])
// const [id,setId]=useState(moviedata.id);
const id = (moviedata.id)%10;
// console.log(id)

  return (
    <div className='moviedeatilpage'>
    
    
      <div className='moviedetail'>
        <h2>{moviedata.title}</h2>
        <div className='movieotherdetail'>
          <span><i className="fa-solid fa-star"></i> {moviedata.vote_average}</span>
          <div className='blank'></div>
          <span><i className="fa-solid fa-calendar"></i> {moviedata.release_date}</span>
          <div className='blank'></div>
          <span><i className="fa-solid fa-eye"></i> {moviedata.popularity}</span>
        </div>
      </div>

      <div className='movieposter'>
        <img src={`https://image.tmdb.org/t/p/w500/${moviedata.poster_path}`} alt={moviedata.title}></img>
      </div>

      <div className='moviedescription'>
        <p>{moviedata.overview}</p>
      </div>
<div>
<h2 className='others'>Others</h2>
</div>
<div className='movies-card-5'>

{data.results.slice(id+1, id + 6).map((value) => (
          <MovieCard key={value.id} moviedata={value} />
        ))}
</div>


    </div>
  )
}

export default Moviedetailpage