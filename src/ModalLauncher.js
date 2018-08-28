import React, {Component} from 'react';

class ModalLauncher extends Component{
    render(){   
        return(
            <button onClick={()=> this.handleToggleModal}>
                Ready to Slay 
            </button>
        );   
    }
}

export default ModalLauncher;