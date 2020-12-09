import Inventory from './Components/Inventory';
import Stock from './Components/Stock';
import Parts from './Components/Parts';
import Toys from './Components/Toys';
import UState from './Components/UState.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Inventory />
      <Stock />
      <Parts />
      <Toys />
      <UState />
      <h5>* reset will return to initial values count: [0,1,2,3] increment:[1,2,3,4]</h5>
    </div>
  );
}

export default App;
