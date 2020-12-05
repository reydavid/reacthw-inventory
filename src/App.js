import Inventory from './Components/Inventory';
import Stock from './Components/Stock';
import Parts from './Components/Parts';
import Toys from './Components/Toys';
import './App.css';

function App() {
  return (
    <div className="App">
      <Inventory />
      <Stock />
      <Parts />
      <Toys />
    </div>
  );
}

export default App;
