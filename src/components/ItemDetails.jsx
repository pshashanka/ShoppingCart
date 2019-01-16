import React from "react";
import { Grid } from 'semantic-ui-react'

const ItemDetails = ({items}) => (
  <Grid stretched>
      {items.map((v, i) => 
        <Grid.Row>
        <Grid.Column textAlign="left">
            <img className="itemImage" src={v.image} alt="Item image loading" />
        </Grid.Column>  
        <Grid.Column textAlign="right" stretched>
            <div>
                <p><small>{v.title}</small></p>
                <p>{v.price}</p>   
                <p><strike>{v.actual}</strike></p>   
                <p>Qty: {v.qty}</p>          
            </div>
        </Grid.Column>       
        </Grid.Row>        
      )

      }
    
 </Grid> 
);

export default ItemDetails;
