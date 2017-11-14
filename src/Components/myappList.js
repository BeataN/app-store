import React, { Component } from 'react'
import { connect } from 'react-redux';
import { returnMyApps, deleteAppToUser } from '../Actions'
import List from './list'

class MyAppList extends Component {

  componentDidMount() {
    this.props.returnMyApps()
  }

  onHandleButton = () => {
    console.log('onHandleButton', this.props.myappList)
    this.props.myappList
    .filter(app => app.selectedForRemoval)
    .forEach(app => { console.log('deleting app', app.id); this.props.deleteAppToUser(app.id) })
  }

  render() {
    return (
      <div>
        <List appList={this.props.myappList} kind='Remove' property='selectedForRemoval'/>
        <button onClick={this.onHandleButton}>Remove app</button>
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
  returnMyApps,
  deleteAppToUser
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAppList)
