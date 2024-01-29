import HomepageContainer from './containers/HomepageContainer';
import './App.css';
import MediaQuery from 'react-responsive'
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileContainer from './containers/MobileContainer';


function App() {

  return (
    <div className="background">
      <MediaQuery minWidth={1024}>
        <screen>
          <HomepageContainer/>
        </screen>
      </MediaQuery>
      <MediaQuery maxWidth={1023} >
        <screen className='mobile-site'>
          <MobileContainer/>
        </screen>
      </MediaQuery>
    </div>
  );
}

export default App;
