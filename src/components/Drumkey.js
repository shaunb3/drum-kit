import React,{Component} from 'react';




class Drumkey extends Component{

  render(){
    return (
    <div 
    
    onClick={this.props.handlePress} className="drum-pad" 
    data-name={this.props.name}>
    
    {this.props.keyS}
      <audio 
      id={this.props.keyS} 
      className="clip"
      ></audio>
    </div>
    )

  }
}

export default Drumkey