import {Link} from "react-router-dom";
import styled from "styled-components";
import HolidazeTexture from "../images/Holidaze-texture.png";

export const ContainerNav = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: #808000;
    background-image: url(${HolidazeTexture});
`;

export const ContainerLogo = styled.div`
    display: inline-block;
    vertical-align:middle
`;

export const NavbarLogo = styled.img`
    height: 95px;
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    margin-right: 2rem;
`;

export const ContainerNavbar  = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 1.5rem 0rem 1.5rem 0.5rem;
`;

export const ContainerLink = styled.div `
    display: inline-block;
    padding: 0.25rem 1.25rem 0.25rem 1.25rem;
    margin-right: 2rem;

    border-style: solid;
    border-radius: .25rem;
    border-width: 0.15rem;
    border-color: black;

    background-color: rgba(215, 214, 170, 0.65);
    color: #E6E5CA;

    &:hover {
        background-color: #E6E5CA;
    }
`;

export const NavbarLink = styled(Link) `
    color: black;
    font-size: 1rem;
    font-family: Open sans;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 900;

    &:hover{
        color: #2F2F16;
    }
`;

export const ContainerButton = styled.div `
    display: inline-block;
    padding: 0.25rem 1.25rem 0.25rem 1.25rem;
    margin-right: 2rem;

    border-style: solid;
    border-radius: .25rem;
    border-width: 0.15rem;

    background-color: #BAB86C;
    color: #E6E5CA;

    &:hover {
        background-color: #E6E5CA;
    }
`;

export const NavbarButton = styled.button `
    color: black;
    font-size: 1rem;
    font-family: Open sans;
    font-style: italic;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 900;
    border: none;
    background-color: transparent;

    &:hover{
        color: #2F2F16;
    }
`;