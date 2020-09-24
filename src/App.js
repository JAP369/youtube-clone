import React from 'react';
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Siderbar from './Siderbar';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='app__page'>
        <Siderbar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
