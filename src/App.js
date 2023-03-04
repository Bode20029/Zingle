import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import tattoos from './data/tattoos';

function App() {
  const [selectedTattoo, setSelectedTattoo] = useState(null);
  const [searchText, setSearchText] = useState('');
  function onTattooOpenClick(thetattoo) {
    setSelectedTattoo(thetattoo);
  }

  function onTattooCloseClick() {
    setSelectedTattoo(null);
  }

  // const filterTattoos = tattoos.filter((tattoo) => {
  //   return tattoo.title.includes(searchText);
  // });

  const tattooElements = tattoos.filter((tattoo) => {
    return tattoo.title.includes(searchText);
  }).map((tattoo,index) => {
  // const tattooElements = filterTattoos.map((tattoo,index) => {
    return <TattooItem key={index} tattoo = {tattoo} onTattooClick = {onTattooOpenClick} />;

  });

  let tattooPost = null;
  if(!!selectedTattoo){
    tattooPost = <TattooPost tattoo={selectedTattoo} onBGClick={onTattooCloseClick} />

  }
  return (
    <div className="app">
      <AppHeader />
      <div className='app-search'>
        <input 
          className='app-search-input'
          type='text' 
          placeholder='Search'
          value={searchText}
          onChange={(e) => {setSearchText(e.target.value)}}
        />

      </div>
      <button onClick={() => {onTattooOpenClick(tattoos[3])}}>สักหน่อยมั้ยล่ะ</button>
      <div className="app-grid">
        {tattooElements}
      </div>
      {tattooPost}
    </div>
    
  );
}

export default App;
