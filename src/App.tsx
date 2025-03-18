import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kentaro Fujimoto ポートフォリオサイト</h1>
        <div>
          <p>こんにちは。私のサイトを覗いてくださりありがとうございます。</p>
        </div>
        <p>経歴</p>
        <ul>
          <li>フリーランスとして企業や個人事業主様のコーポレートサイトを制作</li>
          <li>Web開発企業でシステム開発</li>
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
