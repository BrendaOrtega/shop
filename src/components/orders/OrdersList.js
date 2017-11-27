import React from 'react';
import {Table, TableHeader, TableBody, TableFooter, TableRow, TableHeaderColumn, TableRowColumn, FlatButton} from 'material-ui';

export const OrdersList = ({orders, history}) => {
    return (
        <div>
            <Table className={"table-body"}>
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn colSpan="4" tooltip="Super Header" style={{textAlign: 'center'}}>
                            Lista de Ordenes
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip="Id">Id</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Usuario">Usuario</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Total">Presentation</TableHeaderColumn>
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
                                <TableRowColumn>{p.total}</TableRowColumn>
                                <TableRowColumn >
                                    <FlatButton
                                        label="Detalle"
                                        secondary={true}
                                        onClick={() => {
                                            history.push(p.id)
                                        }}
                                    />
                                </TableRowColumn>
                                {/*<TableRowColumn>editar</TableRowColumn>*/}
                            </TableRow>
                        )):
                            <TableRow>
                                <TableRowColumn colSpan="4">No hay datos</TableRowColumn>
                            </TableRow>
                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                            Super Footer
                        </TableRowColumn>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
};
