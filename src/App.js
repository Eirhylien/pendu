import logo from './logo.svg';
import './App.css';
import Keyboard from './component/Keyboard.js';
import Mysteryword from './component/Mysteryword.js';

// Composant
function App() {
  return (
    <div className="App">
      <Mysteryword word="TEST" usedLetters={['T']}></Mysteryword>
     <Keyboard></Keyboard>
    </div>
  );
}

export default App;
