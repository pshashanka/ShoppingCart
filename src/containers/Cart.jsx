import React, { Component } from "react";
import { TotalCost, Loader, ItemDetails } from "../components";
import { connect } from "react-redux";
import {fetchCart, setShowItemDetails, setShowPromoDetails} from "../actions";
import { Grid, Card} from 'semantic-ui-react'


const mapStateToProps = state => {
  return {
    cartData: state && state.cartState ? state.cartState.cartData : {},
    isLoading: state  && state.cartState ? state.cartState.isLoading : false,
    isLoaded: state  && state.cartState ? state.cartState.isLoaded : false,
    isFailed: state  && state.cartState ? state.cartState.isFailed : false,
    showItemDetails: state  && state.cartState ? state.cartState.showItemDetails : false,
    showPromoDetails: state  && state.cartState ? state.cartState.showPromoDetails : false
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCartData: () => dispatch(fetchCart()),
    setShowItemDetails: (flag) => dispatch(setShowItemDetails(flag)),
    setShowPromoDetails: (flag) => dispatch(setShowPromoDetails(flag)),
  };
};
class Cart extends Component {

  componentDidMount() {
    this.props.fetchCartData()
  }

  onShowItemDetails() {
    this.props.setShowItemDetails(!this.props.showItemDetails);
  }

  render() {
    
    if(this.props.isLoading) {
      return (
        <div>
            <Loader />
        </div>
      )
    }
    const items = this.props.cartData && this.props.cartData.items ? this.props.cartData.items : []
    console.log("items", items)
    return (
      <div>
        <Grid centered stretched={false} computer={8} mobile={8} tablet={16}>
          <Grid.Row>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <TotalCost {...this.props.cartData}/>
                </Card.Content>
                <Card.Content>
                   <p className="pLink">
                      <u  onClick={(e) => this.onShowItemDetails()}>{this.props.showItemDetails ? 'Hide item Details - ' : 'Show Item Details +'}</u>
                   </p>
                   {this.props.showItemDetails &&
                      <ItemDetails show={this.props.showItemDetails} items={items}  />
                   }
                  
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
