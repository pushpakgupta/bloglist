import React, { Component } from 'react'
import axios from 'axios'
class Single extends Component{
	constructor (props){
		super(props)
		this.state = {
			post:[]
		}
	}
	componentDidMount() {	
	  axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id)
	  .then(res => {  
	        this.setState({ post : res.data})	      
	      })
	  .catch( error => {
	    console.log(error)
	  }) 
	}

	render(){
		const { post } = this.state
        const { match } = this.props
		return(
               <React.Fragment> 
                <div className="container"> 
                <h1> Blog {post.id}</h1>             
                <div className="blog-items row">                  
                    <div key={post.id} className="item col-sm-12">
                        <h3>{post.title}</h3>
                        <div className="post-content">{post.body}</div>                        
                    </div>                 
                </div>               
               </div>
              </React.Fragment>

			)

	}
}
export default Single