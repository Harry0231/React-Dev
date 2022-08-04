import React from 'react';
import './App.css'

import Body from './Body';

function App() {
  return (
    <div className='App'>
      <HeaderComponent/>
      <Body/>
      <FooterComponent/>
    </div>
  );
}

function HeaderComponent() {
  return (
      <h3>Header Component</h3>
  );
}

function FooterComponent() {
  return (
      <h3>Footer Component</h3>
  );
}

export default App;