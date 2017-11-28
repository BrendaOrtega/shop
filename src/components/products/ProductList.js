import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter, IconButton} from 'material-ui';
import './products.css';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/editor/mode-edit';

const ProductList = ({products, fetched, deleteProduct, updateProduct}) => {
    if(!fetched) return(<p>Loading</p>);
    console.log(products);
    return (
        <Table className={"table-body"}>
            <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn colSpan="5" tooltip="Super Header" style={{textAlign: 'center'}}>
                        Products List
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
                        <TableRowColumn>
                            <IconButton onClick={()=>deleteProduct(p)}>
                                <Delete/>
                            </IconButton>
                        </TableRowColumn>
                        <TableRowColumn>
                            <IconButton onClick={()=>updateProduct(p)}>
                                <Edit/>
                            </IconButton>
                        </TableRowColumn>

                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableRowColumn colSpan="5" style={{textAlign: 'center'}}>
                        Super Footer
                    </TableRowColumn>
                </TableRow>
            </TableFooter>
        </Table>
    )
};

export default ProductList;