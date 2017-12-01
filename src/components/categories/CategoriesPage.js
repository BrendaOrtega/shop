import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class CategoriesPage extends Component {
    state = {};

    render() {
        return (
            <div>
                cats
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

CategoriesPage = connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
export default CategoriesPage;
