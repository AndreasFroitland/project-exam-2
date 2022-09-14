import styled from "styled-components";
import {Link} from "react-router-dom";

export const ContainerEstablishments = styled.div`
    display: inline-block;
    max-width: 1200px;
    margin: 0 auto;
    padding-right: .5rem;
    @media (max-width: 750px) {
        display: block;
        padding-right: 0;
    }
    @media (max-width: 750px) {
        width: 95%;
    }
`;

export const StyleEstablishments = styled.div`
    max-width: 300px;
    display: inline-block;
    vertical-align: middle;
    }
    h1 {
        font-family: sans-serif;
        font-size: 1rem;
        font-weight: 900;
        margin: 0;
        display: inline-block;
        padding: .5rem;
    }
    p {
        font-size: 1rem;
        margin: 0;
        padding-left: .5rem;
    }
    @media (max-width: 1155px) {
        display: block;
    }
    @media (max-width: 750px) {
        width: 100%;
    }
`;

export const StyleImage = styled.img`
    display: inline-block;
    padding: .5rem;
    width: 250px;
    height: 180px;
    margin: 0 auto;
    vertical-align: middle;
    object-fit: cover;
    overflow: hidden;
`;

export const StyleRating = styled.p`
    display: inline-block;
    padding: .5rem;
    font-family: times new roman;
    font-size: .8rem;
    font-weight: 700;
    color: #FFF;
    background-color: #808000;
    border-radius: .5rem;
`;

export const StyleLink = styled(Link)`
    display: inline-block;
    color: #FFF;
    text-decoration: none;
    font-size: .8rem;
    font-weight: 700;
    background-color: #808000;
    border-radius: .5rem;
    padding: .5rem;
    margin: .5rem;
    }
    &:hover {
        color: black;
    }
`;