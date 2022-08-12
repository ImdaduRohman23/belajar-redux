import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
const columns = [{
    dataField: 'id',
    text: 'ID'
    }, {
    dataField: 'nama',
    text: 'Name'
    }, {
    dataField: 'alamat',
    text: 'Alamat'
    }];

const TableComponent = (props) => {
    
  return (
    <div>
      <BootstrapTable keyField='id' data={ this.state.props } columns={ columns } />
    </div>
  )
}

export default TableComponent
