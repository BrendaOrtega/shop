import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {OrdersList} from "./OrdersList";
import {TextField, DatePicker} from 'material-ui';

class HistoryPage extends Component {
    state = {
        date:'',
        date2:''
    };


    handleDate=(event, date)=>{
        date = date.getTime();
        this.setState({date});

    };
    handleDate2=(event, date2)=>{
        date2 = date2.getTime();
        this.setState({date2});
    };



    render() {
        let filtered = this.props.orders;
        if(this.state.date){
             filtered = filtered.filter(obj=>{
                return obj.date>=this.state.date && obj.date<=this.state.date2
            });
        }


        return (
            <div>
                <div className="search">
                    <DatePicker
                        style={{padding:'1%'}}
                        hintText="Filtro Fecha 1"
                        autoOk={true}
                        onChange={this.handleDate}/>
                    <DatePicker
                        style={{padding:'1%'}}
                        hintText="Filtro Fecha 2"
                        autoOk={true}
                        onChange={this.handleDate2}/>

                </div>
                <OrdersList orders={filtered}/>
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
