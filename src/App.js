import React from 'react';
import Header from './components/Header/index';
import Headline from './components/headline/index';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" description="Click the button to render post"/>
      </section>
    </div>
  );
}

export default App;
