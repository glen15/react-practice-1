import React from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Nav from './Nav';
import Gallery from './Gallery';
import About from './About';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <section className="nav">
          <Nav />
        </section>
        <div>
          <Switch>
            <Route exact path="/">
              <Gallery />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
        <section className="footer">
          <Footer />
        </section>
      </BrowserRouter>
    </div>
  )

}

export default App;
