import React, { Component } from 'react'

class About extends Component{
	constructor (props){
		super(props)
	}
	render(){
		return(
               <React.Fragment> 
                <div className="container"> 
                <div className="row">              
                <div className="page-content">
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis libero nec ante malesuada convallis. Maecenas a dolor quis neque laoreet imperdiet. Vestibulum justo nisl, aliquet quis auctor a, dictum et nisi. Vivamus venenatis elit nunc, in pharetra erat sagittis a. Phasellus dapibus nunc massa, ac elementum enim vulputate vel. Etiam diam purus, porttitor eu bibendum vitae, blandit vel lorem. Pellentesque id lacus ipsum.</p>
                   <p>Aenean velit dolor, luctus faucibus erat nec, interdum feugiat arcu. Nulla convallis ut justo non imperdiet. Suspendisse sed neque a felis fermentum molestie convallis et mauris. Praesent efficitur lacinia ipsum, vitae efficitur sem. Curabitur et dolor eget ex suscipit egestas. Donec pulvinar dictum augue sed faucibus. Proin dapibus nunc in malesuada bibendum. Curabitur sodales ac dui vel commodo. Morbi a lobortis enim, nec bibendum metus. Cras viverra rutrum metus sodales lacinia. Mauris non elit est. Integer nec lacus justo. Nulla et ante sed ligula finibus sagittis ac eget erat.</p>
                </div>
                </div>
               </div>
              </React.Fragment>
			)
	}
}
export default About