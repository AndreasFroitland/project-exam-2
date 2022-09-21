import styled from "styled-components";

export const ContainerStyle = styled.div`
    width: 100%;
    background: #808000;
    background: -moz-linear-gradient(top,  #808000 0%, #808000 50%, #e6e5ca 51%, #e6e5ca 100%);
    background: -webkit-linear-gradient(top,  #808000 0%,#808000 50%,#e6e5ca 51%,#e6e5ca 100%);
    background: linear-gradient(to bottom,  #808000 0%,#808000 50%,#e6e5ca 51%,#e6e5ca 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#808000', endColorstr='#e6e5ca',GradientType=0 );
`;

export const StyleSearch = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: .5rem;
`;

export const InputStyle = styled.input`
    width: 50%;
    padding: .5rem .5rem .5rem .5rem;
    border: none;
    border-radius: .5rem;
`;

export const SearchStyle = styled.div`
    width: 50%;
    z-index: 5;
    margin-bottom: .5rem;
    .searchResults {
        width: 50%;
        position: relative;
        z-index: 5;
        border: 2px solid #FFF;
        background-color: #808000;
        padding: 0rem 2.5rem 0rem 2.5rem;
    p {
        color: #FFF;
        text-decoration: none;
      }
    }
  }
`;