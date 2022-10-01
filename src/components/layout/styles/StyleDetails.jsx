import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerEstablishment = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5rem .5rem 5rem .5rem;
`;

export const StyleEstablishment = styled.div`
    margin: 0 auto;
    background-color: #FFF;
    border-radius: .5rem;
    p {
        padding: 1rem;
        text-align: justify;
        font-family: sans-serif;
    }
    h2 {
        padding: 1rem 1rem 0rem 1rem;
        font-family: arial black;
    }
`;

export const ContainerImage = styled.div`
    padding: 0rem 1rem 0rem 1rem;
`;

export const StyleImage = styled.img`
    width: 100%;
    height: 350px;
    margin: 0 auto;
    object-fit: cover;
    overflow: hidden;
    border-radius: .5rem;
    box-shadow: .1rem .1rem .5rem #565656;
`;

export const StyleLink = styled(Link)`
    color: #FFF;
    text-align: center;
    line-height: 40px;
    font-size: .8rem;
    font-family: sans-serif;
    text-decoration: none;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    font-weight: 700;
    }
    &:hover{
        color: #ECECEC;
    }
`;

export const ContainerLink = styled.div`
    background-color: #004250;
    border-radius: 1.5rem 1.5rem 0rem 0rem;
    padding: .5rem;
    margin: 1rem;
    width: 150px;
    box-shadow: .1rem .1rem .5rem #565656;
`;