import React, { Component } from "react";

class ButtonOutcome extends Component {
  state = {
    isOpen: false,
    ListOfOptions: ["Won", "Lost", "Void"],
    chooseSelection: "Won",
    userChange: false
  };

  rendeDropDown = items => {
    return (
      <ul>
        {items.map((item, key) => {
          return (
            <li
              className={item.toLowerCase()}
              key={key}
              onClick={() => this.updateDropDown(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    );
  };

  updateDropDown = item => {
    this.setState({
      chooseSelection: item,
      isOpen: false,
      userChange: true
    });
  };

  toggleDropDown = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleClickOutside = () => {
    this.setState({
      isOpen: false
    });
  };

  componentWillMount = () => {
    document.addEventListener("click", this.handleClick, false);
  };

  componentWillUnmount = () => {
    document.removeEventListener("click", this.handleClick, false);
  };

  handleClick = e => {
    if (this.node.contains(e.target)) return;
    if (this.state.isOpen) this.handleClickOutside();
  };

  checkIsOpen = () => "on body";

  render() {
    console.log(this.state.isOpen);
    let items = this.state.ListOfOptions;
    if (this.state.userChange) {
      const chooseSelection = this.state.chooseSelection;
      switch (chooseSelection) {
        case "Won":
          items = ["Won", "Lost", "Void"];
          break;
        case "Lost":
          items = ["Lost", "Won", "Void"];
          break;
        case "Void":
          items = ["Void", "Won", "Lost"];
          break;

        default:
      }
    }
    const pick = this.state.chooseSelection;
    const isOpen = this.state.isOpen;
    return (
      <div>
        <div
          ref={node => (this.node = node)}
          className={
            isOpen ? this.checkIsOpen() : `off body ${pick.toLowerCase()}`
          }
          onClick={this.toggleDropDown}
        >
          <span>{pick}</span>
          {this.rendeDropDown(items)}
        </div>
      </div>
    );
  }
}

class DropDownList extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <ButtonOutcome />
        <ButtonOutcome />
        <ButtonOutcome />
      </div>
    );
  }
}

export default DropDownList;
