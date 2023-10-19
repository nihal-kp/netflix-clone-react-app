import React, {useEffect,useState} from 'react'
import './RowPost.css';
import Axios from '../../Axios'
import { imageUrl,API_KEY } from '../../Constants/Constants';
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  useEffect(() => {
    Axios.get(props.url).then(response=>{
      // console.log(response.data);
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Network Errror')
    })
  }, [props.url])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
      // console.log(id);
      Axios.get(`movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response=>{
        console.log(response.data);
        if(response.data.results.length!==0) {
            setUrlId(response.data.results[0])
        }
        else {
          console.log('Array Empty')
        }
      })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )}  
        </div>
        { urlId && <YouTube opts={opts} videoId={urlId.key} />  }
    </div>
  )
}

export default RowPost