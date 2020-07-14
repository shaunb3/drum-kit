import React,{Component} from 'react';




class Drumkey extends Component{

audioSrc= React.createRef();

playAudio=()=>{
  
  this.audioSrc.current.currentTime =0
  this.audioSrc.current.play()
      
}

handleActions=(event)=>{
  this.playAudio()
  this.props.handleDisplay(event)
}


  render(){
    return (
      
    <div 
    id={"pad-"+this.props.keyS}
    
    onClick={this.handleActions} 
    className="drum-pad"
    data-name={this.props.name} 
    >
    
    {this.props.keyS}
      <audio 
      id={this.props.keyS} 
      className="clip"       
      ref={this.audioSrc}
      src={this.props.src}
      />
      
      
      
    </div>
    )

  }
}

export default Drumkey