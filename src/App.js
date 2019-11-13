import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,  Route, Switch} from 'react-router-dom'
import Header from './Front/Header'
import Footer from './Front/Footer'
import Index from './Front/Index'
import About from './Front/About'
import Blog from './Front/Blog'
import Single from './Front/Single'
import FAQ from './Front/FAQ'
import Contact from './Front/Contact'
import NotFound from './Front/NotFound'

function App() {
  return (
  
      <Router>
      <Header />
      <div className="content"> 
      <Switch>
      <Route exact path='/' component={Index}></Route>
      <Route exact path='/about-us' component={About}></Route>
      <Route exact path='/faq' component={FAQ}></Route>
      <Route exact path='/contact-us' component={Contact}></Route>
      <Route exact path='/blogs' component={Blog}></Route>
      <Route path='/blogs/:id' component={Single}></Route>
      <Route component={NotFound}></Route>
      </Switch>
      </div>
      <Footer /> 
      </Router>
  );
} 

export default App;
