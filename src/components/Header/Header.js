import React from 'react';
import {
  TextField,
  MenuItem,
  createTheme,
  ThemeProvider,
} from '@material-ui/core';
import './Header.css';
import categories from '../../data/category';

export function Header({
  category,
  setCategory,
  word,
  setWord,
  lightMode,
  setLightMode,
}) {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? '#000' : '#fff',
      },
      type: lightMode ? 'light' : 'dark',
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
            label='Search'
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
