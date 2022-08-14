import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'

export default class App extends Component {
  state = {
    title: 'Imdadu Belajar'
  }



  render() {
    return (
      <div>
        <NavbarComponent title={this.state.title} />
      </div>
    )
  }
}
