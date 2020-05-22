import React from 'react';
import SearchForm from './components/SearchForm';
import Container from '@material-ui/core/Container';


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
