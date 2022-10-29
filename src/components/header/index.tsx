import { VideoCamera, MagnifyingGlass } from 'phosphor-react';
import { HeaderContainer, HeaderArea, HeaderContent} from './styles';


export function Header() {
    return (
        
            <HeaderContainer>

                <HeaderArea>

                    <HeaderContent>
                        <VideoCamera size={32} color="#e85e30" />
                        <span>MoviesLib</span>
                    </HeaderContent>


                    <form>
                        <HeaderContent>
                            <input type="text" placeholder="Search your movie..." />
                            <button>
                                <MagnifyingGlass size={32} />
                            </button>
                        </HeaderContent>
                    </form>


                </HeaderArea>

            </HeaderContainer>
       
    )
}