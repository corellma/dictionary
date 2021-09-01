import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, withStyles } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import './App.css';
import { Header } from './components/Header/Header';
import { Definitions } from './components/Definitions/Definitions';
import { grey } from '@material-ui/core/colors';

function App() {
  const [category, setCategory] = useState('en');
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [lightMode, setLightMode] = useState(false);

  const DarkModeSwitch = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      className='App'
      style={{
        height: '100vh',
        backgroundColor: lightMode ? '#DCDCDC' : '#282c34',
        color: lightMode ? 'black' : 'white',
        transition: 'all 0.5s linear',
      }}
    >
      <Container
        maxWidth='md'
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <div style={{ position: 'absolute', right: 15, paddingTop: 10 }}>
          <span>{lightMode ? 'Dark' : 'Light'} Mode</span>
          <DarkModeSwitch
            checked={lightMode}
            onChange={() => setLightMode(!lightMode)}
          />
        </div>

        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          lightMode={lightMode}
        />
        {meanings && (
          <Definitions
            word={word}
            meanings={meanings}
            category={category}
            lightMode={lightMode}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
