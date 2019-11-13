
import React, { Component } from 'react'

class Contact extends Component{
  constructor (props){
    super(props)
  }
  render(){
    return(
               <React.Fragment> 
                <div className="container"> 
                <div className="row"> 
                  <h1> Contact Us</h1>
                  <div className="page-content">            
                  <form className="form-horizontal" >
                    <div className="form-group">  
                      <label className="control-label col-sm-2" for="title">Title:</label>                              
                      <div className="col-sm-10">
                        <input name="title" value="title" type="text" placeholder="Your Title" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-sm-2" for="email">Email:</label>
                      <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                      </div>
                    </div>
                    <div className="form-group"> 
                      <label className="control-label col-sm-2" for="comments">Comment:</label>                               
                      <div className="col-sm-10">
                         <textarea className="form-control" name="body" value="body" placeholder="Please enter your message here..." rows="5"></textarea>
                      </div>
                    </div>
                    <div className="form-group">        
                      <div className="col-sm-offset-2 col-sm-10">
                        <div className="checkbox">
                          <label><input type="checkbox" name="remember"/> Remember me</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">        
                      <div className="col-sm-offset-2 col-sm-10">
                        <button type="Submit" className="btn btn-primary btn-lg">Submit</button>
                      </div>
                    </div>
                  </form>
                  </div>
                </div>
               </div>
              </React.Fragment>
      )
  }
}
export default Contact
