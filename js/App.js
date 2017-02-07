import React, { Component } from 'react';

import SearchBar from './components/SearchBar';
import Thumbnail from './components/Thumbnail';
import Toolbar from './components/Toolbar';
import UserList from './components/UserList';

const usersSrc = require('json!../public/data.json');

export default class App extends Component {
  constructor(props) {
    super(props);

    this.users = Array.from(usersSrc);

    this.state = {
      sortedByName: null,
      sortedByAge: null,
      users: this.users,
      selectedUser: this.users[0],
    };

    this.changeSelectedUser = this.changeSelectedUser.bind(this);
    this.filter = this.filter.bind(this);
    this.sortByAge = this.sortByAge.bind(this);
    this.sortByName = this.sortByName.bind(this);
  }

  filter(term) {
    const filteredUsers = Array.from(this.users).filter(item => item.name.includes(term));

    this.setState({
      sortedByName: 'asc',
      users: filteredUsers,
      selectedUser: this.users[0],
    });
  }

  sortUsers(usersArr, param, reversed) {
    const sortedUsers = Array.from(usersArr).sort((a, b) => (a[param] > b[param]) ? 1 : -1);
    return reversed ? sortedUsers.reverse() : sortedUsers;
  }

  sortByName() {
    const reversed = (this.state.sortedByName === 'asc');
    const sorting = reversed ? 'desc' : 'asc';

    this.setState({
      sortedByName: sorting,
      users: this.sortUsers(this.users, 'name', reversed),
      selectedUser: this.users[0],
    });
  }

  sortByAge() {
    const reversed = (this.state.sortedByAge === 'asc');
    const sorting = reversed ? 'desc' : 'asc';

    this.setState({
      sortedByAge: sorting,
      users: this.sortUsers(this.users, 'age', reversed),
      selectedUser: this.users[0],
    });
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
            onSortByName={this.sortByName}
            onSortByAge={this.sortByAge}
          />
        </div>

        <div className="row">
          <div className="col-sm-4">
            <Thumbnail user={this.state.selectedUser} />
          </div>

          <div className="col-sm-8">
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
