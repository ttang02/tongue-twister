import React, { Component } from 'react';
import axios from 'axios'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            lang : 'fr',
            tongueTwister : [],
            selectedTongueTwister : '',
            text : ''
        }
    }
    initTongueTwister(lang){
        let url = BASE_API_URL;

        axios.get(url, obj)
            .then((res) =>{
                this.setState({
                    tongueTwister : res        
                });      
            })    
    }

    render(){
        return (
            <div className="App container">
                <h1 className="text-center">ReactJS Tongue Twister</h1>
                <hr />
            </div>    
        );
    }
}