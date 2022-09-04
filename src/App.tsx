import React from 'react';
import './App.css';
import GenreList from "./components/GenreList";
import GenreRoutes from "./components/GenreRoutes";
import Portal from "./ui/Portal";


function App() {
  return (
    <div className="App">
        <Portal/>
        <GenreList/>
        <GenreRoutes/>

    </div>
  );
}

export default App;
