import "./Safe.scss";

import React from "react";

export default class Safe extends React.Component {
  state = {
    number: [],
  };
  addDigitsHandler = (evt) => {
    this.setState(
      { number: [...this.state.number, evt.target.textContent] },
      () => {
        let boxNumber = Number(this.state.number.join(""));
        if (this.state.number.length === 4) {
          setTimeout(() => {
            console.log("boxNumber", boxNumber);
            if (boxNumber === 1234) {
              alert("Access granted!");
            }
            this.setState({ number: [] });
          }, 250);
        }
      }
    );
  };

  render() {
    console.log(this.state.number);
    return (
      <div className="safe-container">
        <div className="digits-box">
          <span className="digit-code">
            {this.state.number.length !== 0 &&
              Number(this.state.number.join(""))}
          </span>
        </div>
        <div className="digits-keys">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => {
            return (
              <button key={index} onClick={this.addDigitsHandler}>
                {num}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
