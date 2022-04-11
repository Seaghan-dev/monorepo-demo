import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "@crademo/ui"
import { sampleHelper } from "@app1/helpers/sample.helpers"

function App() {

  useEffect(() => {
    sampleHelper()
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <Button css={{
        marginTop: "16px",
        marginBottom: "16px"
      }}>Play</Button>
    </div>
  );
}

export default App;
