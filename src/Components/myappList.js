import React, { Component } from 'react'
import { connect } from 'react-redux';
import { returnMyApps } from '../Actions'
import List from './list'

class MyAppList extends Component {

  componentDidMount() {
    this.props.returnMyApps()
  }

  render() {
    return (
      <div>
        <List appList={this.props.myappList} kind={'Remove'}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    myappList: state.AppReducer.myappList
  }
}

const mapDispatchToProps = {
  returnMyApps
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAppList)
