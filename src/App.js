import Header from './HeaderComponent'
import Main from './MainComponent'
import Footer from './FooterComponent'
import CV from './CVComponent'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
  <Switch>
  <Route exact path="/">
  <Main />
  </Route>
    <Route path="/en/home">
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
  </Switch>
  <Footer />
    </Router>

  )
}


export default App
