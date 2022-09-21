import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { HOTELS } from "../../../constants/api";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ContainerSearch, InputStyle, SearchStyle } from "../../layout/StyleSearch";

const Search = () => {
  const { data } = useFetch(HOTELS);
  const [searchWord, setSearchWord] = useState("");

  return (
    <>
      <ContainerSearch>
      <InputStyle>
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => setSearchWord(event.target.value)}
          value={searchWord}
          onBlur={() =>
            setTimeout(() => {
              setSearchWord("");
            }, 100)
          }
        />
      </InputStyle>
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
            <Link to={`details/${hotel.id}`} key={hotel.id}>
              <div className="searchResults">
                <h4>{hotel.hotel_name}</h4>
              </div>
            </Link>
          ))}
      </SearchStyle>
      </ContainerSearch>
    </>
  );
};

export default Search;