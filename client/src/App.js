import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, } from 'reactstrap';
import * as $ from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      kudoTitle: '',
      kudoBody: '',
      kudoSender: '',
      KudoReceiver: '',
      KudoList: []
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  giveKudos = (event) => {
    event.preventDefault();
    const newKudo = {
      Sender: this.state.kudoSender,
      Receiver: this.state.kudoReceiver,
      title: this.state.kudoTitle,
      body: this.state.kudoBody
    }
    console.log(newKudo)
  }

  getKudos = () => {
    $.get('/api/kudo')
    .then((data) => {
      console.log(data.data)
      this.setState({
        kudoList: data.data
      })
    })
  }

  handleChangeSender = (event) => {
    this.setState({
      kudoSender: event.target.value
    })
  }

  handleChangeTitle = (event) => {
    this.setState({
      kudoTitle: event.target.value
    })
  }

  handleChangeBody = (event) => {
    this.setState({
      kudoBody: event.target.value
    })
  }

  handleChangeReceiver = (event) => {
    this.setState({
      kudoReceiver: event.target.value
    })
  }

  componentDidMount(){
    this.getKudos();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Tiny Improvements</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <button onClick={this.toggle} className="btn btn-primary">
              Give Kudos
              </button>
          </div>
          <div className="col-6" id="kudosDump">
          </div>
        </div>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Give a Kudo!</ModalHeader>
            <ModalBody>
              <form>
                <select onChange={this.handleChangeSender} className="form-control form-control-lg">
                  <option value="5bfddd3aca24d55b3f3c4463">Tony</option>
                  <option value="5bfddd4dca24d55b3f3c4470">Sarah</option>
                  <option value="5bfddd7dca24d55b3f3c447a">Michael</option>
                  <option value="5bfddd5fca24d55b3f3c4472">Mallory</option>
                  <option value="5bfddd6eca24d55b3f3c4476">Amber</option>
                  <option value="5bfddd88ca24d55b3f3c447e">Jo</option>
                </select>
                <div className="form-group">
                  <label>Enter a title</label>
                  <input onChange={this.handleChangeTitle} type="text" className="form-control" aria-describedby="kudoTitle" />
                </div>
                <div className="form-group">
                  <label>Enter Kudo</label>
                  <textarea onChange={this.handleChangeBody} className="form-control"></textarea>
                </div>
                <select onChange={this.handleChangeReceiver} className="form-control form-control-lg">
                  <option value="5bfddd3aca24d55b3f3c4463">Tony</option>
                  <option value="5bfddd4dca24d55b3f3c4470">Sarah</option>
                  <option value="5bfddd7dca24d55b3f3c447a">Michael</option>
                  <option value="5bfddd5fca24d55b3f3c4472">Mallory</option>
                  <option value="5bfddd6eca24d55b3f3c4476">Amber</option>
                  <option value="5bfddd88ca24d55b3f3c447e">Jo</option>
                </select>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button onClick={this.giveKudos} type="submit" className="btn btn-primary">Give Kudo</button>
                </div>
              </form>
            </ModalBody>
          </Modal>
        </div>
        {this.state.KudoList.map(kudo => (
          <div>{kudo.title}</div>
        ))}
      </div >
    );
  }
}

export default App;
