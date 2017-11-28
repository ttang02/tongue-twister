import React, { Component } from 'react';

export default class SpeechToText extends Component {
  static defaultProps = {
    lang : 'fr-FR'
  }
  constructor(props){
    super(props);

    this.state = {output : '', activated : false};
    this.startRecognition = this.startRecognition.bind(this);
    this.stopRecognition = this.stopRecognition.bind(this);

    const SpeechRecognition = window.SpeechRecognition
    || window.webkitSpeechRecognition
    || window.mozSpeechRecognition
    || window.msSpeechRecognition
    || window.oSpeechRecognition;

    if (SpeechRecognition != null) {
      this.recognition = this.initRecognition(SpeechRecognition);
    } 
    else {
      console.warn('The current browser does not support the SpeechRecognition API.');
    }
  }
  
  initRecognition = (SpeechRecognition) => {
    let recognition = new SpeechRecognition();
    recognition.continous = true;
    recognition.interimResults = false;
    recognition.lang = this.props.lang;
    
    return recognition;
  }

  startRecognition(){
    this.recognition.start();

    this.recognition.onresult = (e) =>{
     let last = e.results.length -1;
     let text = e.results[last][0].transcript;
     this.props.updateText(text);
    }
  }
  stopRecognition(){
    this.recognition.stop();
  }

  render(){
    return (
      <div>
        <button onClick={this.startRecognition}>Start</button>
        <button onClick={this.stopRecognition}>Stop</button>
      </div>
    )
  }
}

