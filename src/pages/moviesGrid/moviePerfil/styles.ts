import styled from "styled-components";


export const MoviesGridContainer = styled.div`
margin-top: 4rem;
display: grid;
grid-template-columns: repeat(4, 1fr);
justify-content: center;
gap: 2rem;

`;

export const MoviesGridArea = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 0.2rem;

padding: 10px;;

background: ${props => props.theme['base-profile']};

h2{
    font-size: 1rem;
}
img{
    height: 350px;
    width: 250px;
    &:hover{
        opacity: 0.5;
    }
}
button{
    border: 0;
    padding: 0.2rem 0.9rem;
    width: 250px;
    font-weight: bold;
    background: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-background']};
    border-radius: 6px;
    cursor: pointer;

    &:hover{
        background: ${props => props.theme['base-background']};
        color: ${props => props.theme['base-input']};
    }
}
`;

export const MoviesGridContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;

font-weight: bold;
`;
