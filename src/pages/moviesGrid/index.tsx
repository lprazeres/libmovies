import { MovieInformation } from "./movieInformation/MovieInformation";
import { MoviesGridContainer } from './styles';



export function MoviesGrid() {

    return (
        <MoviesGridContainer>
            <h1>Top Rated Movies</h1>
                <MovieInformation />
        </MoviesGridContainer>
    )
}