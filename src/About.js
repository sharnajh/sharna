import React, { Component } from "react";
import Description from "./Description";
import Astronaut from "./assets/models/Astronaut";
import { connect } from "react-redux";
import Loading from "./assets/SVGs/Loading";

class About extends Component {
  render() {
    return (
      <div className="section" id="about">
        <div id="bio">
          <Description />
          {document.body.clientWidth < 600 ? (
            ""
          ) : this.props.loaded.logo ? (
            <Astronaut />
          ) : (
            <div id="astronautwrapper">
              <Loading />
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ loaded }) {
  return {
    loaded
  };
}

export default connect(mapStateToProps)(About);
