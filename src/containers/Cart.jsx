import React, { Component } from "react";
import { TotalCost } from "../components";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    showThirdPanel: state ? !!state.showThirdPanel : false,
    mainPanelWidth: state && state.showThirdPanel ? "12" : "16",
    thirdPanelWidth: state && state.showThirdPanel ? "4" : "0",
    bdfAssets: state ? state.bdfAssets : {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setShowThirdPanel: show => dispatch(showThirdPanel(show))
  };
};
class Cart extends Component {
  render() {
    return (
      <div>
        <TotalCost />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
