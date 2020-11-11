import PropTypes from 'prop-types';
import { Counter } from './Counter';
import { Accordion } from './Accordion';
import { Input } from './Input';
import logo from './logo.svg';
import './App.css';

function App() {
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
        <Input />
        <Counter />
        <Accordion />
        {/* name is a prop */}
        <HelloWorld name="Casey" greeting="Yo"/>
        <HelloWorld name="World"/>
      </header>
    </div>
  );
}

// A react component
// Can destructure props with curly brackets around name and greeting
function HelloWorld({ name, greeting = "Hello" }) {
  return  (
  <h1>{greeting} {name}!</h1> 
  )
}

HelloWorld.propTypes = {
  name: PropTypes.string,
  greeting: PropTypes.string,
}

export default App;
