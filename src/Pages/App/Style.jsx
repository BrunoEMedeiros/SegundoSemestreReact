
import styled from "styled-components";
import { background } from '../../Styles/colors.jsx'

const Page = styled.div`

    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

`;

const Container = styled.div`

    height: 100%;
    width: 60rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    box-shadow: 3px 9px 18px -4px rgba(0,0,0,0.85);

    background: ${ background };
`;

export { Container, Page }