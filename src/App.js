import './App.css';
import Navbar from './components/Navbar';
import PropertyListingPage from './components/PropertyListingPage';
import SearchSection from './components/SearchSection';

function App() {

  return (

    <div className="App">
      <Navbar />
      <SearchSection />
      <PropertyListingPage />

    </div>
  );
}

export default App;
