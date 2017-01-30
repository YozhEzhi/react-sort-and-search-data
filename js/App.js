import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import SortByNameButton from './components/SortByNameButton';
import SortByAgeButton from './components/SortByAgeButton';
import Thumbnail from './components/Thumbnail';
import Table from './components/Table';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.updateBtn = this.updateBtn.bind(this);
  }

  filter(term) {
    console.log(term);
  }

  updateBtn() {
    console.log('Clicked');
  }

  render() {
    return (
      <div className="container app">
        <SearchBar onFilter={this.filter} />

        <div className="toolbar">
          <SortByNameButton />
          <SortByAgeButton update={this.updateBtn} />
        </div>

        <div className="row">
          <div className="col-sm-4 col-md-3">
            <Thumbnail />
          </div>

          <div className="col-sm-8 col-md-9">
            <Table />
          </div>
        </div>
      </div>
    );
  }
}
