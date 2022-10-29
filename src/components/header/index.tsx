import { VideoCamera, MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';
import { HeaderContainer, HeaderArea, HeaderContent } from './styles';
import { useNavigate } from "react-router-dom";



export function Header() {

    
    const [search, setSearch] = useState('')
    const navigate = useNavigate();

    function handleSearch(e) {
        e.preventDefault();
        

        if (!search) return;

        navigate(`/search?q=${search}`, { replace: true });
        setSearch("");
    }

    function handleText(e) {
        setSearch(e.target.value)
    }

    return (

        <HeaderContainer>

            <HeaderArea>

                <HeaderContent>
                    <VideoCamera size={32} color="#e85e30" />
                    <span>MoviesLib</span>
                </HeaderContent>


                <form onSubmit={handleSearch}>
                    <HeaderContent>
                        <input type="text" placeholder="Search your movie..." onChange={handleText} />
                        <button type='submit'>
                            <MagnifyingGlass size={32} />
                        </button>
                    </HeaderContent>
                </form>


            </HeaderArea>

        </HeaderContainer>

    )
}