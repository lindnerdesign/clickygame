import React, { Component } from "react";
import BitsCard from "./components/BitsCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import CardWrap from "./components/CardWrap";
import bits from "./bits.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    bits,
    score: 0,
    highscore: 0,
    message:""
  };

  gameOver = () => {
  
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
      });
    }
    this.state.bits.forEach(bits => {
      bits.count = 0;
    });
    this.setState({score: 0, message: "Click image to begin!"});
    return true;
  }

  clickCount = id => {

    this.state.bits.find((o, i) => {

      if (o.id === id) {

        if (bits[i].count === 0){
          bits[i].count = bits[i].count + 1;
          this.setState({score : this.state.score + 1, message: "Correct Guess!"}, function(){
          });
          this.state.bits.sort(() => Math.random() - 0.5)
          return true;

        } else {
          this.gameOver();
        }
      }
    });
  }

  // Map over this.state.bits and render a BitsCard component for each bit object
  render() {
    return (
      <Wrapper>
        <NavBar 
        score={this.state.score}
        highscore={this.state.highscore}
        message={this.state.message}
        />
          <Jumbotron />
            <CardWrap>
            {this.state.bits.map(bits => (
              <BitsCard
                id={bits.id}
                key={bits.id}
                image={bits.image}  
                clickCount={this.clickCount}
                gameOver={this.gameOver}
              />
            ))}
            </CardWrap>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
