import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerStyle = styled.div`
    width: 100%;
    background-color: #808000;
    @media (max-width: 850px) {
        text-align: center;
        padding-bottom: 1rem;
    }
`;

export const StyleSearch = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: .5rem;
    @media (max-width: 850px) {
        padding: 0rem;
    }
`;

export const InputStyle = styled.input`
    width: 50%;
    padding: .5rem;
    margin-left: .5rem;
    border: none;
    border-radius: .5rem;
    @media (max-width: 850px) {
        width: 95%;
        border-radius: 0;
        margin: 0 auto;
    }
`;

export const SearchStyle = styled.div`
    max-width: 500px;
    z-index: 5;
    text-align: center;
    margin-left: .5rem;
    .searchResults {
        width: 50%;
        position: relative;
        z-index: 5;
        border-radius: 1.5rem;
        border: 2px solid #FFF;
        background-color: rgba(186, 183, 108, 0.25);
        margin-top: .5rem; 
    }
  }
`;

export const LinkStyle = styled(Link)`
    color: #FFF;
    text-decoration: none;
    font-family: sans-serif;
    font-size: 1rem;
`;