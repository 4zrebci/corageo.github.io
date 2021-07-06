import Header from './HeaderComponent'
import Main from './MainComponent'
import Footer from './FooterComponent'

//<Header />
//      <Main />                            
//      <Footer />
function App() {
  return (
    <Router>
  <Switch>
    <Route path="/en/home">
       <div>
        <Header />
        <Main />
        <Footer />
       </div>
    </Route>
    <Route path="/en/kormoš">
        <Header />
        <CV id="2" />
        <Footer />
    </Route>
    <Route path="/en/švagerko">
        <Header />
        <CV id="3" />
        <Footer />
    </Route>
    <Route path="/en/tomčík">
        <Header />
        <CV id="4" />
        <Footer />
    </Route>
    <Route path="/en/manik">
        <Header />
        <CV id="1" />
        <Footer />
    </Route>
  </Switch>
    </Router>

  )
}

function home(){
  return(
    <div>
  <Header />
  <Main />
  <Footer />
  </div>
  )
}

export default App
