import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {IconButton, IconMenu, AppBar, MenuItem, FlatButton, Drawer} from 'material-ui';
import './admin.css';

const Options = ({props}) => (
    <IconMenu
        iconButtonElement={
            <IconButton><MoreVertIcon color={'white '}/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);


class AdminPage extends Component {
    state = {
        open:false,
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
                    iconElementRight={<Options/>}
                />
                <Drawer open={this.state.open} containerClassName="admin-drawer">
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
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

AdminPage = connect(mapStateToProps, mapDispatchToProps)(AdminPage);
export default AdminPage;
