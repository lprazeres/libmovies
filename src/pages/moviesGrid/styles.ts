import styled from "styled-components";

export const MoviesGridContainer = styled.div`

padding: 3rem;
width: 100%;
max-width: 1120px;
margin: 0 auto;



display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 2rem;

h1{
    font-size: 3rem;
    font-weight: bold;
    color: ${props => props.theme['white']};
}
`;
