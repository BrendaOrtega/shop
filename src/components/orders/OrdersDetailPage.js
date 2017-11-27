import React, {Component} from 'react';
import {OrdersDetailComponent} from "./OrdersDetailComponent";
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class OrdersDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const {order, orderFound} = this.props;
        console.log(order);
        if(orderFound){
            // console.log(order.products);
            // for(let id in order.products){
            //     let product =  products.filter( (product, key) => {
            //         return product.id === id;
            //     })[0];
            //     productsTemp.push(product);
            // }
            console.log(order.products);
        }
        return (
            <div>
                {
                    orderFound &&
                    <OrdersDetailComponent order={order} />
                }
                {/*<OrdersDetailComponent order={order}/>*/}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    let orderId = ownProps.match.params.id;
    let order = state.orders.filter( order => {
        return order.id === orderId;
    })[0] ;
    return {
        order,
        orderFound: order !== undefined,
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

OrdersDetailPage = connect(mapStateToProps, mapDispatchToProps)(OrdersDetailPage);
export default OrdersDetailPage;