import { MovieInformation } from "./moviePerfil/MovieInformation";
import { MoviesGridContainer } from './styles';



export function MoviesGrid() {

    return (
        <MoviesGridContainer>
            <h1>Top Rated Movies</h1>
                <MovieInformation />
        </MoviesGridContainer>
    )
}