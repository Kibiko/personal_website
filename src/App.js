import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import HomepageContainer from './containers/HomepageContainer';
import './App.css';
import MediaQuery from 'react-responsive'


function App() {

  return (
    <div>
      <MediaQuery minWidth={1200}>
        <HomepageContainer/>
      </MediaQuery>
      <MediaQuery maxWidth={1200} >
        <p>Not completed</p>
      </MediaQuery>
    </div>
  );
}

export default App;
