import React, { useEffect, useState } from 'react'
import './banner.css'
import { imageUrl } from '../../constants/constants'
import axios from '../../axios'

function Banner() {
    const [movie, setMovie] = useState()

    const randomNum = Math.floor(Math.random() * 20);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            .then((response) => {
                setMovie(response.data.results[randomNum])
            })
    }, [])



    return (
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }} className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className='banner_buttons'>
                    <button className='button' >Play</button>
                    <button className='button' >My List</button>
                </div>
                <h1 className='description'> {movie ? movie.overview : ""}  </h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
