import React, {Component} from 'react';
import OrderProductsList from './OrderProductsList';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ordersActions from '../../redux/actions/orderActions';
import {bindActionCreators} from "redux";

class OrdersDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketProducts:[],
            lista:[],

        }
    }
    print=()=>{
        window.print();
    };

    handleSelect=(q, i)=>{
        let orderUpdated = Object.assign({},this.props.order);
        orderUpdated.selectAll = !orderUpdated.selectAll;
        if(q==='all'){
            console.log(orderUpdated);
            for(let o of orderUpdated.products){
                o.selected = orderUpdated.selectAll;
            }

        }else{
            orderUpdated.products[i].selected = !orderUpdated.products[i].selected;
        }

        this.props.ordersActions.saveOrder(orderUpdated);

        /*let ticketProducts = [];
        console.log(lista);
        //
        let {products} = this.props.order;
       if(lista==='all'){
            ticketProducts = products;
        }else if(lista==='none'){
           ticketProducts = [];
        } else{
             for(let i of lista){
                 ticketProducts.push(products[i]);

                 //let orderUpdated = Object.assign({},this.props.order);
                 //orderUpdated.products[i].selected = !orderUpdated.products[i].selected;
                 //this.props.ordersActions.saveOrder(orderUpdated);
             }
        }
        this.setState({ticketProducts})*/


    };

    updateCheck = () => {
        let orderUpdated = Object.assign({},this.props.order);
        orderUpdated.isDelivered = !orderUpdated.isDelivered;
        this.props.ordersActions.saveOrder(orderUpdated);
    };
    render() {
        const {order, orderFound, products} = this.props;
        //console.log(order);
        // let names = [];
        // if(orderFound){
        //     for(let p of order.products){
        //         let product =  products.filter( (product, key) => {
        //             return product.id === p.id;
        //         })[0];
        //         names.push(product.name);
        //     }
        //     console.log(order.products);
        // }
        return (
            <div>
                {
                    orderFound &&
                    <OrderProductsList
                        items={this.state.lista}
                        order={order}
                        products={products}
                        print={this.print}
                        updateCheck={this.updateCheck}
                        handleSelect={this.handleSelect}
                        ticketProducts={this.props.order.products}/>
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
        ordersActions: bindActionCreators(ordersActions, dispatch)
    }
}

OrdersDetailPage = connect(mapStateToProps, mapDispatchToProps)(OrdersDetailPage);
export default OrdersDetailPage;