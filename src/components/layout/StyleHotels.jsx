import styled from "styled-components";
import HolidazeTexture from "../images/Holidaze-texture.png";

export const ContainerHotels = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: #808000;
    background-image: url(${HolidazeTexture});
    display: flex;
    justify-content: space-between;
`;

export const StyleHotelsLeft = styled.form`
    display: inline-block;
    max-width: 700px;
    }
    h1 {
        font-size: 1.5rem;
        margin: 0;
    }
    p {
        font-size: 1rem;
        margin: 0;
    }
`;

export const StyleHotelsRight = styled.div`
    display: inline-block
    }
    img {
        max-width: 300px;
        vertical-align: middle
    }
`;