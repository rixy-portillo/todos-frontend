import { Box } from '@mui/material';
import React from 'react';
import './App.css';
import TodosDisplay from './components/TodosDisplay';

function App() {
  return (
    <Box sx={{ minHeight: "100vh", padding: 8 }}>
      <TodosDisplay />
    </Box>
  );
}

export default App;
