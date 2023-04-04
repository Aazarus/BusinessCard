// CSS
import './App.css';

// Components
import AboutMe from './components/AboutMe';
import Introduction from './components/Introduction';
import Proficiencies from './components/Proficiencies';

// Bootstrap
import Card from 'react-bootstrap/Card';
import me from './images/me.jpg';

function App() {
  return (
    <div>
      <Card className="app">
        <Card.Img src={me}>
        </Card.Img>
        <Card.Body>
          <AboutMe />
          <Introduction />
          <Proficiencies />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
