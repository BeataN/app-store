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
    this.props.appList.filter(app => {
      if(app.checked) {
        console.log(this.props.addAppToUser(app))
          return this.props.addAppToUser(app)
      }
    })
    this.setState({open: !this.state.open})
  }

  onhandleClick = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div>
        <MyAppList />
        <button onClick={this.onhandleClick}>Add</button>
          {
            this.state.open ? <ModalAddApp
            appList={this.props.appList}
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
    appList: state.AppReducer.appList
  }
}

const mapDispatchToProps = {
  returnedAllApps,
  addAppToUser
}

export default connect(mapStateToProps, mapDispatchToProps)(AppList)
