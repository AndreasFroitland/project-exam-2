import styled from "styled-components";
import HolidazeTexture from "../images/Holidaze-texture.png";

/* Navigation container */
export const ContainerForm = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const ContainerHeader = styled.div`
    max-width: 500px;
    margin: 0 auto;
    }
    h1 {
        font-size: 1.5rem;
        font-family: sans-serif;
        margin: 0;
    }
`;

export const StyleForm = styled.form`
    display: block;
    max-width: 500px;
    margin: 0 auto;
    background-color: #808000;
    background-image: url(${HolidazeTexture});
    border: 2px solid #000;
`;

export const StyleInput = styled.input`
    display: block;
    width: 95%;
    margin: 0 auto;
    margin-bottom: .5rem;
    margin-top: .7rem;
    padding: .5rem;
    border-radius: .5rem;
    border: none;
`;

export const StyleTextarea = styled.textarea`
    display: block;
    width: 95%;
    height: auto;
    margin: 0 auto;
    margin-bottom: .5rem;
    margin-top: .7rem;
    padding: .5rem;
    resize: none;
    border-radius: .5rem;
    border: none;
`;

export const StyleButton = styled.button`
    display: block;
    width: 99%;
    margin: 0 auto;
    margin-bottom: .5rem;
    margin-top: .7rem;
    padding: .5rem;
    border: 2px solid #000;
    background-color: rgba(230, 229, 202, 0.25);
    
    color: #000;
    text-align: center;
    line-height: 40px;
    font-size: 1rem;
    font-family: sans-serif;
    text-decoration: none;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    font-weight: 700;

    &:hover{
        background-color: rgba(215, 214, 170, 0.25);
        cursor: pointer;
    }
`;

export const StyleFieldset = styled.fieldset`
    border: none;
`;