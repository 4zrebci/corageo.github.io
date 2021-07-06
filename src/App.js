import Header from './HeaderComponent'
import Main from './MainComponent'
import Footer from './FooterComponent'
import CV from './CVComponent'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
  <Switch>
  <Route exact path="/">
  <Main />
  </Route>
    <Route exact path="/en">
     <Redirect to="/" />
    </Route>
    <Route exact path="/sk">
    <Redirect to="/" />
    </Route>
    <Route exact path="/sk/home">
    <Redirect to="/" />
    </Route>
    <Route exact path="/en/home">
    <Redirect to="/" />
    </Route>
    <Route path="/en/kormos">
        <CV id="2" lang = 'en' />
    </Route>
    <Route path="/en/svagerko">
        <CV id="3" lang = 'en' />
    </Route>
    <Route path="/en/tomcik">
        <CV id="4" lang = 'en' />
    </Route>
    <Route path="/en/manik">
        <CV id="1" lang = 'en' />
    </Route>
    <Route path="/sk/kormos">
        <CV id="2" lang = "sk" />
    </Route>
    <Route path="/sk/tomcik">
        <CV id="4" lang = "sk" />
    </Route>
    <Route path="/sk/manik">
        <CV id="1" lang = "sk" />
    </Route>
    <Route path="/sk/svagerko">
        <CV id="3" lang = "sk" />
    </Route>
    <Route path="*">
      <NoMatch />
    </Route>
  </Switch>
  <Footer />
    </Router>

  )
}
function NoMatch() {
  let location = useLocation();
  return (
    <div className="flex flex-wrap justify-center items-stretch bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-screen" >
      <h1 className = "text-4xl text-center self-center">
        This site does not exist.
        <h3>
        {location.pathname}
      </h3>
      </h1>
    </div>
  );
}
export default App
