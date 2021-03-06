import React from 'react';
import {Table, TableHeader, TableBody,/* TableFooter,*/ TableRow, TableHeaderColumn, TableRowColumn, IconButton} from 'material-ui';
import Edit from 'material-ui/svg-icons/action/info';
import {Link} from 'react-router-dom';
import CheckedIcon from 'material-ui/svg-icons/action/shopping-cart';
import UnCheckedIcon from 'material-ui/svg-icons/action/remove-shopping-cart';

import '../products/products.css';


export const OrdersList = ({orders, history, color}) => {
    return (
        <div>
            <Table className={"table-body"}>
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn colSpan="5" style={{textAlign: 'center'}}>
                            Lista de Ordenes
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip="Id">Id</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Usuario">Usuario</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Total">Total</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Entregado">Entregado</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Detalle" >Detalle</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}>

                    {
                        orders.length > 0 ?
                        orders.map( (p, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{p.id}</TableRowColumn>
                                <TableRowColumn>{p.user}</TableRowColumn>
                                <TableRowColumn>${p.total}</TableRowColumn>
                                <TableRowColumn>
                                    {p.isDelivered ? <CheckedIcon color={color}/> : <UnCheckedIcon/>}
                                </TableRowColumn>
                                <TableRowColumn >
                                    <IconButton containerElement={<Link to={'/admin/orders/'+p.id}/>}>
                                        <Edit/>
                                    </IconButton>
                                </TableRowColumn>
                                {/*<TableRowColumn>editar</TableRowColumn>*/}
                            </TableRow>
                        )):
                            <TableRow>
                                <TableRowColumn colSpan="5">No hay datos</TableRowColumn>
                            </TableRow>
                    }
                </TableBody>
                {/*<TableFooter>*/}
                    {/*<TableRow>*/}
                        {/*<TableRowColumn colSpan="3" style={{textAlign: 'center'}}>*/}
                            {/*Super Footer*/}
                        {/*</TableRowColumn>*/}
                    {/*</TableRow>*/}
                {/*</TableFooter>*/}
            </Table>
        </div>
    );
};
