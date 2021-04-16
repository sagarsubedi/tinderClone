import './App.css';
import Header from "./Header/Header"; 
import TinderCard from "./TinderCards/TinderCards";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Tinder Cards */}
      <TinderCard />


      {/* SwipeButtons */}
    </div>
  );
}

export default App;
