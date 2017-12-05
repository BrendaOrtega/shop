import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {OrdersList} from "./OrdersList";

class HistoryPage extends Component {
    state = {};

    render() {
        return (
            <div>
                <OrdersList orders={this.props.orders}/>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        orders: state.orders
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //actions: bindActionCreators(actions, dispatch)
    }
}

HistoryPage = connect(mapStateToProps, mapDispatchToProps)(HistoryPage);
export default HistoryPage;
