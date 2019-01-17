import React from "react";
import { Grid } from 'semantic-ui-react'

const ItemDetails = ({items}) => (
  <Grid stretched>
      {items.map((v, i) => 
        <Grid.Row key={i}>
        <Grid.Column textAlign="left" style={{width: "100%"}}>
            <img className="itemImage" src={v.image}  />
        </Grid.Column>  
        <Grid.Column textAlign="right" style={{width: "100%"}}>
            <div>
                <p><small>{v.title}</small></p>
                <p>${v.price}</p>   
                <p><strike>${v.actual}</strike></p>   
                <p>Qty: {v.qty}</p>          
            </div>
        </Grid.Column>       
        </Grid.Row>        
      )

      }
    
 </Grid> 
);

export default ItemDetails;
