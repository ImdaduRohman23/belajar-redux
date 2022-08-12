import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import TableComponent from './components/TableComponent'

export default class App extends Component {
  render() {
    state = {
      title: 'Imdadu Balajar',
      users: [
        {
          id: 1,
          nama: 'imdadu',
          alamat: 'sini',
          umur: 24,
          nohp: 12342355
        },
        {
          id: 2,
          nama: 'rohman',
          alamat: 'sana',
          umur: 20,
          nohp: 16782355
        },
        {
          id: 3,
          nama: 'gfhdghn',
          alamat: 'sana',
          umur: 22,
          nohp: 16672355
        },
      ]
    }
    return (
      <div>
        <NavbarComponent />
        <TableComponent users={users}/>
      </div>
    )
  }
}
