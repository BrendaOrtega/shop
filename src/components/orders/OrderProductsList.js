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

const OrderProductsList = ({order, products,  print, updateCheck, handleSelect, ticketProducts}) => {
    ticketProducts = ticketProducts.filter(p=>p.selected===true);
    let productsLocal = [];
    if(order.products) {
        for (let prop in order.products) {
            productsLocal.push(order.products[prop]);
        }
    }

    return (
        <div>
            <Table className={"table-body"}

                   >
                <TableHeader
                    adjustForCheckbox={false}
                    displaySelectAll={false}>
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
                        <TableHeaderColumn>
                            <Checkbox

                                checked={order.selectAll}
                                onCheck={()=>handleSelect('all')}

                                style={styles.checkbox}
                            />
                        </TableHeaderColumn>
                        <TableHeaderColumn tooltip="Imagen">Imagen</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Presentación">Presentación</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Cantidad">Cantidad</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Nombre">Nombre</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Precio Unitario" >Precio Unitario</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody

                    displayRowCheckbox={false}
                    deselectOnClickaway={false}>

                    { productsLocal.length > 0 ?
                        productsLocal.map( (p, index) => {
                        return(
                            <TableRow key={index} selected={p.selected} >
                                <TableRowColumn>
                                    <Checkbox
                                        checked={p.selected}
                                        onCheck={()=>handleSelect(p, index)}
                                        style={styles.checkbox}
                                    />
                                </TableRowColumn>
                                <TableRowColumn><Avatar src={p.product.image}/></TableRowColumn>
                                <TableRowColumn>{p.product.presentation}</TableRowColumn>
                                <TableRowColumn>{p.amount}</TableRowColumn>
                                <TableRowColumn>{p.product.name}</TableRowColumn>
                                <TableRowColumn>${p.product.price}</TableRowColumn>
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
                <Ticket order={order} products={ticketProducts} />
            </div>

            <FloatingActionButton className="add-product-button" onClick={print}>
                <Print />
            </FloatingActionButton>
        </div>
    );
};

export default OrderProductsList;