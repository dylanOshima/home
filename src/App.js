import React, { Component } from 'react';
import './stylesheets/App.css';
import {FaGithubSquare, FaLinkedinSquare, FaInstagram} from 'react-icons/lib/fa/';

const options = ["about", "currently-reading"];

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: "",
      history: ["Hello, my name is Dylan! Welcome to my site. This site serves as a portal into my thoughts, interests, ideas, and way of thinking. You can use the command line below to navigate :D. Try typing: about"]
    }

    this.handleChange  = this.handleChange.bind(this);
    this.updateHistory = this.updateHistory.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);
  }

  /**FUNCTIONALITY**/

  generateInsult(){
    let insults = ['"If I wanted a joke, I\'d follow you into the John and watch you take a leak" -- Planes, Trains and Automobiles',
      '“I don’t give a tuppeny fuck about your moral conundrum, you meat-headed shit sack.” -- Gangs Of New York',
      '“You’re an emotional f*cking cripple. Your soul is dogsh*t. Every single f*cking thing about you is ugly.” -- Bad Santa',
      '“You are nothing! If you were in my toilet I wouldn\'t bother flushing it. My bathmat means more to me than you.” -- Swimming With Sharks',
      '"You are physically repulsive, intellectually retarded, you\'re morally reprehensible, vulgar, insensitive, selfish, stupid, you have no taste, a lousy sense of humour and you smell. You\'re not even interesting enough to make me sick." -- The Witches Of Eastwick',
      '"I\'ll explain and I\'ll use small words so that you\'ll be sure to understand, you warthog faced buffoon." -- The Princess Bride',
      '"You are a sad strange little man, and you have my pity." -- Toy Story',
      '"Does Barry Manilow know that you raid his wardrobe?" -- The Breakfast Club',
      '“It looks to me like the best part of you ran down the crack of your momma’s ass and ended up as a brown stain on the mattress!” -- Full Metal Jacket',
      '"What you’ve just said is one of the most insanely idiotic things I have ever heard. At no point in your rambling, incoherent response were you even close to anything that could be considered a rational thought. Everyone in this room is now dumber for having listened to it. I award you no points, and may God have mercy on your soul." -- Billy Madison'
    ]

    return insults[Math.floor(Math.random() * insults.length)];
  }

  /**EVENT STUFF**/

  updateHistory(newInput){
    let history = this.state.history;
    history.push(newInput);

    return history;
  }

  handleChange(e){
    this.setState({
      input: e.target.value,
    })
  }

  handleSubmit(e){
    if(e.key === "Enter"){
      let output = "",
          input  = this.state.input,
          temp   = this.updateHistory(input);

      switch(input.toLowerCase()){
        case 'help':
          output = "**HELP** Public options: " + options.join(", ");
          break;

        case 'about':
          output = "**ABOUT** I am a Filipino-American, but born and raised in Manila. I spent a year in Thailand, and three years in UWC ISAK Japan. My first language is english, pero puwede ako mag salita nang tagalog,　それもちょっと日本語をはなすことができます。";
          break;

        case 'currently-reading':
          console.log("REDIRECTING TO /currently-reading");
          break;

        case 'fuck you':
          output = this.generateInsult();
          break;

        default:
          output = "**WHOOPS**. This command does not exist. Type 'help' to get a list of commands."
      }

      temp = this.updateHistory(output);

      this.setState({
        input: "",
        history: temp
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to <b>Dr. O's website.</b></h1>
        <div className="console-history">
          {this.state.history.map((item) => {
            return (
              <div className="history-item" key={this.state.history.indexOf(item)}><b>Dylan's-Mind:~</b> {item}</div>
            )
          })}
        </div>

        <div className="console-input">
          <b>Dylan's-Mind:~ </b><input className="input" onChange={this.handleChange} onKeyPress={this.handleSubmit} type="text" value={this.state.input} name="searchbar" />
        </div>

        <div className="footer">
          <a href="https://github.com/dylanoshima"><FaGithubSquare className="image-icn"/></a> | <a href="https://www.instagram.com/platinumglasses/"><FaInstagram  className="image-icn"/></a> | <a href="https://www.linkedin.com/in/dylan-oshima-113490150/"><FaLinkedinSquare  className="image-icn"/></a><br /><br />
          Created by <b><a className="footer-email" href="mailto:wer2213.online@gmail.com?&amp;subject=Tell Me About The Philippines&amp;body=I know it's great but, I've always been dying to know...">D.R. Oshima</a></b>.
        </div>
      </div>
    );
  }
}

export default App;
