import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectAppAdd } from '../Actions'
import '../Styles/App.css'

class List extends Component {

  onHandleInput = e => {
    this.props.selectAppAdd(e.target.id)
  }

  render() {
    const {name, desc, checked, id} = this.props.app
    return (
      <div className="container-fluid">
          <div className="table-row header">
            <div className="text">Name</div>
            <div className="text">Description</div>
            <div className="text">{this.props.kind}</div>
          </div>
          <div className="table-row">
            <div className="text">{name}</div>
            <div className="text">{desc}</div>
            <input className="text" type='checkbox' id={id} checked={checked} onChange={this.onHandleInput}/>
          </div>
    </div>
    )
  }
}

const mapDispatchToProps = {
  selectAppAdd
}

export default connect(null, mapDispatchToProps)(List)
