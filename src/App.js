import HomepageContainer from './containers/HomepageContainer';
import './App.css';
import MediaQuery from 'react-responsive'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="background">
      <MediaQuery minWidth={1060}>
        <div>
          <HomepageContainer/>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1059} >
        <div className='mobile-site'>
          <p>In Progress. Please view as desktop!</p>
        </div>
      </MediaQuery>
    </div>
  );
}

export default App;
