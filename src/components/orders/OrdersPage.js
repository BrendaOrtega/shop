import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class OrdersPage extends Component {
    state = {};

    render() {
        return (
            <div>
                orders
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //actions: bindActionCreators(actions, dispatch)
    }
}

OrdersPage = connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
export default OrdersPage;
