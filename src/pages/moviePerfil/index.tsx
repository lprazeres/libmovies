import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { MoviePerfilContainer, MoviePerfilContent, MoviePerfilContentContainer } from './styles';
import { Star, Money, Cardholder, ClockAfternoon, MaskHappy } from 'phosphor-react';


export function MoviePerfil() {

    const { id } = useParams()

    const [movie, setMovie] = useState([])

    useEffect(() => {
        loadMovie();
    }, []);

    async function loadMovie() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b34f748cfd2d89814bc3cdd8ac2c6cff`)
        const data = await response.json()
        setMovie(data);
    }


    return (
        <MoviePerfilContainer>

            <NavLink to='/'>
                <button>MENU</button>
            </NavLink>

            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h1>{movie.title}</h1>
            <p>
                <Star size={32} />
                {movie.vote_average}
            </p>
            <h2>{movie.tagline}</h2>

            <MoviePerfilContentContainer>

                <MoviePerfilContent>
                    <p><Cardholder size={32} /> BUDGET:</p>
                    <b>US$ {movie.budget}</b>
                </MoviePerfilContent>

                <MoviePerfilContent>
                    <p><Money size={32} /> REVENUE:</p>
                    <b>US$ {movie.revenue}</b>
                </MoviePerfilContent>

                <MoviePerfilContent>
                    <p><ClockAfternoon size={32} /> RUN TIME:</p>
                    <b>{movie.runtime} minutes</b>
                </MoviePerfilContent>

                <MoviePerfilContent>
                    <p><MaskHappy size={32} /> DESCRIPTION:</p>
                    <b>{movie.overview}</b>
                </MoviePerfilContent>

            </MoviePerfilContentContainer>

        </MoviePerfilContainer>
    )
}