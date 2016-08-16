import React from "react";

import { Notes } from "/imports/api/notes.js";



export default class PasswordsForm extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.clearState = this.clearState.bind(this);

    this.clearState(true);
  }

  clearState( invokedInConstructor=false ){
    var defaultStateObj = {
      title: "",
      password: "",
      login: "",
      email: "",
      descr: "",
      category: "website"
    }
    if( invokedInConstructor ) {
      this.state = defaultStateObj;
    }
    else {
       this.setState( defaultStateObj );
    }
  }

  handleInputChange(event){
    var input = event.target;
    this.setState({
      [input.name]: input.value
    })
  }

  handleSubmit(event){
    function addDatatoDb(){
      Notes.insert(this.state);
      this.clearState();
    }

    event.preventDefault();
    if( this.state.title && this.state.login && this.state.password ) {
      addDatatoDb.call(this);
    }
    else {
      return;
    }
  }

  render(){
    return(
      <form action="#" className="form" onSubmit={this.handleSubmit}>
        <h3 className="form__title">Please create your note here</h3>
        <label className="form__label">
          <span>Note name</span>
          <input type="text" name="title" placeholder="Your note title" onChange={this.handleInputChange} value={this.state.title}/>
        </label>
        <label className="form__label">
          <span>Password</span>
          <input type="text" name="password" placeholder="Your password" onChange={this.handleInputChange} value={this.state.password}/>
        </label>
        <label className="form__label">
          <span>Login</span>
          <input type="text" name="login" placeholder="Your login" onChange={this.handleInputChange} value={this.state.login}/>
        </label>
        <label className="form__label">
          <span>Email</span>
          <input type="text" name="email" placeholder="Your email" onChange={this.handleInputChange} value={this.state.email}/>
        </label>
        <label className="form__label  form__label--descr">
          <span>Description</span>
          <textarea name="descr" placeholder="Your description" onChange={this.handleInputChange} value={this.state.descr}></textarea>
        </label>
        <label className="form__label  form__label--category">
          <span>Category</span>
          <select name="category" onChange={this.handleInputChange}>
            <option value="website">Website</option>
            <option value="application">Application</option>
            <option value="bank">Bank account</option>
            <option value="messanger">Messanger</option>
            <option value="mail">Mail account</option>
          </select>
        </label>
        <button type="submit" className="form__button">Save pass-note</button>
      </form>
    )
  }
}
