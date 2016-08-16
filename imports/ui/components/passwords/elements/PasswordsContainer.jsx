import React from "react";

import PasswordsForm from "./PasswordsForm.jsx";
import PasswordsList from "./PasswordsList.jsx";

export default class PasswordsContainer extends React.Component {
  constructor(){
    super();
  }


  render(){
    return(
      <div className="passwords-container">
        <PasswordsForm />
        <PasswordsList />
      </div>
    )
  }
}
