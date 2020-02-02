import React, { Component } from 'react';
import {Button, Jumbotron} from 'react-bootstrap'
import Example from './Example'

class App extends Component {
    render() {
        return(<div className="NavBar">
            <Example></Example>
     <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
          </div>);
    }
}
export default App;