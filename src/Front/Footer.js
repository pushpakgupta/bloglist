import React, { Component } from 'react'
import { Link} from 'react-router-dom'

class Footer extends Component{
	constructor (props){
		super(props)
	}
	render(){
		return(

               <React.Fragment>
                  <footer className="footer">
                      <div className="Footer-top">
                         <div className="container">
                           <div className="footer-top-section row">
                              <div className="col-sm-4">
                                <h4>Title 1</h4>
                                <ul>
                                    <li><Link to="/" className="App-link">Home</Link></li>	                      
			                        <li><Link to="/about-us" className="App-link">About Us</Link></li>
			                        <li><Link to="/faq" className="App-link">FAQ</Link></li>
			                        <li><Link to="/contact-us" className="App-link">Contact Us</Link></li>
                                </ul>
                              </div>
                              <div className="col-sm-4">
                                <h4>Title 2</h4>
                                <ul>
                                    <li><Link to="/" className="App-link">Home</Link></li>	                      
			                        <li><Link to="/about-us" className="App-link">About Us</Link></li>
			                        <li><Link to="/faq" className="App-link">FAQ</Link></li>
			                        <li><Link to="/contact-us" className="App-link">Contact Us</Link></li>
                                </ul>
                              </div>
                              <div className="col-sm-4">
                                <h4>Subscribe Us</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                <form className="subscribe-form"  >
  	                              <div className="form-group">
                                  <input type="hidden" name="userId" value=""  placeholder="Enter userId"  className="form-control"/>
  	                              <input type="email" name="email" value=""   placeholder="Enter your email"  className="form-control"/>
  	                              <p className="message"></p>
                                  <button type="submit" className="btn btn-primary">Submit</button>
  	                              </div>
	                              </form>
                              </div>
                           </div>
                         </div>
                      </div>                      
                  </footer>
              </React.Fragment>

			)

	}
}
export default Footer