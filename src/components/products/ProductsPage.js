import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ProductsPage extends Component {
    state = {};

    render() {
        return (
            <div>
                products
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

ProductsPage = connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
export default ProductsPage;
