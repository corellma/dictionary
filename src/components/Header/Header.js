import React from 'react';
import {
  TextField,
  MenuItem,
  createTheme,
  ThemeProvider,
} from '@material-ui/core';
import './Header.css';
import categories from '../../data/category';

export function Header({ category, setCategory, word, setWord }) {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord('');
  };

  return (
    <div className='header'>
      <span className='title'>Dictionary</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField
            className='search'
            label='Enter a word'
            value={word}
            onChange={(e) => {
              setWord(e.target.value);
            }}
          />
          <TextField
            select
            className='select'
            label='Language'
            value={category}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          >
            {categories.map((category) => {
              return (
                <MenuItem key={category.label} value={category.label}>
                  {category.value}
                </MenuItem>
              );
            })}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
}
