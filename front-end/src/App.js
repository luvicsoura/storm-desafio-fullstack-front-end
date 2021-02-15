import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

import './App.css';

import { UsersView } from 'views'
import { StatusBar, ExpandableSection } from 'components'

const StyledApp = styled(Grid)`
  height: 100%;
`

function App() {
  return (
    <StyledApp
      container
      className = "App"
      direction = "column"
    >
      <ExpandableSection>
        <UsersView />
      </ExpandableSection>
      <StatusBar />
    </StyledApp>
  );
}

export default App;
