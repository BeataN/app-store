import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'
import List from './list'

export default class ModalAddApp extends Component {
  render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>List of Application</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <List appList={this.props.appList}
               kind={'Add'} property={'checked'}/>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.onClick}>Close</Button>
            <Button onClick={this.props.onHandleButton}>Add App</Button>
          </Modal.Footer>

        </Modal.Dialog>
  </div>
    )
  }
}
