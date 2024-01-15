import HomepageContainer from './containers/HomepageContainer';
import './App.css';
import MediaQuery from 'react-responsive'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      <MediaQuery minWidth={1200}>
        <HomepageContainer/>
      </MediaQuery>
      <MediaQuery maxWidth={1199} >
        <p>Not completed</p>
      </MediaQuery>
    </div>
  );
}

export default App;
