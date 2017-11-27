import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui';
import './products.css';

const ProductList = ({products, fetched, deleteProduct}) => {
    if(!fetched) return(<p>Loading</p>);
    console.log(products);
    return (
        <Table className={"table-body"}>
            <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                        Super Header
                    </TableHeaderColumn>
                </TableRow>
                <TableRow>
                    <TableHeaderColumn tooltip="ID">ID</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Nombre">Name</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Presentación">Presentation</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Borrar" >Borrar</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Editar">Editar</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody
                displayRowCheckbox={false}>

                {products.map( (p, index) => (
                    <TableRow key={index}>
                        <TableRowColumn>{p.id}</TableRowColumn>
                        <TableRowColumn>{p.name}</TableRowColumn>
                        <TableRowColumn>{p.presentation}</TableRowColumn>
                        <TableRowColumn onClick={()=>deleteProduct(p)}>borrar</TableRowColumn>
                        <TableRowColumn>editar</TableRowColumn>

                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                        Super Footer
                    </TableRowColumn>
                </TableRow>
            </TableFooter>
        </Table>
    )
};

export default ProductList;