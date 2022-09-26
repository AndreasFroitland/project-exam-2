import styled from "styled-components";
import {Link} from "react-router-dom";

export const ContainerEstablishments = styled.div`
    display: inline-block;
    max-width: 1200px;
    margin: 0 auto;
    margin: .5rem;
    background-color: #FFF;
    border-radius: .5rem;
    }
    @media (max-width: 750px) {
        display: block;
        width: 100%;
        margin: 0 auto;
        margin-bottom: 1rem;
    }
`;

export const StyleEstablishments = styled.div`
    width: 350px;
    vertical-align: middle;
    padding: .5rem;
    }
    h1 {
        display: inline-block;
        font-family: sans-serif;
        font-size: 1rem;
        font-weight: 900;
        margin: 0;
        padding: .5rem;
    }
    p {
        font-size: 1rem;
        margin: 0;
        padding-left: .5rem;
    }
    @media (max-width: 1220px) {
        display: block;
    }
    @media (max-width: 750px) {
        width: 95%;
        margin: 0 auto;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
`;

export const StyleImage = styled.img`
    width: 100%;
    height: 350px;
    margin: 0 auto;
    object-fit: cover;
    border-radius: .5rem;
    box-shadow: .1rem .1rem .5rem #565656;
`;

export const StyleLink = styled(Link)`
    display: inline-block;
    color: #FFF;
    text-decoration: none;
    text-align: center;
    font-size: .8rem;
    font-weight: 700;
    background-color: #004250;
    border-radius: .5rem;
    padding: .5rem;
    width: 50%;
    box-shadow: .1rem .1rem .5rem #565656;
    }
    &:hover {
        color: #ECECEC;
    }
`;