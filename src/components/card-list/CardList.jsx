import React, { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/Card";

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card monster={monster} key={monster.id} />
        ))}
      </div>
    );
  }
}
