import React, { useState } from "react";
import searchIcon from "../assets/search-icon.PNG";
import voiceIcon from "../assets/voice-icon2.png";
import imageIcon from "../assets/image-icon.PNG";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setsearchQuery] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(searchQuery);
    }
  };

  return (
    <>
      <div className="searchBar--wrap">
        <form>
          <div className="search">
            <div className="searchIcon">
              <img src={searchIcon} alt="Google_Img" />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setsearchQuery(event.target.value)}
              onKeyDown={handleKeyDown}
            />

            <div className="voiceIcon">
              <img src={voiceIcon} alt="Google_Img" />
            </div>
            <div className="imageIcon">
              <img src={imageIcon} alt="Google_Img" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
