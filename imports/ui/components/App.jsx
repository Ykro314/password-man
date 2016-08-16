import React from "react";

import Intro from "./intro/elements/Intro.jsx";
import PasswordsContainer from "./passwords/elements/PasswordsContainer.jsx";

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Intro />
        <PasswordsContainer />
      </div>
    )
  }
}
