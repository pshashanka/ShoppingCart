import React from "react";
import { Grid, Form, Button } from 'semantic-ui-react'

class PromoDetails extends React.Component {
    constructor(){
        super();
        this.state = {
            promoCode: ''
        }
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { promoCode } = this.state

        this.props.applyPromoCode(promoCode);
    }

    render() {
        const { promoCode } = this.state
        return(
            <Grid stretched>
            <Form onSubmit={this.handleSubmit}>
                  <Grid.Row>
                      <Grid.Column>
                          <Form.Field>
                               <br />
                              <label className={"labelPromoCode"}>Promo Code</label> 
                              <Form.Input placeholder="promo code" name="promoCode" value={promoCode} onChange={this.handleChange}></Form.Input>
                          </Form.Field>
                          <Button type="submit" basic><b>Apply</b></Button> 
                          <br />
                      </Grid.Column>
                  </Grid.Row>
                  </Form>
           </Grid> 
        )
    }

}

export default PromoDetails;
