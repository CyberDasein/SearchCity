import React from 'react';
import SearchForm from './components/SearchForm';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <Container maxWidth="lg">
      <div className="App">
        <SearchForm/>
      </div>
    </Container>
  );
}

export default App;
