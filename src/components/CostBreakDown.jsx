import React from "react";
import { Grid, Popup} from 'semantic-ui-react'

const CostBreakDown = ({ subtotal, pickupSavings, taxesFees, pickupZip  }) => (
    <Grid >
    <Grid.Row columns={2}>
      <Grid.Column mobile={8} textAlign="left">
        Subtotal
      </Grid.Column>
      <Grid.Column mobile={8} textAlign="right">
        <b>${subtotal}</b>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column mobile={8} textAlign="left">
        <Popup position="bottom left" trigger={<p className="pLink"><u>Pickup Savings</u></p>} content='Pickup your Order in the store cuts costs and we pass savings to you.' />
      </Grid.Column>
      <Grid.Column mobile={8} textAlign="right" className="redText">
        <b>-${pickupSavings}</b>
      </Grid.Column>
    </Grid.Row>    
    <Grid.Row>
      <Grid.Column mobile={8} textAlign="left">
        <p>Est. taxes & fees
          <br />(Based on {pickupZip})
        </p>
      </Grid.Column>
      <Grid.Column mobile={8} textAlign="right">
        <b>${taxesFees}</b>
      </Grid.Column>
    </Grid.Row>      
   </Grid> 

);

export default CostBreakDown;
