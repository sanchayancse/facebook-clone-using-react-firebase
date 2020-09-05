import React from 'react';

import './App.css';
import Header from './Header'
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
   
      

      {/* Header */ }
        <Header/>

      {/* App Body */ }
      <div className="app_body">
        {/* Side Bar */ }
        <Sidebar/>
        <Feed />


      </div>

      

      {/* Feed */ }

    </div>
  );
}

export default App;
