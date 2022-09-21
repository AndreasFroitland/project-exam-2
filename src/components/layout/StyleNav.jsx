import { Link } from "react-router-dom";
import styled from "styled-components";

/* Navigation container */
export const ContainerNav = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: #808000;
`;

/* Holidaze logo */
export const ContainerLogo = styled.div`
    display: inline-block;
    vertical-align: middle
`;

export const NavbarLogo = styled.img`
    height: 95px;
    padding: .5rem .5rem .5rem .5rem;
    margin-right: 2rem;
    }
    @media (max-width: 1200px) {
        display: none;
    }
    @media (max-width: 850px) {
        display: block;
        margin: 0 auto;
        margin-bottom: .5rem;
    }
`;

/* Navbar link container */
export const ContainerNavbar  = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0rem 1rem 0rem;
    @media (max-width: 850px) {
        text-align: center;
    }
`;

export const ContainerLink = styled.div `
    display: inline-block;
    padding: 0rem 2.5rem 0rem 2.5rem;
    margin-right: 2rem;

    border: 2px solid #FFF;
    border-radius: 1.5rem;
    background-color: rgba(186, 183, 108, 0.25);

    &:hover{
        background-color: rgba(230, 229, 202, 0.25);
    }
    @media (max-width: 1200px) {
        margin-left: 1rem;
    }
    @media (max-width: 850px) {
        display: block;
        margin: 0 auto;
        margin-bottom: .5rem;
    }
`;

export const NavbarLink = styled(Link) `
    color: #FFF;
    text-align: center;
    line-height: 40px;
    font-size: .8rem;
    font-family: sans-serif;
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

    border: 2px solid #FFF;
    border-radius: 1.5rem;
    background-color: rgba(186, 183, 108, 0.25);

    &:hover{
        background-color: rgba(230, 229, 202, 0.25);
    }
    @media (max-width: 1200px) {
        margin-left: 1rem;
    }
    @media (max-width: 850px) {
        margin: 0 auto;
    }
`;

export const NavbarButton = styled.button `
    color: #FFF;
    text-align: center;
    line-height: 40px;
    font-size: .8rem;
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

    @media (max-width: 850px) {
        display: block;
    }
`;