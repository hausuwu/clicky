import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import character from "./character";


class App extends Component {
  
  state = {
    character,
    clickedImage: [],
    score: 0
  };

  imageClick = event => {
    
    const currentImage = event.target.alt;
    const imageAlreadyClicked = this.state.clickedImage.indexOf(currentImage) > -1;

    if (imageAlreadyClicked) {
      this.setState({
        character: this.state.character.sort(function(a,b){
          return 0.5 - Math.random();
        }),
        clickedImage: [],
        score: 0
      });
      alert("Play Again?")
    } else {

      this.setState(
        {
          character: this.state.character.sort(function(a,b){
            return 0.5 - Math.random();
          }),
          clickedImage: this.state.clickedImage.concat(
            currentImage
          ),
          
          score: this.state.score+1
        }, 
      )
    }       
  };
  
  
  render() {
    console.log(this.state)
    return (
      <div>
        <Header
        score={this.state.score}
        >Clicky</Header>
        <Wrapper>
        {this.state.character.map(character => (
          <FriendCard
            imageClick={this.imageClick}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
