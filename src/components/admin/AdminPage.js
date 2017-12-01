import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import History from 'material-ui/svg-icons/action/history';
import Store from 'material-ui/svg-icons/action/store';
import Recipet from 'material-ui/svg-icons/action/receipt';
import Cats from 'material-ui/svg-icons/editor/pie-chart';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {IconButton, IconMenu, AppBar, MenuItem, FlatButton, Drawer} from 'material-ui';
import * as userActions from '../../redux/actions/userActions';
import './admin.css';
import {Router, Route, Link, Switch} from 'react-router-dom';
import OrdersPage from "../orders/OrdersPage";
import ProductsPage from "../products/ProductsPage";
import OrdersDetailPage from "../orders/OrdersDetailPage";
import CategoriesPage from '../categories/CategoriesPage';





const Options = ({logOut}) => (
    <IconMenu
        iconButtonElement={
            <IconButton><MoreVertIcon color={'white '}/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Home" containerElement={<Link to="/"/>}/>

        <MenuItem primaryText="Salir" onClick={logOut}/>
    </IconMenu>
);


class AdminPage extends Component {
    state = {
        open:true,
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
        console.log(this.props)
        return (
            <div>
                <AppBar
                    style={{position:'fixed'}}
                    title="Admin Panel"
                    iconElementLeft={<IconButton onClick={this.handleOpen}>{this.state.open?<NavigationClose />:<Menu />}</IconButton>}
                    iconElementRight={<Options logOut={this.logOut}/>}
                />
                <Drawer open={this.state.open} containerClassName="admin-drawer">
                    <MenuItem
                        rightIcon={<Store color={this.props.location.pathname==='/admin/products'?'white':''}/>}
                        style={this.props.location.pathname==='/admin/products'?{color:'white', backgroundColor:'#8e1c58'}:{}}
                        containerElement={<Link to="/admin/products"/>}>
                        Products
                    </MenuItem>
                    <MenuItem
                        rightIcon={<Recipet color={this.props.location.pathname==='/admin/orders'?'white':''}/>}
                        style={this.props.location.pathname==='/admin/orders'?{color:'white', backgroundColor:'#8e1c58'}:{}}
                        containerElement={<Link to="/admin/orders"/>}>
                        Orders
                    </MenuItem>
                    <MenuItem
                        rightIcon={<Cats color={this.props.location.pathname==='/admin/categories'?'white':''}/>}
                        style={this.props.location.pathname==='/admin/categories'?{color:'white', backgroundColor:'#8e1c58'}:{}}
                        containerElement={<Link to="/admin/categories"/>}>
                        Categories
                    </MenuItem>
                    <MenuItem
                        rightIcon={<History color={this.props.location.pathname==='/admin/history'?'white':''}/>}
                        style={this.props.location.pathname==='/admin/history'?{color:'white', backgroundColor:'#8e1c58'}:{}}
                        containerElement={<Link to="/admin/history"/>}>
                        History
                    </MenuItem>
                </Drawer>

                    <div className={this.state.open?'admin-base open-admin':'admin-base closed-admin'}>
                        <Switch>
                            <Route path={`/admin/products`} component={ProductsPage}/>
                            <Route path={`/admin/orders/:id`} component={OrdersDetailPage}/>
                            <Route path={`/admin/orders`} component={OrdersPage}/>
                            <Route path={`/admin/history`} component={OrdersPage}/>
                            <Route path={`/admin/categories`} component={CategoriesPage}/>
                        </Switch>
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
