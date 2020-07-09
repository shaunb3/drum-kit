import React,{Component} from 'react';




class Drumkey extends Component{

  render(){
    return (
    <button id={this.props.keyS} onClick={this.props.handlePress}>{this.props.keyS}</button>
    )

  }
}

export default Drumkey