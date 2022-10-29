import styled from "styled-components";

export const MoviePerfilContainer = styled.div`
padding: 3rem;
width: 100%;
max-width: 1120px;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 2rem;


img{
    height: 600px;
    width: 450px;
}
h1, h2, p, b{
    border-bottom: 2px solid ${props => props.theme['base-input']};
    &:hover{
        color: ${props => props.theme['base-input']};
}
}
p{
    display: flex;
    gap: 0.5rem;
    font-size: 1.2rem; 
    border-bottom: 0;
    align-items: flex-end;
}
b{
    font-size: 1.5rem;
    border-bottom: 0;
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
    font-size: 1.5rem;

    &:hover{
        background: ${props => props.theme['base-profile']};
        color: ${props => props.theme['base-input']};
        border: 1px solid ${props => props.theme['base-background']};
        &:focus{
        border: 1px solid ${props => props.theme['base-background']};
}
}
}
`;

export const MoviePerfilContentContainer = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
`;

export const MoviePerfilContent = styled.div`
display: flex;
flex-direction: column;
gap: 1.2rem;
`;