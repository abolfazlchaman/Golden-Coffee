import React, { Component } from "react";

export default class CardBorder extends Component {
  render() {
    return (
      <div className="mt-48 flex flex-col min-w-[25rem] min-h-[19rem] justify-around items-center  bg-white divide-x-2 border-t-[#F8B773] rounded-2xl">
        {this.props.children}
      </div>
    );
  }
}
