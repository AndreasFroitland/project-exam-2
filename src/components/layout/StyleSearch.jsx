import styled from "styled-components";

export const ContainerSearch = styled.div`
    background-color: #808000;
    max-width: 1200px;
    margin: 0 auto;
`;

export const InputStyle = styled.div`
    width: 50%;
    padding: .5rem .5rem 0rem .5rem;
    margin-bottom: .5rem;
    input {
        width: 50%;
        padding: .5rem;
        border: none;
        border-radius: .5rem;
    }
`;

export const SearchStyle = styled.div`
    width: 50%;
    z-index: 5;
    margin-bottom: .5rem;
    padding: .5rem;
    .searchResults {
        width: 50%;
        align-items: center;
        position: relative;
        z-index: 5;
        background-color: white;
        border: none;
        border-radius: .5rem;
        margin-bottom: .5rem;
    h4 {
        padding: .5rem;
        margin: 0 auto;
      }
    }
  }
`;