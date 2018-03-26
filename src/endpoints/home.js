import React, { Component } from 'react';
import '../stylesheets/Home.css';
import {FaGithubSquare, FaLinkedinSquare, FaInstagram} from 'react-icons/lib/fa/';

import Typed from 'typed.js';
import Console from './components/Console';

const options = ["about", "currently-reading"];

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: "",
      output: [
           "Hello,^500\nmy name is <i>Dylan</i>!^200 Welcome to my <b>site</b>."
           ,"This site serves as a portal into my\nthoughts,^500\ninterests,^500\nideas,^500\nand way of thinking."
           ,"You can use the command line below to navigate :D."
           ,"Try typing: <b>about</b>"]
    }

    this.handleChange  = this.handleChange.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);
    this.updateText    = this.updateText.bind(this);
  }

  /**FUNCTIONALITY**/

  updateText(elem, strings, typedObj){
    this.typed ? this.typed.destroy() : null;

    console.log("updateText()")

    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings,
      typeSpeed: 50,
      backSpeed: 0
    };

    this.typed = new Typed(elem, options);
  }

  // Handles changes to textinput in console
  handleChange(e){
    this.setState({
      input: e.target.value,
    })
  }

  handleSubmit(e){
    if(e.key === "Enter"){
      let output = [""],
          input  = this.state.input;

      switch(input.toLowerCase()){
        case 'help':
          output = ["<b>HELP:</b>\nPublic options: " + options.join(", ")];
          break;

        case 'about':
          output = ["<b>ABOUT:</b>\nI am a <i>Filipino-American</i>,\nbut born and raised in Manila."
                    ,"I spent a year in <i>Thailand<i>,\nand three years in <i>UWC ISAK Japan.</i>"
                    ,"I currently study <b>CS & AI</b> in\n<i>The University of Edinburgh</i>"
                    ,"My first language is english,\npero puwede ako mag salita nang tagalog,\nそれもちょっと日本語をはなすことができます。"];
          break;

        case 'currently-reading':
          console.log("REDIRECTING TO /currently-reading");
          break;

        case 'fuck you':
          output = this.generateInsult();
          break;

        default:
          output = ["<b>WHOOPS:</b>\nThis command does not exist.\nType <i>'help'</i> to get a list of commands."]
      }

      this.updateText("#console", output);

      this.setState({
        input: "",
        output
      });
    }
  }

  /**EVENT STUFF**/

  generateInsult(){
    let insults = ['"If I wanted a joke, \nI\'d follow you into the John and watch you take a leak"\n-- Planes, Trains and Automobiles',
      '“I don’t give a tuppeny fuck about your moral conundrum, \nyou meat-headed shit sack.”^500\n-- Gangs Of New York',
      '“You’re an emotional f*cking cripple. \nYour soul is dogsh*t. \nEvery single f*cking thing about you is ugly.”^500\n-- Bad Santa',
      '“You are nothing! \nIf you were in my toilet I wouldn\'t bother flushing it. My bathmat means more to me than you.”^500\n-- Swimming With Sharks',
      '"You are physically repulsive, intellectually retarded, \nyou\'re morally reprehensible, vulgar, insensitive, selfish, stupid, you have no taste, a lousy sense of humour and you smell. You\'re not even interesting enough to make me sick."^500\n-- The Witches Of Eastwick',
      '"I\'ll explain and \nI\'ll use small words so that you\'ll be sure to understand, \nyou warthog faced buffoon."^500\n-- The Princess Bride',
      '"You are a sad strange little man, \nand you have my pity."^500\n-- Toy Story',
      '"Does Barry Manilow know that you raid his wardrobe?"^500\n-- The Breakfast Club',
      '“It looks to me like the best part of you \nran down the crack of your momma’s ass \nand ended up as a brown stain on the mattress!”^500\n-- Full Metal Jacket',
      '"What you’ve just said is one of the most insanely idiotic things I have ever heard. At no point in your rambling, incoherent response were you even close to anything that could be considered a rational thought. Everyone in this room is now dumber for having listened to it. I award you no points, and may God have mercy on your soul."^500\n-- Billy Madison'
    ]

    return [insults[Math.floor(Math.random() * insults.length)]];
  }

  render() {
    console.log("home > render()")

    return (
      <div className="Home">
        <div className="body">
          <span className="title">Welcome to <b>Dr. O's website.</b></span>
          {/* <div className="console-history">
            {this.state.history.map((item) => {
              return (
                <div className="history-item" key={this.state.history.indexOf(item)}><b>Dylan's-Mind:~</b> {item}</div>
              )
            })}
          </div> */}

          <div className="console-input">

            <Console strings={this.state.output} updateText={this.updateText} typed={this.typed}></Console>

            <div className="input">
              <b>Dylan's-Mind:~ </b>
              <input className="input-elem" onChange={this.handleChange} onKeyPress={this.handleSubmit} type="text" value={this.state.input} placeholder="Input a command" name="searchbar" />
            </div>

          </div>
        </div>

        <div className="footer">
          <a href="https://github.com/dylanoshima"><FaGithubSquare className="image-icn"/></a> | <a href="https://www.instagram.com/platinumglasses/"><FaInstagram  className="image-icn"/></a> | <a href="https://www.linkedin.com/in/dylan-oshima-113490150/"><FaLinkedinSquare  className="image-icn"/></a><br /><br />
          Created by <b><a className="footer-email" href="mailto:wer2213.online@gmail.com?&amp;subject=Tell Me About The Philippines&amp;body=I know it's great but, I've always been dying to know...">D.R. Oshima</a></b>・(not a doctor)<br />
          <span className="footer-subext">Created with: <i>React</i>, <i>Typed.js</i>, <i>React-Router</i></span>
        </div>
      </div>
    );
  }
}

export default Home;
