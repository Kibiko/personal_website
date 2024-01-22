import HomepageContainer from './containers/HomepageContainer';
import './App.css';
import MediaQuery from 'react-responsive'
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileContainer from './containers/MobileContainer';


function App() {

  return (
    <div className="background">
      <MediaQuery minWidth={1200}>
        <div>
          <HomepageContainer/>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1199} >
        <div className='mobile-site'>
          <MobileContainer/>
        </div>
      </MediaQuery>
    </div>
  );
}

export default App;
