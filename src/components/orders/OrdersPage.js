import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as orderActions from '../../redux/actions/orderActions';
import {bindActionCreators} from 'redux';
import {OrdersComponent} from "./OrdersComponent";
import {FloatingActionButton, Dialog, FlatButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import NewOrderForm from "./NewOrderForm";

class OrdersPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            open:false,
            value: '-KzzM6g07UkHN2UH1zcV',
            search: ''
        };
    }

    handleChange = (event, index, value) => this.setState({value});

    handleChangeTextField = (e) => {
        this.setState({[e.target.name]:e.target.value});
    };

    handleOpen = () => {
        this.setState({open:true})
    };

    handleClose = () => {
        this.setState({open:false})
    };
    render() {
        // let orders = [
        //     {id: '1', user: 'Miguel', total:345},
        //     {id: '2', user: 'Miguel', total:1200}
        // ];
        const actionsForNewOrder= [
            <FlatButton
                primary={true}
                onClick={this.handleClose}
                label="Cancelar"
            />,
            <FlatButton
                primary={true}
                onClick={this.handleClose}
                keyboardFocused={true}
                label="Añadir"
            />
        ];
        const {open, search} = this.state;
        const {orders} = this.props;
        const regEx = new RegExp(this.state.search,'i');
        let items = this.props.orders.slice();
        if(this.state.search){
            items = items.filter(item => regEx.test(item.user)|| regEx.test(item.id));
        }
        return (
            <div>
                <OrdersComponent
                    orders={items}
                    history={this.props.history}
                    search={search}
                    handleSearch={this.handleChangeTextField}
                />
                {/*<FloatingActionButton*/}
                    {/*onClick={this.handleOpen}*/}
                    {/*className="add-product-button">*/}
                    {/*<ContentAdd />*/}
                {/*</FloatingActionButton>*/}
                <Dialog
                    autoScrollBodyContent={true}
                    title="Nueva orden"
                    actions={actionsForNewOrder}
                    modal={false}
                    open={open}
                    onRequestClose={this.handleClose}
                    contentStyle={{width:'50%'}}>
                        <NewOrderForm
                            value={this.state.value}
                            products={this.props.products}
                            onChange={this.handleChange}/>
                </Dialog>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        orders: state.orders,
        fetched: state.orders !== undefined,
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        orderActions: bindActionCreators(orderActions, dispatch)
    }
}

OrdersPage = connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
export default OrdersPage;
