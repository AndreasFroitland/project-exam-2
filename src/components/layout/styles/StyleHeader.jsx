import styled from "styled-components";
import HeaderImage from "../images/Header-image.jpg";

export const ContainerHeader = styled.div`
    width: 100%;
`;

export const StyleHeader = styled.div`
    max-width: 100%;
    background-image: url(${HeaderImage});
    .ContainerSlogan {
        margin: 0 auto;
        max-width: 600px;
        padding: 4.5rem;
        text-align: center;
    }
    p {
        background-color: rgba(0, 65, 80, 0.75);
        border-radius: 1.5rem;
        margin: 0;
        padding: 1.5rem;
        font-size: 1.5rem;
        font-family: sans-serif;
        letter-spacing: 0.15rem;
        font-weight: bold;
        font-style: italic;
        color: #FFF;
        text-shadow: .1rem .1rem .5rem #000;
        box-shadow: .1rem .1rem .5rem #000;
    }
`;