import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { HOTELS } from "../../../constants/api";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ContainerStyle, StyleSearch, InputStyle, SearchStyle } from "../../layout/StyleSearch";

const Search = () => {
  const { data } = useFetch(HOTELS);
  const [searchWord, setSearchWord] = useState("");

  return (
    <>
    <ContainerStyle>
      <StyleSearch>
        <InputStyle type="text" placeholder="Search..."
          onChange={(event) => setSearchWord(event.target.value)}
          value={searchWord}
          onBlur={() => setTimeout(() => {
              setSearchWord("");
            }, 100)
          }
        />
        <SearchStyle>
        {data
        // eslint-disable-next-line
        .filter((hotel) => {
            if (searchWord === "") {
              return "";
            } else if (
                hotel.hotel_name
                .toLowerCase()
                .includes(searchWord.toLowerCase())
            ) {
              return hotel;
            }
          })
          .map((hotel) => (
            <Link to={`establishments/details/${hotel.id}`} key={hotel.id}>
              <div className="searchResults">
                <p>{hotel.hotel_name}</p>
              </div>
            </Link>
          ))}
        </SearchStyle>
      </StyleSearch>
      </ContainerStyle>
    </>
  );
};

export default Search;