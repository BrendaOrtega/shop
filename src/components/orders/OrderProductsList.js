import React from 'react';
import {Table, TableHeader, TableBody, TableFooter, TableRow, TableHeaderColumn, TableRowColumn, Avatar} from 'material-ui';

const OrderProductsList = ({order, products}) => {
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
                        <TableHeaderColumn colSpan="5" style={{textAlign: 'center'}}>
                            Detalle
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
                        let thisProduct = products.filter((product, key) => {
                            return product.id === p.product;
                        })[0];
                        const productName = thisProduct.name;
                        const content = thisProduct.presentation;
                        const src = thisProduct.image;
                        return(
                            <TableRow key={index}>
                                <TableRowColumn><Avatar src={src}/></TableRowColumn>
                                <TableRowColumn>{content}</TableRowColumn>
                                <TableRowColumn>{p.amount}</TableRowColumn>
                                <TableRowColumn>{productName}</TableRowColumn>
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
        </div>
    );
};

export default OrderProductsList;