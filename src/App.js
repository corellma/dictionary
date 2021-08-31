import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import './App.css';
import { Header } from './components/Header/Header';

function App() {
  const [category, setCategory] = useState('en');
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        'https://api.dictionaryapi.dev/api/v2/entries/en/plane'
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, []);

  return (
    <div
      className='App'
      style={{ eight: '100vh', backgroundColor: '#282c34', color: 'white' }}
    >
      <Container
        maxWidth='md'
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
      </Container>
    </div>
  );
}

export default App;
