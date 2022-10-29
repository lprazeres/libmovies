import styled from "styled-components";

export const HeaderContainer = styled.div`
padding: 2.5rem 0 1.5rem;
background: ${props => props.theme['base-profile']};
position: sticky;
  top: 0;
  width: 100%
`;

export const HeaderArea = styled.div`
width: 100%;
padding-left: 3rem;
padding-right: 3rem;

display: flex;
align-items: center;
justify-content: space-between;

font-size: 2rem;
font-weight: bold;

input{
background: ${props => props.theme['base-input']};
color: ${props => props.theme['base-background']};
flex: 1;
border-radius: 6px;
border: 0;
padding: 0.5rem;
font-weight: bold;
&::placeholder{
    color: ${props => props.theme['base-background']};
}
&:hover{
    color: ${props => props.theme['base-input']};
    background: ${props => props.theme['base-background']};
    &::placeholder{
    color: ${props => props.theme['base-input']};
}
}
}
button{
    background: ${props => props.theme['base-input']};
    border: 0;
    padding: 0.01rem;
    &:hover{
        background: ${props => props.theme['base-background']};
        color:${props => props.theme['base-input']};
    }
}
`;

export const HeaderContent = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
`;
