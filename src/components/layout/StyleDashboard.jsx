import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerDashboard = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const ContainerMenu = styled.div`
    width: 100%;
    margin: 0 auto;
    padding-left: .5rem;
    }
    @media (max-width: 850px) {
        padding: 0;
    }
`;

export const StyleMenu = styled.div`
    display: inline-block;
    padding: 0rem 2.5rem 0rem 2.5rem;
    margin-right: 2rem;
    border: 2px solid #FFF;
    border-radius: 1.5rem;
    background-color: #004250;
    }
    @media (max-width: 850px) {
        display: block;
        margin: 0 auto;
        margin-bottom: .5rem;
        margin-right: .5rem;
        margin-left: .5rem;
    }
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