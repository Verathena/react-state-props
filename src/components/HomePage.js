import React, { useState } from 'react';
import Header from "./Header"
import Logo from "./Logo";
import MainSection from "./MainSection";
import SearchBar from "./SearchBar";
import Footer from "./Footer";


const HomePage = () => {
    const [searchQuery, setsearchQuery] = useState('');
    const [searchedTerm, setsearchedTerm] = useState([]);

    const handleSearch = (keyword) => {
        setsearchQuery(keyword);
        setsearchedTerm([...searchedTerm, keyword]);
    };
    
  return (
    <div className="HomePage--wrapper">
        <Header />
        <Logo />
        <SearchBar onSearch={handleSearch} />
        {searchQuery && (
            <div className="searchedTerm">
           {searchQuery}
            </div>
        )}
        <MainSection />
        <Footer />
    </div>
  );
}

export default HomePage;
