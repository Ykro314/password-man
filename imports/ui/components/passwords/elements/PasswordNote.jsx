import React from "react";
import { Notes } from "/imports/api/notes.js"

export default class PasswordNote extends React.Component {
  constructor(props){
    super(props);
    this.expandNote = this.expandNote.bind(this);
    this.deleteFromDB = this.deleteFromDB.bind(this);
    this.startUpdate = this.startUpdate.bind(this);
    this.finishUpdate = this.finishUpdate.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);

    this.state = {
      title: this.props.title,
      password: this.props.password,
      login: this.props.login,
      email: this.props.email,
      descr: this.props.descr,
      category: this.props.category
    }
  }

  expandNote(event) {
    event.preventDefault();
    let field = this.refs.expandField;
    let expandButton = event.target;

    field.classList.toggle("note__field-wrap--showed");

    if(field.classList.contains("note__field-wrap--showed")){
      expandButton.textContent = "Hide";
    }
    else {
      expandButton.textContent = "Expand";
    }
  }

  deleteFromDB(event){
    event.preventDefault();
    Notes.remove(this.props.id);
  }

  startUpdate(event){
    event.target.readOnly = false;
  }

  finishUpdate(event){
    Notes.update( this.props.id, {
      $set: { [event.target.name]: event.target.value }
    })
    event.target.readOnly = true;
  }

  handleInputChange(event){
    var input = event.target;
    this.setState({
      [input.name]: input.value
    })
  }

  keyDownHandler(event){
    const keycodes = {
      "ENTER": 13
    }
    if( event.keyCode == keycodes.ENTER ){
      this.finishUpdate(event);
    }
  }

  render(){
    return(
      <li className="note">
        <div className="note__header-wrap">
          <h3 className="note__title">{this.props.title}</h3>
          <span className="note__category">{this.props.category}</span>
          <div className="note__btn-wrapper">
            <button href="" className="note__btn" onClick={this.expandNote}>Expand</button>
            <button href="" className="note__btn" onClick={this.deleteFromDB}>Delete</button>
          </div>
        </div>
        <form action="" className="note__field-wrap" ref="expandField">
          <label className="field">
            Password
            <input onClick={this.startUpdate} onBlur={this.finishUpdate} onKeyDown={this.keyDownHandler} name="password" onChange={this.handleInputChange} type="text" value={this.state.password} readOnly/>
          </label>
          <label className="field">
            Login
            <input onClick={this.startUpdate} onBlur={this.finishUpdate} onKeyDown={this.keyDownHandler} onChange={this.handleInputChange} name="login" type="text" value={this.state.login} readOnly/>
          </label>
          <label className="field">
            Email
            <input onClick={this.startUpdate} onBlur={this.finishUpdate} onKeyDown={this.keyDownHandler} onChange={this.handleInputChange} name="email" type="text" value={this.state.email} readOnly/>
          </label>
          <label className="field  field--full">
            Description
            <textarea onClick={this.startUpdate} onBlur={this.finishUpdate} onKeyDown={this.keyDownHandler} onChange={this.handleInputChange} name="descr" value={this.state.descr} readOnly></textarea>
          </label>
        </form>
      </li>
    )
  }
}
