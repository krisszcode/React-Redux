import React, {Component} from 'react'
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      {name: 'Ryu', age: 30, belt: 'black', id: 1},
      {name: 'Yoshua', age: 20, belt: 'blue', id: 2},
      {name: 'Mary', age: 25, belt: 'pink', id: 3}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random()
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return(
    <div className="App">
      <h1>My first React app!</h1>
      <p>Welcome :)</p>
      <Ninjas ninjas = {this.state.ninjas}/>
      <AddNinja addNinja = {this.addNinja}/>
    </div>
    );
  }
}

export default App;
