import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Grid } from '@material-ui/core'

const App = () => {
  return (
    <>
      <main role='main'>
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justify='center'
          style={{ minHeight: '100vh', padding: '8px' }}
        >
          <Grid item xs={12}>
            <Router>
              <Switch>
                <Route exact path='/'>
                  <p>Hello Wordl!!</p>
                </Route>
              </Switch>
            </Router>
          </Grid>
        </Grid>
      </main>
    </>
  )
}

export default App
