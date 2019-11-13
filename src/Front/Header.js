import React, { Component } from 'react'
import logo from './logo.png'
import { Link} from 'react-router-dom'
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component{
	constructor (props){
		super(props)
	}
	render(){
		return(
                <React.Fragment>
			    <header className="header">
			    <div className="container">				      	       
	               <div className="header_wrapper row">
	                  <div className="header-logo col-sm-3">
	                      <Link to="/"><img src={logo} alt="logo"/></Link>
	                  </div>
	                  <div className="header-right-section col-sm-9">                      
	                      <div className="social-icon"> 
	                         <a href="https://facebook.com" className="App-link"><FontAwesomeIcon icon={faFacebook} /></a>
	                         <a href="https://twitter.com" className="App-link"><FontAwesomeIcon icon={faTwitter} /></a>
	                         <a href="https://instagram.com" className="App-link"><FontAwesomeIcon icon={faInstagram} /></a>
	                         <a href="https://youtube.com" className="App-link"><FontAwesomeIcon icon={faYoutube} /></a>
	                         <Link to="/register" className="App-link"><FontAwesomeIcon icon={faUser} /></Link>	                        
	                      </div>
	                      <div className="search">
	                         <form className="search-form">
	                            <div className="form-group">
	                            <input type="text" placeholder="Search.." name="q" className="form-control"/>
	                            <button type="submit" className="search-submit"><FontAwesomeIcon icon={faSearch} /></button>
	                            </div>
	                         </form>
	                      </div>
	                  </div>
	               </div>	               
	              </div>
	               <div className="navmenu row">	               
	                   <div className="header-menu col-sm-12">	                 
	                       <ul>
	                          <li><Link to="/" className="App-link">Home</Link></li>	                      
	                          <li><Link to="/about-us" className="App-link">About Us</Link></li>
	                          <li><Link to="/blogs" className="App-link">Blog</Link></li>
	                          <li><Link to="/faq" className="App-link">FAQ</Link></li>
	                          <li><Link to="/contact-us" className="App-link">Contact Us</Link></li>	                         	                          
	                       </ul>	                   
	                   </div>
	               </div>
	              	
	               
	              </header>              
                </React.Fragment>

			)
	}
}
export default Header