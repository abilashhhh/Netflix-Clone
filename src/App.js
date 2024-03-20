 import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import RowPost from './components/rowPost/rowPost';
import { ComedyMovies, HorrorMovies, ActionMovies, Documentaries, RomanceMovies } from './constants/urls';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      <Banner />
      <RowPost title="Action Movies" url={ActionMovies} isSmall={true} searchQuery={searchQuery} />
      <RowPost title="Comedy Movies" url={ComedyMovies} isSmall={true} searchQuery={searchQuery} />
      <RowPost title="Horror Movies" url={HorrorMovies} isSmall={true} searchQuery={searchQuery} />
      <RowPost title="Documentaries" url={Documentaries} isSmall={true} searchQuery={searchQuery} />
      <RowPost title="Romance Movies" url={RomanceMovies} isSmall={true} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
