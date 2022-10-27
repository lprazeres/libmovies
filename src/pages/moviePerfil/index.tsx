import { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';

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
        <div>
            {movie.title}
            MOVIE PERFIL
        </div>
    )
}