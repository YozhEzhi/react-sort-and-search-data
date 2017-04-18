import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import SearchBarContainer from '../containers/SearchBarContainer';
import ThumbnailContainer from '../containers/ThumbnailContainer';
import ToolbarContainer from '../containers/ToolbarContainer';
import UserListContainer from '../containers/UserListContainer';

function App() {
  return (
    <main className="container app">
      <StickyContainer>
        <SearchBarContainer />

        <div className="toolbar">
          <ToolbarContainer />
        </div>

        <div className="row">
          <div className="col-sm-4">
            <Sticky>
              <ThumbnailContainer />
            </Sticky>
          </div>

          <div className="col-sm-8">
            <UserListContainer />
          </div>
        </div>
      </StickyContainer>
    </main>
  );
}

export default App;
