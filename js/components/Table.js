import React, {Component} from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <table className="user-list table table-striped">
          <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <img src="images/owl.svg" className="user-image img-responsive" alt="" />
              </td>
              <td>Chad Snyder</td>
              <td>28</td>
              <td>
                <span>8</span>
                <span>(629) 653-9041</span>
              </td>
            </tr>

            <tr>
              <td>
                <img src="images/fox.svg" className="user-image img-responsive" alt="" />
              </td>
              <td>Vincent Sparks</td>
              <td>21</td>
              <td>
                <span>8</span>
                <span>(475) 497-4172</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
