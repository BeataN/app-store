import React, { Component } from 'react'
import { connect } from 'react-redux';
import { returnedAllApps, addAppToUser } from '../Actions'
import ModalAddApp from './modalAddApp'
import MyAppList from './myappList'

class AppList extends Component {

  state = {
    open: false
  }

  componentDidMount() {
    if(!this.props.apps) {
      this.props.returnedAllApps()
    }
  }

  onHandleButton = () => {
    this.props.appList
    .filter(app =>  app.checked)
    .forEach(app => { console.log('adding app', app.id); this.props.addAppToUser(app.id)})
    this.setState({open: !this.state.open})
  }

  onhandleClick = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    if (this.props.error){
      return <div>{this.props.error.message}</div>
    }
    return (
      <div>
        <MyAppList />
        <button onClick={this.onhandleClick}>Add</button>
          {
            this.state.open ? <ModalAddApp
            appList={this.props.appList.filter(app => !this.props.myappList.find(ma => app.id === ma.id))}
            onHandleButton={this.onHandleButton}
            open={this.state.open}
            onClick={this.onhandleClick}/> : null
          }
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.AppReducer);
  return {
    appList: state.AppReducer.appList,
    myappList: state.AppReducer.myappList,
    error: state.AppReducer.error
  }
}

const mapDispatchToProps = {
  returnedAllApps,
  addAppToUser
}

export default connect(mapStateToProps, mapDispatchToProps)(AppList)
