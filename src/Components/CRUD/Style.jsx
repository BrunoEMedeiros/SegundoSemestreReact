
import styled from "styled-components";
import { secundary, dark } from "../../Styles/colors";

const Header = styled.header`

    margin-top: 5%;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${ secundary };

    box-shadow: 3px 5px 5px 1px rgba(0,0,0,0.69);

    padding: 2rem;
`;

const Titulo = styled.h1`
 
    font-size: 2.5rem;
    color: antiquewhite;
`;

const Divisinha = styled.div`
    
    display: flex;
    align-items: center;
    gap: 1rem;

`;

const CampoTexto = styled.input`

    width: 80%;

    padding: 2rem;

    border: none;
    border-radius: 1rem;

    ::placeholder{
        color: ${dark};
    }
`;

const Botao = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 50%;

`;

export { Header, Titulo, CampoTexto, Botao, Divisinha }