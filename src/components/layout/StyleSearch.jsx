import styled from "styled-components";

export const InputStyle = styled.div`
  width: 100%;
  margin-bottom: .5rem;
  input {
    max-width: 500px;
    padding: .5rem;
    border: none;
    border-radius: .5rem;
  }
`;

export const SearchStyle = styled.div`
  max-width: 300px;
  z-index: 5;
  margin-bottom: .5rem;
  .searchResults {
    width: 100%;
    align-items: center;
    position: relative;
    z-index: 5;
    background-color: white;
    border: none;
    border-radius: .5rem;
    margin-bottom: .5rem;
    h4 {
      padding: .5rem;
      margin: 0;
      }
    }
  }
`;