import HomepageContainer from './containers/HomepageContainer';
import './App.css';
import MediaQuery from 'react-responsive'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="background">
      <MediaQuery minWidth={1200}>
        <div>
          <HomepageContainer/>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1199} >
        <p>In Progress. Please view as desktop!</p>
      </MediaQuery>
    </div>
  );
}

export default App;
