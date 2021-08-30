import React from 'react';
import {
  TextField,
  MenuItem,
  createTheme,
  ThemeProvider,
} from '@material-ui/core';
import './Header.css';
import categories from '../../data/category';

export function Header() {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  });

  return (
    <div className='header'>
      <span className='title'>Dictionary</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField label='Enter word' />
          <TextField select label='Language' helperText='Select a Language'>
            {categories.map((category) => {
              return <MenuItem id={category.label}>{category.value}</MenuItem>;
            })}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
}
