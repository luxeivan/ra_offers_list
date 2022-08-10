import './App.css';
import Listing from './components/Listing';
import offersList from './models/OffersList.json';

function App() {
  return (
    <div className="App">
      <Listing items={offersList}/>
    </div>
  );
}

export default App;
