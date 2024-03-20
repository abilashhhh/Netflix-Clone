import React, { useEffect, useState } from 'react';
import './rowPost.css';
import axios from '../../axios';
import Youtube from 'react-youtube';
// import { imageUrl, API_KEY } from '../../constants/constants';
import { imageUrl } from '../../constants/constants';

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [urlId, setUrlId] = useState('');

    const handleSearch = (query) => {
        const filtered = movies.filter(movie =>
            movie.original_title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredMovies(filtered);
    };

    const handleMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            .then((response) => {
                if (response.data.results.length !== 0) {
                    setUrlId(response.data.results[0]);
                } else {
                    console.log('Trailer not available');
                }
            });
    };

    useEffect(() => {
        axios.get(props.url)
            .then((response) => {
                setMovies(response.data.results);
                setFilteredMovies(response.data.results);
            });
    }, [props.url]);

    useEffect(() => {
        handleSearch(props.searchQuery);
    }, [props.searchQuery]);

    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {filteredMovies.length === 0 ? (
                    <p>No movies found as per searched in this category</p>
                ) : (
                    filteredMovies.map((obj) =>
                        <img
                            key={obj.id}
                            onClick={() => handleMovie(obj.id)}
                            className={props.isSmall ? 'smallPoster' : 'poster'}
                            src={`${imageUrl + obj.poster_path}`}
                            alt="Poster"
                        />
                    )
                )}
            </div>
            {urlId && <Youtube opts={opts} videoId={urlId.key} />}
        </div>
    );
}

export default RowPost;
