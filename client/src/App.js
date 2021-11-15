import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [twitter, setTwitter] = useState({});
  useEffect(()=>{
    fetch('/api/v1/twitter-info')
    .then((res) => res.json())
    .then((response)=>setTwitter(response));
  }, [])
  return(
    <div className="App">
      <div className="card">
          <img id="twitter-image" src={twitter.image} alt="twitter profile image"/>
          <h1 id="twitter-name">{twitter ? twitter.name : ''}</h1>
          <h2 id="twitter-followers">Followers</h2>
          <h2 id="twitter-followers-number">{twitter ? twitter.followers_number : 0}</h2>
          <a id="twitter-follow-me">Follow @{twitter ? twitter.username : ''}</a>
      </div>
    </div>
  )
}

export default App;