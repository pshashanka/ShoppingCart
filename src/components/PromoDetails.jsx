import React from "react";
import { Form } from 'semantic-ui-react'
import PropTypes from 'prop-types';

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
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <br />
                    <label className={"labelPromoCode"}>Promo Code</label> 
                    <Form.Input action="Apply" placeholder="promo code" name="promoCode" value={promoCode} onChange={this.handleChange}></Form.Input>
                </Form.Field>
            </Form>
        )
    }

}

PromoDetails.propTypes = {
    applyPromoCode: PropTypes.func
}

PromoDetails.defaultProps = {
    applyPromoCode: () => {}
}


export default PromoDetails;
