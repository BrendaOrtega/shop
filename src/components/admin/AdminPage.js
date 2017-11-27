import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {IconButton, IconMenu, AppBar, MenuItem, FlatButton, Drawer} from 'material-ui';
import * as userActions from '../../redux/actions/userActions';
import './admin.css';
import {Router, Route, Link} from 'react-router-dom';
import OrdersPage from "../orders/OrdersPage";
import ProductsPage from "../products/ProductsPage";
import OrdersDetailPage from "../orders/OrdersDetailPage";




const Options = ({logOut}) => (
    <IconMenu
        iconButtonElement={
            <IconButton><MoreVertIcon color={'white '}/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" onClick={logOut}/>
    </IconMenu>
);


class AdminPage extends Component {
    state = {
        open:false,
    };

    componentWillMount(){
        let user = localStorage.getItem('shopy-user');
        if (user === null) this.props.history.push('/login')
    }

    logOut=()=>{
        this.props.userActions.logOut()
            .then(r=>{
                this.props.history.push('/')
            }).catch(e=>{

        })
    };

    handleOpen=()=>{
        this.setState({open:!this.state.open});
    };
    render() {
        return (
            <div>
                <AppBar
                    title="Admin Panel"
                    iconElementLeft={<IconButton onClick={this.handleOpen}>{this.state.open?<NavigationClose />:<Menu />}</IconButton>}
                    iconElementRight={<Options logOut={this.logOut}/>}
                />
                <Drawer open={this.state.open} containerClassName="admin-drawer">
                    <MenuItem containerElement={<Link to="/admin/products"/>}>Products</MenuItem>
                    <MenuItem containerElement={<Link to="/admin/orders"/>}>Orders</MenuItem>
                </Drawer>

                    <div className={this.state.open?'admin-base open-admin':'admin-base closed-admin'}>
                        <Route path={`/admin/products`} component={ProductsPage}/>
                        <Route path={`/admin/orders`} component={OrdersPage}/>
                        <Route path={`/admin/orders/detail`} component={OrdersDetailPage}/>
                    </div>

            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
        user: state.user,
        fetched: state.user !== undefined,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

AdminPage = connect(mapStateToProps, mapDispatchToProps)(AdminPage);
export default AdminPage;
