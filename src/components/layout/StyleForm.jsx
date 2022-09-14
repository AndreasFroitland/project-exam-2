import styled from "styled-components";

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
        font-size: 1.3rem;
        font-family: sans-serif;
	    letter-spacing: 0.15rem;
        font-weight: 700;
        margin: 0;
        color: #000;
    }
`;

export const StyleForm = styled.form`
    display: block;
    max-width: 500px;
    margin: 0 auto;
    background-color: #808000;
    border-radius: .5rem;
    }
    p {
        color: #FFF;
        font-weight: 700;
        font-size: .8rem;
        font-family: sans-serif;
        padding-left: .5rem;
    }
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
    font-family: sans-serif;
`;

export const StyleButton = styled.button`
    display: block;
    width: 98.5%;
    margin: 0 auto;
    margin-bottom: .5rem;
    margin-top: .7rem;
    padding: .5rem;
    border-radius: .5rem;
    border-color: transparent;
    background-color: rgba(230, 229, 202, 0.25);
    
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
        background-color: rgba(215, 214, 170, 0.25);
        cursor: pointer;
    }
`;

export const StyleFieldset = styled.fieldset`
    border: none;
`;