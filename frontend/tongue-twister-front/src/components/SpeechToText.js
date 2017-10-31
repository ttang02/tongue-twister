import React, { Component } from 'react';

class SpeechToText extends Component {
  constructor(props) {
    super(props);

    const SpeechRecognition = window.SpeechRecognition
      || window.webkitSpeechRecognition
      || window.mozSpeechRecognition
      || window.msSpeechRecognition
      || window.oSpeechRecognition

    if (SpeechRecognition != null) {
      this.recognition = this.createRecognition(SpeechRecognition)
    } else {
      console.warn('The current browser does not support the SpeechRecognition API.')
    }
  } 
}