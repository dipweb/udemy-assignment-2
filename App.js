import React, { Component } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    inputText: 0,
    charArray: []
  };

  changeHandler = event => {
    let charArray = event.target.value.split("");
    console.log(charArray);
    this.setState({ inputText: event.target.value, charArray: charArray });
  };

  deleteHandler = charIndex => {
    let characterArray = [...this.state.charArray];
    characterArray.splice(charIndex, 1);
    this.setState({ charArray: characterArray });
  };

  render() {
    return (
      <div>
        <h1>Assignment 2</h1>
        <hr />
        <div>
          Enter Text:
          <input type="text" onChange={this.changeHandler} />
          <p>{this.state.inputText.length}</p>
          <ValidationComponent textLength={this.state.inputText.length} />
          {this.state.charArray.map((char, index) => {
            return (
              <CharComponent
                key={index}
                char={char}
                deleteChar={() => this.deleteHandler(index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default App;
