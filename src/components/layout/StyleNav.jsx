import {Link} from "react-router-dom";
import styled from "styled-components";
import HolidazeTexture from "../images/Holidaze-texture.png";

/* Navigation container */
export const ContainerNav = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: #808000;
    background-image: url(${HolidazeTexture});
`;

/* Holidaze logo */
export const ContainerLogo = styled.div`
    display: inline-block;
    vertical-align:middle
`;

export const NavbarLogo = styled.img`
    height: 95px;
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    margin-right: 2rem;
`;

/* Navbar link container */
export const ContainerNavbar  = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem 0rem 2rem 0rem;
`;

export const ContainerLink = styled.div `
    display: inline-block;
    padding: 0rem 2.5rem 0rem 2.5rem;
    margin-right: 2rem;

    border: 2px solid #000;
    background-color: rgba(186, 183, 108, 0.25);

    &:hover{
        background-color: rgba(230, 229, 202, 0.25);
    }
`;

export const NavbarLink = styled(Link) `
    color: #000;
    text-align: center;
    line-height: 40px;
    font-size: 1rem;
    font-family: sans-serif;
    font-weight: 100;
    text-decoration: none;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    font-weight: 700;

    &:hover{
        color: #2F2F16;
    }
`;

export const ContainerButton = styled.div `
    display: inline-block;
    padding: 0rem 2.5rem 0rem 2.5rem;
    margin-right: 2rem;

    border: 2px solid #000;
    background-color: rgba(186, 183, 108, 0.25);

    &:hover{
        background-color: rgba(230, 229, 202, 0.25);
    }
`;

export const NavbarButton = styled.button `
    color: #000;
    text-align: center;
    line-height: 40px;
    font-size: 1rem;
    font-family: sans-serif;
    font-weight: 100;
    text-decoration: none;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    font-weight: 700;
    border: none;
    background-color: transparent;

    &:hover{
        color: #2F2F16;
    }
`;