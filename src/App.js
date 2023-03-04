import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import tattoos from './data/tattoos';

function App() {
  const [selectedTattoo, setSelectedTattoo] = useState(null);
  function onTattooOpenClick(thetattoo) {
    setSelectedTattoo(thetattoo);
  }

  const tattooElements = tattoos.map((tattoo,index) => {
    return <TattooItem key={index} tattoo = {tattoo} onTattooClick = {onTattooOpenClick} />;

  });

  let tattooPost = null;
  if(!!selectedTattoo){
    tattooPost = <TattooPost tattoo={selectedTattoo} />

  }
  return (
    <div className="app">
      <AppHeader />
      <button onClick={() => {onTattooOpenClick(tattoos[3])}}>สักหน่อยมั้ยล่ะ</button>
      <div className="app-grid">
        {tattooElements}
      </div>
      {tattooPost}
    </div>
    
  );
}

export default App;
