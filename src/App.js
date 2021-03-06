import React, { Component } from "react";
import Table from "./react-tutorial-master/Table";
import Form from "./react-tutorial-master/Form";

class App extends Component {
  state = {
    characters: [],
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((charater, i) => {
        return i !== index;
      }),
    });
  };
  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
