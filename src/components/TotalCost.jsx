import React from "react";
import CostBreakDown from './CostBreakDown.jsx'
import { Grid } from 'semantic-ui-react'

const TotalCost = (props) => (
  <Grid divided='vertically'>
  <Grid.Row>
    <Grid.Column>
      <CostBreakDown {...props} />
    </Grid.Column>  
  </Grid.Row>
  <Grid.Row columns={2}>
    <Grid.Column textAlign="left">
      <span className="largeBold"> Est. total</span>
      <p className="discountLabel">{props.discount && `(${props.discount * 100}% Discount Applied)`}</p>
    </Grid.Column>     
    <Grid.Column textAlign="right">
      <span className="largeBold">${props.totalCost}</span>
    </Grid.Column>       
  </Grid.Row>      
 </Grid> 
);

export default TotalCost;
