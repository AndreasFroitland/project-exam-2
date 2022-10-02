import styled from "styled-components";

export const ContainerSubscribe = styled.div`
    width: 100%;
    height: auto;
    background-color: #A2B4B8;
    form {
        max-width: 800px;
        padding: 5rem;
        text-align: center;
        margin: 0 auto;
        @media (max-width: 800px) {
        padding: .5rem;
        }
    }
    input[type=text] {
        max-width: 150px;
        padding: 1rem;
        border: none;
        border-radius: 1.5rem 0 0 1.5rem;
    }
    button {
        max-width: 75px;
        padding: 1rem;
        border: none;
        border-radius: 0 1.5rem 1.5rem 0;
        background-color: #004250;
        font-family: sans-serif;
        font-weight: 700;
        color: #FFF;
    }
    p {
        margin: 0;
        padding-bottom: 1.5rem;
        font-family: sans-serif;
        color: #000;
        font-weight: 700;
        font-style: italic;
        text-transform: uppercase;
        font-size: .9rem;
    }
`;
