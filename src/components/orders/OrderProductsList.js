import React from 'react';
import {Table, TableHeader, TableBody, TableFooter, TableRow, TableHeaderColumn, TableRowColumn, FlatButton} from 'material-ui';

const OrderProductsList = ({order, products}) => {
    let productsLocal = [];
    console.log(order.products);
    console.log(products);
    for (let prop in order.products){
        productsLocal.push(order.products[prop]);
    }
    console.log(productsLocal);
    return (
        <div>
            <Table className={"table-body"}>
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn colSpan="4" style={{textAlign: 'center'}}>
                            Super Header
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip="ID">ID</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Cantidad">Cantidad</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Nombre">Nombre</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Subtotal" >Subtotal</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}>

                    {productsLocal.map( (p, index) => {
                        let productName = products.filter((product, key) => {
                            return product.id === p.product;
                        })[0].name;
                        return(
                            <TableRow key={index}>
                                <TableRowColumn>{p.product}</TableRowColumn>
                                <TableRowColumn>{p.amount}</TableRowColumn>
                                <TableRowColumn>{productName}</TableRowColumn>
                                <TableRowColumn>{p.subtotal}</TableRowColumn>
                            </TableRow>
                        )
                    })}
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