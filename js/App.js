import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import Thumbnail from './components/Thumbnail';
import Toolbar from './components/Toolbar';

const users = require('json!../public/data.json');

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users,
      selectedUser: users[0],
    };

    this.changeSelectedUser = this.changeSelectedUser.bind(this);
  }

  filter(term) {
    console.log(term);
  }

  filterByName() {
    console.log('Filtering by name');
  }

  filterByAge() {
    console.log('Filtering by age');
  }

  changeSelectedUser(selectedUser) {
    this.setState({ selectedUser });
  }

  render() {
    return (
      <div className="container app">
        <SearchBar onFilter={this.filter} />

        <div className="toolbar">
          <Toolbar
            onFilterByName={this.filterByName}
            onFilterByAge={this.filterByAge}
          />
        </div>

        <div className="row">
          <div className="col-sm-4 col-md-3">
            <Thumbnail user={this.state.selectedUser} />
          </div>

          <div className="col-sm-8 col-md-9">
            <UserList
              onUserSelect={this.changeSelectedUser}
              users={this.state.users}
              selectedUser={this.state.selectedUser}
            />
          </div>
        </div>
      </div>
    );
  }
}
