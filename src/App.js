import React from 'react'
import { hot } from 'react-hot-loader'
import CustomComponent from './CustomComponent'

class App extends React.Component {
  render() {
    const node = (
      <CustomComponent />
    );

    return (
      <h1>
        Hello.<br />
        { node.type === CustomComponent ? 'Correct!' : 'Wrong!' }
      </h1>
    )
  }
}

export default hot(module)(App)
