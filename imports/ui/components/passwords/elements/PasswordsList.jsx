import React from "react";
import { createContainer } from "meteor/react-meteor-data"


import { Notes } from "/imports/api/notes.js";
import PasswordNote from "./PasswordNote.jsx";

class PasswordsList extends React.Component {
  constructor(){
    super();
    this.createList = this.createList.bind(this);
  }

  createList(){
    var elements = this.props.notes.map( (note) => {
      return(
        <PasswordNote
          title={note.title}
          category={note.category}
          password={note.password}
          login={note.login}
          email={note.email}
          category={note.category}
          descr={note.descr}
          key={note._id}
          id={note._id}
        />
      )
    })
    return elements;
  }

  render(){
    return(
      <ul className="passwords-list">
        {this.createList()}
      </ul>
    )
  }
}

export default createContainer(() => {
  return {
    notes: Notes.find({}).fetch()
  }
}, PasswordsList)
