import Logo from './Logo';
import Toolbar from './Components/Toolbar';
import './App.css';
import { ColorProvider } from './Context/ColorContext';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ColorProvider>
          <Logo/>
          <Toolbar/>
        </ColorProvider>
      </header>
    </div>
  );
}

export default App;
