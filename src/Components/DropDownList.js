import React, { Component } from "react";

class DropDownList extends Component {
  state = {
    isOpen: false,
    ListOfOptions: ["Winner", "Lost", "Void"],
    chooseSelection: "Winner"
  };

  rendeDropDown = items => {
    return (
      <ul>
        {items.map((item, key) => {
          return (
            <li key={key} onClick={() => this.updateDropDown(item)}>
              {item}
            </li>
          );
        })}
      </ul>
    );
  };

  updateDropDown = item => {
    this.setState({
      chooseSelection: item
    });
  };

  toggleDropDown = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  checkIsOpen = () => "on body";

  render() {
    console.log(this.state.isOpen);
    const items = this.state.ListOfOptions;
    const pick = this.state.chooseSelection;
    const isOpen = this.state.isOpen;
    return (
      <div className={isOpen ? this.checkIsOpen() : "off body"}>
        <span onClick={this.toggleDropDown}>{pick}</span>
        {this.rendeDropDown(items)}
      </div>
    );
  }
}

export default DropDownList;
