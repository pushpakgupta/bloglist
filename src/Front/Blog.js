import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter as Router,  Route, Switch, Link} from 'react-router-dom'
import Single from './Single'

class Blog extends Component{
	constructor (props){
		super(props)

    this.state = {
       lists:[]
    }
	}

componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {  
        this.setState({ lists : res.data}) 
      })
  .catch( error => {
    console.log(error)
  }) 
}



	render(){

    const { lists } = this.state
    const { match } = this.props
		return(
              
               <React.Fragment> 
               <Switch>
                <Route path="/blogs/:id" component={Single} />
                <Route path={match.path}> 
                    <div className="container"> 
                    <h1> Blogs </h1>             
                    <div className="blog-items row">
                      { 
                         
                         lists.length ? 
                         
                         lists.map(post => (
                                      <div key={post.id} className="item col-sm-4">
                                        <h3><Link to={`/blogs/${post.id}`} className="App-link">{post.title}</Link></h3>
                                        <div className="post-content">{post.body}</div>
                                        <div className="read-more"><Link to={`/blogs/${post.id}`} className="btn btn-primary">Read More</Link></div>
                                      </div>                                            
                        ))
                        :null

                      }                   
                      
                    </div>               
                   </div>
                </Route>
               </Switch>
              </React.Fragment>

			)		
	}
}
export default Blog