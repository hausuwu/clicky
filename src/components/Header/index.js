import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  render() {
  return (
    <div className="jumbotron">
      <h1 className="title">{this.props.children}</h1>
      <p>
        Click Each Character without repeating to win the game!
      </p>
      <div className="scores">
      Score: {this.props.score}
      </div>
    </div>
  );
  }
}

export default Header;