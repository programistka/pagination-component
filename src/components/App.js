import React, { Component } from "react";
import Pagination from "./pagination/Pagination";

class App extends Component {
  state = {
    itemsCount: 81,
    itemsPerPage: 10,
    currentPage: 1,
  };

  paginationClick = (clickedElement) => {
    this.setState({ currentPage: clickedElement });
  };

  render() {
    const { itemsCount, itemsPerPage, currentPage } = this.state;
    return (
      <div className="App">
        <Pagination
          itemsCount={itemsCount}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onChange={this.paginationClick}
        />
      </div>
    );
  }
}

export default App;
