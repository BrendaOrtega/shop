import React from 'react';
import './ticket.css';
import {Table, TableHeader, TableBody, TableFooter, TableRow, TableHeaderColumn, TableRowColumn, Avatar, FloatingActionButton} from 'material-ui';



const Ticket = ({order, products, allProducts}) => {
    console.log('la orden',order);
    return (
        <div className="ticket">

            <Table>
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn colSpan="4" style={{textAlign: 'center'}}>
                            <h3>Orden {order.id}</h3>
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip="Nombre">Nombre</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Presentación">Presentación</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Cantidad">Cantidad</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Subtotal" >Subtotal</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}>

                    {products.map((p, key)=>{
                        let product = allProducts.filter((product, key) => {
                            return product.id === p.product;
                        })[0];

                        return(
                            <TableRow>
                                <TableRowColumn>{p.product.name}</TableRowColumn>
                                <TableRowColumn>{p.product.presentation}</TableRowColumn>
                                <TableRowColumn>{p.amount}</TableRowColumn>
                                <TableRowColumn>${p.subtotal}</TableRowColumn>
                            </TableRow>
                        );
                    })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableRowColumn colSpan="4" style={{textAlign: 'right'}}>
                            Total ${order.total}
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn colSpan="4" style={{textAlign: 'center'}}>

                            <div>
                                Shopy SA de CV <br/>
                                Developed by Fixter
                            </div>
                        </TableRowColumn>


                    </TableRow>
                </TableFooter>
            </Table>


        </div>
    )
};

export default Ticket;