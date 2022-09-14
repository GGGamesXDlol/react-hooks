import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import React from 'react';

function App() {

  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className="App">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Characters 
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
