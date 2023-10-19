import React from 'react'
import './App.css';
import { originals,action } from './URLs';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title='Netflix Originals' url={originals}/>
      <RowPost title='Actions' url={action} isSmall/>
    </div>
  );
}

export default App;
