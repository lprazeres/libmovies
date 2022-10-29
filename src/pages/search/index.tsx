import { useState, useEffect } from "react";
import { useSearchParams, NavLink } from "react-router-dom";
import { MoviesGridContainer, MoviesGridArea, MoviesGridContent, ButtonMenu, SearchContainer } from "./styles";

export function Search() {


    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);

    const query = searchParams.get("q");


    async function loadMovies() {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b34f748cfd2d89814bc3cdd8ac2c6cff&query=${query}`)
        const data = await response.json()
        setMovies(data.results);
    }

    useEffect(() => {
        loadMovies()
    }, [query]);

    return (
        <SearchContainer>
            <NavLink to='/'>
                <ButtonMenu>MENU</ButtonMenu>
            </NavLink>
            {movies.map(movie => {
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
            })}
        </SearchContainer>
    )
}