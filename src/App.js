// import logo from './logo.svg';
import './App.css';
import Props from './NewComponents/Props';
import Usestate from './NewComponents/Usestate';
import NullishCoalescing from './NewComponents/NullishCoalescing';

function App() {
  return (
    <div className="App">
      <Usestate/>
      <Props/>
      <NullishCoalescing/>
    </div>
  );
}

export default App;
