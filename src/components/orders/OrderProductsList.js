import React from 'react';
import {Table, TableHeader, TableBody, TableFooter, TableRow, TableHeaderColumn, TableRowColumn, Avatar, FloatingActionButton} from 'material-ui';
import Print from 'material-ui/svg-icons/action/print';
import '../products/products.css';
import './ticket.css';
import Ticket from "./Ticket";

import {Checkbox} from 'material-ui';
const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
};

const OrderProductsList = ({order, products,  print, updateCheck}) => {
    let productsLocal = [];
    if(order.products) {
        for (let prop in order.products) {
            productsLocal.push(order.products[prop]);
        }
    }
    return (
        <div>
            <Table className={"table-body"}>
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn colSpan="1" style={{textAlign: 'left'}}>
                            Detalle
                        </TableHeaderColumn>
                        <TableHeaderColumn colSpan="3" style={{textAlign: 'left'}}>

                        </TableHeaderColumn>
                        <TableHeaderColumn colSpan="1" style={{textAlign: 'center'}}>
                            <Checkbox
                                //className="table-body"
                                // checkedIcon={<CheckedIcon />}
                                // uncheckedIcon={<UnCheckedIcon />}
                                checked={order.isDelivered}
                                onCheck={updateCheck}
                                label="Entregado"
                                style={styles.checkbox}
                            />
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip="Imagen">Imagen</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Presentación">Presentación</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Cantidad">Cantidad</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Nombre">Nombre</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Subtotal" >Subtotal</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}>

                    { productsLocal.length > 0 ?
                        productsLocal.map( (p, index) => {
                        return(
                            <TableRow key={index}>
                                <TableRowColumn><Avatar src={p.image}/></TableRowColumn>
                                <TableRowColumn>{p.presentation}</TableRowColumn>
                                <TableRowColumn>{p.amount}</TableRowColumn>
                                <TableRowColumn>{p.name}</TableRowColumn>
                                <TableRowColumn>${p.subtotal}</TableRowColumn>
                            </TableRow>
                        )
                        }) :
                        <TableRow>
                            <TableRowColumn>No hay productos</TableRowColumn>
                        </TableRow>

                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableRowColumn colSpan="3" style={{textAlign: 'right'}}>
                            Total ${order.total}
                        </TableRowColumn>
                    </TableRow>
                </TableFooter>
            </Table>

            <div className="printable">
                <Ticket order={order} products={productsLocal} allProducts={products}/>
            </div>

            <FloatingActionButton className="add-product-button" onClick={print}>
                <Print />
            </FloatingActionButton>
        </div>
    );
};

export default OrderProductsList;