import React, { Component } from "react";
import { TotalCost, Loader } from "../components";
import { connect } from "react-redux";
import {fetchCart} from "../actions";

const mapStateToProps = state => {
  return {
    cartData: state && state.cartState ? state.cartState.cartData : {},
    isLoading: state  && state.cartState ? state.cartState.isLoading : false,
    isLoaded: state  && state.cartState ? state.cartState.isLoaded : false,
    isFailed: state  && state.cartState ? state.cartState.isFailed : false
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCartData: () => dispatch(fetchCart())
  };
};
class Cart extends Component {

  componentDidMount() {
    this.props.fetchCartData()
  }

  render() {
    console.log(this.props.cartData)
    if(this.props.isLoading) {
      return (
        <div>
            <Loader />
        </div>
      )
    }

    return (
      <div>
          <TotalCost {...this.props.cartData}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
