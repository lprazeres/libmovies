import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MoviesGridContainer, MoviesGridArea, MoviesGridContent} from './styles';


export function MovieInformation() {

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
        <MoviesGridContainer>
            {movies.map(movie => {
                return (
                    <MoviesGridArea>
                        <h2>{movie.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        <MoviesGridContent>Release Date:<span>{movie.release_date}</span></MoviesGridContent>
                        <MoviesGridContent>Note Average:<span>{movie.vote_average}</span></MoviesGridContent>
                        <NavLink to={'/movie/' + movie.id}>
                            <button>Details</button>
                        </NavLink>
                    </MoviesGridArea>
                )
            })}
        </MoviesGridContainer>
    )
}