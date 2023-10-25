import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ScrollToTop from './ScrolltoTop';
function MovieCard(props) {
    // key={value.id} title={value.original_title} image={value.poster_path}
    const navigate = useNavigate();
  function handlePage(){
    navigate('/MovieDetails' ,{state:props.moviedata});
    console.log("Card click kia")
    console.log(props.moviedata)
  }
 
    return (
        <>
            <div className='moviesmlcard' onClick={handlePage}>
            
               <div className='movie-img'>
               <img src={`https://image.tmdb.org/t/p/w500/${props.moviedata.poster_path}`} alt={props.moviedata.title}/>
               </div>
                <h2>{props.moviedata.title}</h2>
                <div className='moviesmlcrd-otr'>
                    <h3>Action</h3>
                    <h3>{props.moviedata.release_date}</h3>
                </div>
                <div className='onmoviecmlcardhover'>
                    <div className='onhoveritem'>
                    {/* <i className="fa-solid fa-bookmark"></i> */}
                    
                        <i className="fa-solid fa-star"><span> {props.moviedata.vote_average}</span></i>
                    </div>

                </div>
             
                    <div className='play'>
                        <i className="fa-solid fa-play"></i>
                    </div>
                
            </div>

        </>
    )
}

export default MovieCard