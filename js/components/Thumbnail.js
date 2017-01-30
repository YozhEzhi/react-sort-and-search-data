import React, { Component } from 'react';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="thumbnail text-center">
        <img src="images/cat.svg" alt="" />

        <div className="thumbnail-caption">
          <h3>Viola Hale</h3>

          <table className="user-info table table-responsive">
            <tbody>
              <tr>
                <td>Age:</td>
                <td>43</td>
              </tr>
              <tr>
                <td>Favorite animal:</td>
                <td>cat</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>
                  <span>8</span>
                  <span>(687) 456-4873</span>
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            <strong>Favorite phrase:</strong>
            Vahkeega vi hut fa dabigaj areepjat seci jem couci dovigo ecoozahi ba
            duzboh fiduf mebfi.
          </p>
        </div>
      </div>
    );
  }
}

export default Thumbnail;
