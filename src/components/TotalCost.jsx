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
  <Grid.Row columns={2} className="largeBold">
    <Grid.Column textAlign="left">
      Est. total
    </Grid.Column>     
    <Grid.Column textAlign="right">
      ${props.totalCost}
    </Grid.Column>       
  </Grid.Row>      
 </Grid> 
);

export default TotalCost;
