import React, { Component } from 'react'
import { connect } from 'react-redux';
import { returnMyApps } from '../Actions'
import List from './list'

class MyAppList extends Component {

  componentDidMount() {
    this.props.returnMyApps()
  }

  render() {
    console.log('myappList', this.props.myappList);
    const myappList = [...new Set(this.props.myappList)]
    return (
      <div>
        {
          myappList.map(app => <List app={app} kind={'Remove'}/>)
        }
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
