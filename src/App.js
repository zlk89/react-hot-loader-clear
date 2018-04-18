import React from 'react'
import { hot } from 'react-hot-loader'
import FormControl from 'react-bootstrap/lib/FormControl'

class App extends React.Component {
  render() {
    return (
      <h1>
        Hello, 21.<br />
        <input type='number'/>
        <FormControl inputRef={console.log} defaultValue="Write me" />
      </h1>
    )
  }
}

export default hot(module)(App)
