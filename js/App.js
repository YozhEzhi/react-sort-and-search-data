import React, { Component } from 'react';

import SearchBar from './components/SearchBar';
import Thumbnail from './components/Thumbnail';
import Toolbar from './components/Toolbar';
import UserList from './components/UserList';

const users = require('json!../public/data.json');

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortedByName: null,
      sortedByAge: null,
      users,
      selectedUser: users[0],
    };

    this.changeSelectedUser = this.changeSelectedUser.bind(this);
    this.filterByAge = this.filterByAge.bind(this);
    this.filterByName = this.filterByName.bind(this);
  }

  filter(term) {
    console.log(term);
  }

  sortUsers(users, param, reversed = false) {
    users.sort((a, b) => (a[param] > b[param]) ? 1 : -1);
    return reversed ? users.reverse() : users;
  }

  filterByName() {
    if (this.state.sortedByName === 'desc') {
      this.setState({
        sortedByName: 'asc',
        users: this.sortUsers(this.state.users, 'name', true),
        selectedUser: users[0],
      });
    } else {
      this.setState({
        sortedByName: 'desc',
        users: this.sortUsers(this.state.users, 'name'),
        selectedUser: users[0],
      });
    }
  }

  filterByAge() {
    if (this.state.sortedByAge === 'desc') {
      this.setState({
        sortedByAge: 'asc',
        users: this.sortUsers(this.state.users, 'age', true),
        selectedUser: users[0],
      });
    } else {
      this.setState({
        sortedByAge: 'desc',
        users: this.sortUsers(this.state.users, 'age'),
        selectedUser: users[0],
      });
    }
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
            icoClass={this.state.sortedByName}
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
