import React, {useEffect, useState} from 'react'
import Axios from '../../Axios'
import { API_KEY,imageUrl } from '../../Constants/Constants';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    Axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
      var randomNumber = Math.floor(Math.random() * 20);       //Random number between 0 to 19
      setMovie(response.data.results[randomNumber])
    })
  }, [])
  
  return (
    <div style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner