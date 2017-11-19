import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectAppAdd } from '../Actions'
import '../Styles/App.css'

class AppStore extends Component {

  onHandleInput = e => {
    console.log('onClick', e.target.id)
    this.props.selectAppAdd(e.target.id)
  }

  render() {
    const {appList, kind, property} = this.props

    return (
      <div className='wrapper'>
          {
            appList.map(app => {
              return (
                <div className={app.checked ? 'wrapper__box wrapper__box--active' : 'wrapper__box'}>
                  <div className='wrapper__top'>
                    <div className='wrapper__logo'>
                      <img src={app.logo} alt={app.name}/>
                    </div>
                    <div className='wrapper__head'>
                      <h2 className='wrapper__title'>{app.name}</h2>
                      <p className='wrapper__description'>{app.desc}</p>
                    </div>
                  </div>
                  <div className='wrapper__body'>
                    <div className='wrapper__owner'>
                      <div className='wrapper__contact'>Contact</div>
                      <div className='wrapper__name'>{app.owner}</div>
                    </div>
                    <div className='button-add-app wrapper__footer'>
                      <button className='wrapper__button-cta' onClick={this.onHandleInput} id={app.id}>Launch</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
      </div>
    )
  }
}

const mapDispatchToProps = {
  selectAppAdd
}

export default connect(null, mapDispatchToProps)(AppStore)
