import React from "react";

export default class Intro extends React.Component {
  render(){
    return(
      <div className="intro">
        <h1 className="intro__title">Password-manager</h1>
        <p className="intro__descr">This is your password manager. You can type passwords here, add some information and stuff. Check out <a href="#">user documentation</a> if you need more information.</p>
      </div>
    )
  }
}
