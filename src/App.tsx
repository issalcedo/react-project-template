import { Grid } from '@material-ui/core'
import React from 'react'

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
            <p>Hello Wordl!</p>
          </Grid>
        </Grid>
      </main>
    </>
  )
}

export default App
