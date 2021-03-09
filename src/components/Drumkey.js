import React,{Component} from 'react';




class Drumkey extends Component{

audioSrc= React.createRef();



  componentDidMount() {
    document.addEventListener("keydown",(e)=>{
      const id = e.key.toUpperCase();   

     const drumKey = document.getElementById(id)
     
     if(drumKey){
       drumKey.currentTime=0
       drumKey.play()
       drumKey.parentNode.classList.add('active');
       
      }

    });

      this.audioSrc.current.addEventListener('ended', (e) => { 
      const parent = e.target.parentNode;
      parent.classList.remove('active');
      
    });

  }



playAudio=()=>{
  
  this.audioSrc.current.currentTime =0
  this.audioSrc.current.play()

    const parent = this.audioSrc.current.parentNode;
    parent.classList.add('active');
  
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