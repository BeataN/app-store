import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectAppAdd } from '../Actions'
import '../Styles/App.css'

class List extends Component {

  onHandleInput = e => {
    this.props.selectAppAdd(e.target.id)
  }

  render() {
    const {appList, kind} = this.props
    return (
      <table>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>{kind}</th>
          </tr>
          {
              appList.map(app => {
              return (
                <tr>
                  <td>{app.name}</td>
                  <td>{app.desc}</td>
                  <td><input type='checkbox' id={app.id} checked={app.checked} onChange={this.onHandleInput}/></td>
                </tr>
              )
            })
          }
    </table>
    )
  }
}

const mapDispatchToProps = {
  selectAppAdd
}

export default connect(null, mapDispatchToProps)(List)
