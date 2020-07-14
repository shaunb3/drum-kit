import React,{Component} from 'react';
import Drumkey from "./Drumkey"
// import soundData from './soundData'
const soundData = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];




class Drumpad extends Component{

  state={soundName:"none"}
  
updateDisplay=(event)=>{
//console.log(event.target.getAttribute("data-name"))
       this.setState({soundName:event.target.getAttribute("data-name")})

}

//add active class keydown and click

  componentDidMount() {
    document.addEventListener("keydown",(e)=>{
      const id = e.key.toUpperCase();   

     const drumKey = document.getElementById(id)
     
     if(drumKey){
       drumKey.currentTime=0
       drumKey.play()
      }
      

})
  }

  render(){

    const keyPad = soundData.map((item)=>{
  return (
    
    <Drumkey  
    keyS={item.keyTrigger}
    name={item.id} 
    handleDisplay={this.updateDisplay}
    key={item.keyTrigger}
    
    src={item.url}/>
    
  )
})


    return (
      <div id="drum-machine">
      <div id="display">{this.state.soundName}</div>
      {keyPad}
    
      </div>
     
    )

  }
}

export default Drumpad