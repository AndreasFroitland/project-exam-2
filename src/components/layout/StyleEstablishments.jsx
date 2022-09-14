import styled from "styled-components";
import {Link} from "react-router-dom";

export const ContainerEstablishments = styled.div`
    display: inline-block;
    max-width: 1200px;
    margin: 0 auto;
    margin-right: .5rem;
    background-color: #FFF;
    border-radius: .5rem;
    @media (max-width: 750px) {
        display: block;
        width: 100%;
        margin: 0 auto;
        margin-bottom: 1rem;
    }
`;

export const StyleEstablishments = styled.div`
    max-width: 300px;
    display: inline-block;
    vertical-align: middle;
    height: 150px;
    padding: .5rem;
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
    @media (max-width: 1190px) {
        display: block;
    }
    @media (max-width: 750px) {
        max-width: 95%;
        margin: 0 auto;
        padding-top: .5rem;
        padding-bottom: .5rem;
    }
`;

export const StyleImage = styled.img`
    display: inline-block;
    width: 300px;
    height: 150px;
    margin: 0 auto;
    vertical-align: middle;
    object-fit: cover;
    object-position: 50% 50%;
    overflow: hidden;
    border-radius: .5rem;
    @media (max-width: 750px) {
        width: 100%;
        padding: 0;
    }
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