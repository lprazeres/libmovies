import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


export function MoviesGrid() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        loadMovies();
    }, []);

    async function loadMovies() {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=b34f748cfd2d89814bc3cdd8ac2c6cff')
        const data = await response.json()
        setMovies(data.results);
    }


    return (
        <div>

            {movies.map(movie => {
                return (
                    <div>
                        {movie.title}
                        <span>{movie.id}</span>
                        <NavLink to={'/movie/' + movie.id}>
                            Detalhes
                        </NavLink>
                    </div>

                )
            })}
        </div>
    )
}