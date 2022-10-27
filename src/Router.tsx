import { DefaultLayout } from "./layout/indext";
import { MoviePerfil } from "./pages/moviePerfil";
import { MoviesGrid } from "./pages/moviesGrid";
import {Search} from './pages/search';
import { Routes, Route } from 'react-router-dom';


export function Router (){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>;
                <Route path="/" element={<MoviesGrid />} />
                <Route path="/movie/:id" element={<MoviePerfil />} />
                <Route path="/search" element={<Search />} />
            </Route>
        </Routes>
    )
}