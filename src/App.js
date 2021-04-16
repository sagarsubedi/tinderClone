import './App.css';
import Header from "./Header/Header"; 
import TinderCards from "./TinderCards/TinderCards";
import SwipeButtons from "./SwipeButtons/SwipeButtons";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Tinder Cards */}
      <TinderCards />

      {/* SwipeButtons */}
      <SwipeButtons />

    </div>
  );
}

export default App;
