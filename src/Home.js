import React, { Component } from "react";
import Loading from "./assets/SVGs/Loading";
import Logo from "./assets/SVGs/Logo.js";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { loaded } = this.props;
    console.log(loaded);
    return (
      <div className="section" id="main">
        <div id="logowrapper">
          {document.body.clientWidth < 600 ? (
            <Logo />
          ) : loaded ? (
            <Logo />
          ) : (
            <Loading />
          )}
        </div>

        <h1>
          Hi, I'm <span style={{ color: "#FF1A77" }}>Sharna</span>.
        </h1>
        <h1 style={{ fontSize: "23px" }}>I'm a Web Developer.</h1>
      </div>
    );
  }
}

function mapStateToProps({ loaded }) {
  return {
    loaded
  };
}

export default connect(mapStateToProps)(Home);
